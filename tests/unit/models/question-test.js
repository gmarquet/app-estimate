import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

module('Unit | Model | question', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = run(() => store.createRecord('question', {}));
    assert.ok(model);
  });

  test('hasOneAnswer computed property', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = run(() => store.createRecord('question', {
      answers: [
        store.createRecord('answer', {text: "answer1", selected:false}),
        store.createRecord('answer', {text: "answer2", selected:true}),
        store.createRecord('answer', {text: "answer3", selected:false})
      ]
    }));

    assert.ok(model.get('hasOneAnswer'));
  });

  test('isValid computed property comportement', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = run(() => store.createRecord('question', {
      passable: false,
      passed: false,
      answers: [
        store.createRecord('answer', {text: "answer1", selected:false}),
        store.createRecord('answer', {text: "answer2", selected:false}),
        store.createRecord('answer', {text: "answer3", selected:false})
      ]
    }));

    assert.ok(!model.get('isValid'));

    run(() =>{
      model.get("answers").objectAt(1).set('selected', true);
    });

    assert.ok(model.get('isValid'));

    run(() =>{
      model.get("answers").objectAt(1).set('selected', false);
      model.setProperties({
        passed: true,
        passable: true,
      });
    });

    assert.ok(model.get('isValid'));

  });


  test('totalDuration and coefficientTotal computed properties calculation', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = run(() => store.createRecord('question', {
      answers: [
        store.createRecord('answer', {duration: 1, coefficient: 0.1, selected:false}),
        store.createRecord('answer', {duration: 2, coefficient: 0.2, selected:false}),
        store.createRecord('answer', {duration: 3, coefficient: 0.3, selected:true}),
      ]
    }));

    assert.equal(model.get('totalDuration'), 3);
    assert.equal(model.get('coefficientTotal'), 0.3);

    run(() =>{
      model.get('answers').objectAt(1).set('selected', true);
    })

    assert.equal(model.get('totalDuration'), 5);
    assert.equal(model.get('coefficientTotal'), 0.5);
  });


  test('selectAnswer simple comportement', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = run(() => store.createRecord('question', {
      answers: [
        store.createRecord('answer', {selected:false}),
        store.createRecord('answer', {selected:false}),
        store.createRecord('answer', {selected:false}),
      ]
    }));


    run(() =>{
      model.selectAnswer(model.get('answers').objectAt(1));
    })

    assert.ok(model.get('answers').objectAt(1).get('selected'));

    run(() =>{
      model.selectAnswer(model.get('answers').objectAt(2));
    })

    assert.ok(model.get('answers').objectAt(2).get('selected'));
    assert.equal(model.get('answers').filterBy('selected', true).length, 1);

  });


  test('selectAnswer multiple comportement', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = run(() => store.createRecord('question', {
      multiple: true,
      answers: [
        store.createRecord('answer', {selected:false}),
        store.createRecord('answer', {selected:false}),
        store.createRecord('answer', {selected:false}),
      ]
    }));

    run(() =>{
      model.selectAnswer(model.get('answers').objectAt(1));
    })

    assert.ok(model.get('answers').objectAt(1).get('selected'));

    run(() =>{
      model.selectAnswer(model.get('answers').objectAt(2));
    })

    assert.ok(model.get('answers').objectAt(2).get('selected'));
    assert.equal(model.get('answers').filterBy('selected', true).length, 2);

  });
});

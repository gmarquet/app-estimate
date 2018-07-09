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

});

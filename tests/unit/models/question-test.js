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

});

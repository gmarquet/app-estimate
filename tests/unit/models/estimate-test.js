import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import EmberObject from '@ember/object';
import { get } from '@ember/object';
import ArrayProxy from '@ember/array/proxy';

module('Unit | Model | estimate ', function(hooks) {
  setupTest(hooks);

  test('setAnswersFromQuestions', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('estimate', {});
    assert.ok(model);

    let questions = [
      EmberObject.create({
        title_fr: "Q1",
        title_en: "Q1",
        hasOneAnswer: true,
        answers: [
          EmberObject.create({name: "a", selected: true}),
          EmberObject.create({name: "b", selected: false}),
          EmberObject.create({name: "c", selected: false}),
          EmberObject.create({name: "d", selected: true}),
        ]
      }),
      EmberObject.create({
        title_fr: "Q2",
        title_en: "Q2",
        hasOneAnswer: false,
        answers: [
          EmberObject.create({name: "e", selected: false}),
          EmberObject.create({name: "f", selected: false}),
          EmberObject.create({name: "g", selected: false}),
          EmberObject.create({name: "h", selected: false}),
        ]
      }),
    ]

    model.setAnswersFromQuestions(questions);
    assert.equal(get(model, "answers").length, 1);
    assert.equal(get(model, "answers").objectAt(0).title_fr, "Q1");
    assert.equal(get(model, "answers").objectAt(0).answers.length, 2);

  });
});

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import EmberObject from '@ember/object';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | question-component', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('question', {
      title: "How to do that ?"
    });

    await render(hbs`{{question-component question=question}}`);

    assert.equal(this.$('.question-title').text().trim(), "How to do that ?");
    assert.equal(this.$('.answers').text().trim(), "No answer for this question");
  });

  test('Click on answer change select', async function(assert) {
    this.set('question', {
      title: "How to do that ?",
      answers: [
        EmberObject.create({ text: "answer 1", selected: false}),
        EmberObject.create({ text: "answer 2", selected: false}),
        EmberObject.create({ text: "answer 3", selected: false}),
      ]
    });

    await render(hbs`{{question-component question=question}}`);
    await click('.answers > div ');

    assert.ok(this.$('.answers > div ').hasClass('selected'));
  });
});

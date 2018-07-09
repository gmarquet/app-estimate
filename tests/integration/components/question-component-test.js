import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
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
});

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | question-link', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Template block usage:
    await render(hbs`
      {{#question-link "question" 5}}
        template block text
      {{/question-link}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});

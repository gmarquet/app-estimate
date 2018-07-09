import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | plus-one', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputValue', 15);

    await render(hbs`{{plus-one inputValue}}`);

    assert.equal(this.element.textContent.trim(), "16");

    this.set('inputValue', null);
    assert.equal(this.element.textContent.trim(), "");

    this.set('inputValue', {});
    assert.equal(this.element.textContent.trim(), "");
  });
});

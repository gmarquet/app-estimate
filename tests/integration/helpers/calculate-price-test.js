import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | calculate-price', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('dailyCost', 100);
    this.set('duration', 3);

    await render(hbs`{{calculate-price dailyCost duration}}`);

    assert.equal(this.element.textContent.trim(), 3*100);

    this.set('duration', "dsqd");
    assert.equal(this.element.textContent.trim(), 0);

    this.set('duration', 3.000001);
    assert.equal(this.element.textContent.trim(), 3*100);
  });
});

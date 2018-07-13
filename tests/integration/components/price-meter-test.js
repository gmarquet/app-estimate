import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | price-meter', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('model', []);

    await render(hbs`{{price-meter model=model}}`);

    assert.equal(this.element.querySelectorAll('table').length, 2);
  });

  test('Toggle details', async function(assert) {
    this.set('model', []);
    this.set('totalPrice', 0);

    await render(hbs`{{price-meter model=model totalPrice=totalPrice}}`);

    assert.ok(this.element.querySelector('.toggle-details').classList.contains('notvisible'));

    await this.set('totalPrice', 1000);
    assert.ok(!this.element.querySelector('.toggle-details').classList.contains('notvisible'));
    assert.ok(!this.element.querySelector('.collapse').classList.contains('show'));

    await click('.toggle-details button');
    assert.ok(this.element.querySelector('.collapse').classList.contains('show'));
  });
});

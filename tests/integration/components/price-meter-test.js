import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | price-meter', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('model', [
      EmberObject.create({totalDuration: 1, coefficientTotal: 0.2}),
      EmberObject.create({totalDuration: 1, coefficientTotal: 0.2}),
      EmberObject.create({totalDuration: 1, coefficientTotal: 0.2}),
      EmberObject.create({totalDuration: 1, coefficientTotal: 0.2}),
      EmberObject.create({totalDuration: 1, coefficientTotal: 0.2}),
    ]);

    await render(hbs`{{price-meter model=model}}`);

    assert.equal(this.$('.table').length, 1);
  });
});

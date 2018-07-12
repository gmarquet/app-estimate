import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';


module('Integration | Component | send-email', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    this.set('model', [EmberObject.create({answers:[]})]);
    await render(hbs`{{send-email model=model}}`);

    assert.equal(this.$('.btn').length, 1);
    // return this.pauseTest();
  });

});

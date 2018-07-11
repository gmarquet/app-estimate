import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

const i18nStub = Service.extend({
  locale: 'fr',
  init(){
    this._super(...arguments);
    this.locales = ['fr', 'en'];
  }
});

module('Integration | Helper | format-price', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:i18n', i18nStub);
  });

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{format-price inputValue}}`);

    this.set('inputValue', '');
    assert.equal(this.element.textContent.trim(), '0 €');

    this.set('inputValue', null);
    assert.equal(this.element.textContent.trim(), '0 €');

    this.set('inputValue', {test: "dsqdsq"});
    assert.equal(this.element.textContent.trim(), '0 €');
  });
});

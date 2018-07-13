import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';


const i18nStub = Service.extend({
  locale: 'fr',
  init(){
    this._super(...arguments);
    this.locales = ['fr', 'en', 'de', 'jp'];
  }
});

module('Integration | Component | language-selector', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:i18n', i18nStub);
  });

  test('it renders', async function(assert) {
    await render(hbs`{{language-selector}}`);

    assert.equal(this.element.querySelectorAll('a').length, 4);
    assert.equal(this.element.querySelector('img').getAttribute("src"), "/assets/images/fr.png");

    await click('a:last-of-type');
    assert.equal(this.element.querySelector('img').getAttribute("src"), "/assets/images/jp.png");
  });
});

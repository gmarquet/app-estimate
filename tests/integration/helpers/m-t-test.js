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

module('Integration | Helper | m-t', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:i18n', i18nStub);
  });

  test('it renders', async function(assert) {
    this.set('model', { title_fr: "abc", title_en: "def"});

    await render(hbs`{{m-t model "title"}}`);
    assert.equal(this.element.textContent.trim(), 'abc');
  });
});

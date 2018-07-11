import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';


const i18nStub = Service.extend({
  locale: 'fr',
  init(){
    this._super(...arguments);
    this.locales = ['fr', 'en'];
  }
});

module('Integration | Component | language-selector', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:i18n', i18nStub);
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{language-selector}}`);

    assert.equal(this.$('a').length, 2);
    assert.equal(this.$('img').attr("src"), "/assets/images/fr.png");

    await click('a:last-of-type');
    assert.equal(this.$('img').attr("src"), "/assets/images/en.png");
  });
});

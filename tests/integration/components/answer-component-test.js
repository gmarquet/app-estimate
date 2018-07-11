import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import $ from 'jquery';
import Service from '@ember/service';


const i18nStub = Service.extend({
  locale: 'fr',
  init(){
    this._super(...arguments);
    this.locales = ['fr', 'en'];
  }
});


module('Integration | Component | answer-component', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:i18n', i18nStub);
  });

  test('it renders', async function(assert) {
    this.set('answer', {
      text_fr: 'lorem ipsum',
    });
    await render(hbs`{{answer-component answer=answer}}`);

    assert.equal(this.$('h4').text().trim(), 'lorem ipsum');
    assert.ok(!$(".answer").hasClass("selected"));
    await click('h4');
    assert.ok(!$(".answer").hasClass("selected"));


  });
});

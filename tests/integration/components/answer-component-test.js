import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, /*click*/ } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
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
      title_fr: 'lorem ipsum',
      icon: 'home',
    });
    await render(hbs`{{answer-component answer=answer}}`);

    assert.equal(this.element.querySelector('.answer-title').textContent.trim(), 'lorem ipsum');
    assert.ok(this.element.querySelector('.answer-icon svg').classList.contains('fa-home'));
    assert.ok(!this.element.querySelector('.answer').classList.contains('selected'));

    await this.set('answer.selected', true);
    assert.ok(this.element.querySelector('.answer-icon svg').classList.contains('fa-check'));
    assert.ok(this.element.querySelector('.answer').classList.contains('selected'));

  });
});

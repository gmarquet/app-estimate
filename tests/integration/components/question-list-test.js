import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

const routerStub = Service.extend({
  currentRouteName: 'question',
  currentURL: '/3',
});

module('Integration | Component | question-list', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:router', routerStub);
  });

  test('it renders', async function(assert) {
    this.set('questions', [{},{},{},{},{},])
    await render(hbs`{{question-list questions=questions}}`);

    assert.equal(this.$('a').length, 5);

  });

  test('Active link', async function(assert) {
    this.set('questions', [{id: "1"},{id: "2"},{id: "3"},{id: "4"},{id: "5"}])
    await render(hbs`{{question-list questions=questions}}`);

    assert.ok(this.$('a:eq(2)').hasClass('active'));
    assert.ok(!this.$('a:eq(1)').hasClass('active'));
  });
});

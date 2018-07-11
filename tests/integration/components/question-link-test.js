import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { run } from '@ember/runloop'

module('Integration | Component | question-link', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    this.set('active', false);
    this.set('isValid', false);
    // Template block usage:
    await render(hbs`
      {{#question-link "question" 5 isValid=isValid active=active}}
        template block text
      {{/question-link}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
    assert.ok(this.$('a').hasClass('badge-primary'));

    run(() =>{
      this.set('isValid', true);
    });

    assert.ok(this.$('a').hasClass('badge-success'));

    run(() =>{
      this.set('active', true);
    });

    assert.ok(this.$('a').hasClass('badge-secondary'));
  });
});

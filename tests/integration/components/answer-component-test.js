import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import $ from 'jquery';

module('Integration | Component | answer-component', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('answer', {
      image: 'answer.png',
      text: 'lorem ipsum',
    });
    await render(hbs`{{answer-component answer=answer}}`);

    assert.equal(this.$('.answer-image').attr('src'), 'answer.png');
    assert.equal(this.$('.answer-text').text().trim(), 'lorem ipsum');
    assert.ok(!$(".answer").hasClass("selected"));
    await click('img');
    assert.ok(!$(".answer").hasClass("selected"));

  });
});

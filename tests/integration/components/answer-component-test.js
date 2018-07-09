import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

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

  });
});

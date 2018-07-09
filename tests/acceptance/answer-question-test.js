import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { click, find } from '@ember/test-helpers';
import $ from 'jquery';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';


module('Acceptance | answer question', function(hooks) {
  setupApplicationTest(hooks)
  setupMirage(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.equal($('.question').length, 1);
  });

  test('Select and deselect answer ', async function(assert) {
    await visit('/');

    const elemSelector = '.question:first-of-type .answer:nth-child(2)';
    await click(find(elemSelector));

    assert.ok(find(elemSelector).classList.contains('selected'));
    assert.ok(find('.question:first-of-type').classList.contains('question-has-one-answer'));

    await click(find(elemSelector));
    assert.ok(!find(elemSelector).classList.contains('selected'));
    assert.ok(!find('.question:first-of-type').classList.contains('question-has-one-answer'));
    return this.pauseTest();
  });
});

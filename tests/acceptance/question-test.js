import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import $ from 'jquery';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';


module('Acceptance | question', function(hooks) {
  setupApplicationTest(hooks)
  setupMirage(hooks);

  test('prev and next button', async function(assert) {
    await visit('/1');
    assert.equal(currentURL(), '/1');

    await click('.button-next');
    assert.equal(currentURL(), '/2');

    await click('.button-prev');
    assert.equal(currentURL(), '/1');

    await click('.button-prev');
    assert.equal(currentURL(), '/');

    await click('.start-questions');
    while(currentURL() !== '/send-estimate'){
      await click('.button-next');
    }

    assert.equal(currentURL(), '/send-estimate');
  });

  test('isValid question list', async function(assert) {
    await visit('/1');

    await click('.answer:first-of-type');
    assert.equal(currentURL(), '/2');
    assert.ok($('.question-list a:eq(1)').hasClass("badge-success"));
    assert.ok(!$('.question-list a:eq(2)').hasClass("badge-success"));

    await click('.button-next');
    assert.equal(currentURL(), '/3');
    assert.ok(!$('.question-list a:eq(2)').hasClass("badge-success"));

    await click('.button-next');
    assert.equal(currentURL(), '/4');

    await click('.button-next');
    assert.ok($('.question-list a:eq(4)').hasClass("badge-success"));
    assert.equal(currentURL(), '/5');
  });

});


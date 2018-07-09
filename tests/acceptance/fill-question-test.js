import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { click, /*find*/ } from '@ember/test-helpers';
import $ from 'jquery';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';


module('Acceptance | fill question', function(hooks) {
  setupApplicationTest(hooks)
  setupMirage(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });

  test('Fast filling of the questions', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');

    await click('.start-questions');

    assert.equal(currentURL(), '/1');
    assert.equal($('.question').length, 1);

    while(currentURL() !== '/send-estimate'){
      assert.equal($('.question').length, 1);
      if ($('.button-next').length) {
        await click('.answer:first-of-type');
        await click('.button-next');
      }else{
        await click('.answer:first-of-type')
      }
    }

    assert.equal(currentURL(), '/send-estimate');
  });

});


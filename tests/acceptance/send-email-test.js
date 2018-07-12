import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import $ from 'jquery';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | send email', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('Send email with full data', async function(assert) {
    await visit('/');

    await click('.start-questions');

    await click('.answers :nth-child(2)');
    await click('.button-next');
    assert.equal(currentURL(), '/2');

    await click('.answers :nth-child(3)');
    await click('.button-next');
    assert.equal(currentURL(), '/3');

    await click('.answers :nth-child(2)');
    await click('.button-next');
    assert.equal(currentURL(), '/4');

    await click('.answers :nth-child(1)');
    await click('.answers :nth-child(2)');
    await click('.answers :nth-child(4)');
    await click('.button-next');
    assert.equal(currentURL(), '/5');

    await click('.answers :nth-child(1)');
    await click('.answers :nth-child(2)');
    await click('.answers :nth-child(4)');
    await click('.answers :nth-child(5)');
    await click('.answers :nth-child(6)');
    await click('.button-next');
    assert.equal(currentURL(), '/6');

    await click('.answers :nth-child(3)');
    await click('.answers :nth-child(2)');
    await click('.button-next');
    assert.equal(currentURL(), '/7');

    await click('.button-next');
    assert.equal(currentURL(), '/8');

    await click('.button-next');
    assert.equal(currentURL(), '/9');

    await click('.button-next');
    assert.equal(currentURL(), '/send-estimate');
    assert.equal($('#email-content p').length, 9);

    // await click('.button-send-email');
  });
});

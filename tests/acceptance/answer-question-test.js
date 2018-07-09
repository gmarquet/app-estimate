import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
// import { click, find } from '@ember/test-helpers';
import $ from 'jquery';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';


module('Acceptance | answer question', function(hooks) {
  setupApplicationTest(hooks)
  setupMirage(hooks);

  test('visiting /1', async function(assert) {
    await visit('/1');

    assert.equal(currentURL(), '/1');
    assert.equal($('.question').length, 1);
  });

});

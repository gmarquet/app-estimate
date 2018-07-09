import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | send-estimate', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:send-estimate');
    assert.ok(route);
  });
});

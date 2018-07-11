import EmberObject from '@ember/object';
import EstimateMathsMixin from 'estimate-my-app/mixins/estimate-maths';
import { module, test } from 'qunit';

module('Unit | Mixin | estimate-maths', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let EstimateMathsObject = EmberObject.extend(EstimateMathsMixin);
    let subject = EstimateMathsObject.create();
    assert.ok(subject);
  });
});

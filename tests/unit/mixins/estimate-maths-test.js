import EmberObject from '@ember/object';
import EstimateMathsMixin from 'estimate-my-app/mixins/estimate-maths';
import { module, test } from 'qunit';

module('Unit | Mixin | estimate-maths', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let EstimateMathsObject = EmberObject.extend(EstimateMathsMixin);
    let subject = EstimateMathsObject.create({model:[]});
    assert.ok(subject);
    assert.equal(subject.get('totalPrice'), 0);
  });


  test('Computed properties calculations', function (assert) {
    let EstimateMathsObject = EmberObject.extend(EstimateMathsMixin);
    let subject = EstimateMathsObject.create({
      model: [
        EmberObject.create({coefficientTotal: 0.1, totalDuration: 1}),
        EmberObject.create({coefficientTotal: 0.1, totalDuration: 1}),
        EmberObject.create({coefficientTotal: 0, totalDuration: 1}),
      ]
    });

    assert.equal(subject.get('totalPrice'), 1400);
    assert.equal(subject.get('totalDuration'), 3.5);
    assert.equal(subject.get('deliveryTime'), 2);

    subject.get('model').objectAt(2).set('coefficientTotal', 0.1);
    assert.equal(subject.get('totalPrice'), 1600);
    assert.equal(subject.get('totalDuration'), 4);

    subject.get('model').objectAt(2).set('totalDuration', 6);
    assert.equal(subject.get('totalDuration'), 10.5);
    assert.equal(subject.get('deliveryTime'), 4);
  });
});

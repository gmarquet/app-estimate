import EmberObject from '@ember/object';
import EstimateMathsMixin from 'estimate-my-app/mixins/estimate-maths';
import { module, test } from 'qunit';

module('Unit | Mixin | estimate-maths', function() {


  test('Computed properties calculations', function (assert) {
    let EstimateMathsObject = EmberObject.extend(EstimateMathsMixin);
    let subject = EstimateMathsObject.create({
      model: [
        EmberObject.create({
          coefficientTotal: 0.1,
          totalDuration: 1,
          answers: [
            EmberObject.create({coefficientGeneral:0}),
            EmberObject.create({coefficientGeneral:0}),
            EmberObject.create({coefficientGeneral:0})
          ]
        }),
        EmberObject.create({coefficientTotal: 0.1, totalDuration: 1, answers:[]}),
        EmberObject.create({coefficientTotal: 0, totalDuration: 1, answers:[]}),
      ]
    });

    assert.equal(subject.get('totalPrice'), 1200);
    assert.equal(subject.get('totalDuration'), 3);
    assert.equal(subject.get('deliveryTime'), 1);
    assert.equal(subject.get('coefficientTotal'), 0.2);
    assert.equal(subject.get('model').objectAt(0).get('answers').objectAt(0).get('coefficientGeneral'), 0.2);

    subject.get('model').objectAt(2).set('totalDuration', 6);
    assert.equal(subject.get('totalDuration'), 8);
    assert.equal(subject.get('deliveryTime'), 3);

    subject.get('model').objectAt(2).set('coefficientTotal', 0.3);
    assert.equal(subject.get('model').objectAt(0).get('answers').objectAt(0).get('coefficientGeneral'), 0.5);
  });

  test('Discount calculations', function (assert) {
    let EstimateMathsObject = EmberObject.extend(EstimateMathsMixin);
    let subject = EstimateMathsObject.create({
      model: [
        EmberObject.create({totalDuration: 1, answers:[]}),
        EmberObject.create({totalDuration: 1, answers:[]}),
        EmberObject.create({totalDuration: 1, answers:[]}),
      ]
    });

    assert.equal(subject.get('totalDuration'), 3);
    assert.equal(subject.get('discountPercent'), 0);
    assert.equal(subject.get('discountValue'), 0);
    assert.equal(subject.get('totalPrice'), 1200);

    subject.get('model').objectAt(2).set('totalDuration', 3);
    assert.equal(subject.get('discountPercent'), 0.1);
    assert.equal(subject.get('discountValue'), 200);
    assert.equal(subject.get('totalPrice'), 1800);

    subject.get('model').objectAt(2).set('totalDuration', 14);
    assert.equal(subject.get('discountPercent'), 0.3);
    assert.equal(subject.get('discountValue'), 1920);
    assert.equal(subject.get('totalPrice'), 4480);
  });
});

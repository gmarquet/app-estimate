import Mixin from '@ember/object/mixin';
import { get, computed } from '@ember/object';

export default Mixin.create({
  dailyCost: 400,

  totalPrice: computed('dailyCost', 'totalDuration', function(){
    let { dailyCost, totalDuration } = this;
    return dailyCost * totalDuration ;
  }),

  duration: computed('model.@each.totalDuration', function(){
    return get(this, "model").reduce(function(acc, q){
      return get(q, "totalDuration") + acc;
    },0);
  }),

  totalDuration: computed('coefficientTotal', 'duration', function(){
    let { duration, coefficientTotal } = this;
    let a = Number.parseFloat(duration * (1.0 + coefficientTotal)).toFixed(2);
    return Math.round(a*2)/2;
  }),

  coefficientTotal: computed('model.@each.coefficientTotal', function(){
    return get(this, "model").reduce(function(acc, q){
      return get(q, "coefficientTotal") + acc;
    },0);
  }),

  deliveryTime: computed('totalDuration',function(){
    return Math.ceil((1.5 * get(this, "totalDuration") / 5));
  }),
});

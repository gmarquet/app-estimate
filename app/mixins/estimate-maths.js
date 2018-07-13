import Mixin from '@ember/object/mixin';
import { get, computed, observer } from '@ember/object';
import { on } from '@ember/object/evented';

export default Mixin.create({
  dailyCost: 500,

  discountPercent: computed('totalDuration', function(){
    let { totalDuration } = this;
    let discountTab = [
      {days: 0, percent: 0},
      {days: 5, percent: 0.1},
      {days: 10, percent: 0.2},
      {days: 15, percent: 0.3},
    ];
    let a = discountTab.sortBy('days').reduce(function(previousValue, item){
      if(totalDuration >= get(item, "days")) return item;
      return previousValue;
    }, discountTab.objectAt(0));
    return get(a, 'percent');
  }),

  discountValue: computed('discountPercent', 'fullPrice', function(){
    let { discountPercent, fullPrice } = this;
    return discountPercent * fullPrice ;
  }),

  fullPrice: computed('dailyCost', 'totalDuration', function(){
    let { dailyCost, totalDuration } = this;
    return dailyCost * totalDuration ;
  }),

  totalPrice: computed('fullPrice', 'discountValue', function(){
    let { fullPrice, discountValue } = this;
    return fullPrice - discountValue;
  }),

  totalDuration: computed('model.@each.totalDuration', function(){
    return get(this, "model").reduce(function(acc, q){
      return get(q, "totalDuration") + acc;
    },0);
  }),

  coefficientTotal: computed('model.@each.coefficientTotal', function(){
    return get(this, "model").reduce(function(acc, q){
      return get(q, "coefficientTotal") + acc;
    },0);
  }),

  deliveryTime: computed('totalDuration',function(){
    return Math.ceil((1.5 * get(this, "totalDuration") / 5));
  }),

  _updateCoefficientGeneral: on('init', observer('coefficientTotal',function(){
    const coefficientTotal = get(this, 'coefficientTotal');
    get(this, 'model').forEach(function(q){
      get(q, 'answers').setEach('coefficientGeneral', coefficientTotal);
    });

  })),
});

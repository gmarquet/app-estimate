import Service from '@ember/service';
import { get, computed, observer } from '@ember/object';
import { on } from '@ember/object/evented';

export default Service.extend({

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

  totalDuration: computed('questions.@each.totalDuration', function(){
    return get(this, "questions").reduce(function(acc, q){
      return get(q, "totalDuration") + acc;
    },0);
  }),

  totalCoefficient: computed('questions.@each.totalCoefficient', function(){
    return get(this, "questions").reduce(function(acc, q){
      return get(q, "totalCoefficient") + acc;
    },0);
  }),

  deliveryTime: computed('totalDuration',function(){
    return Math.ceil((1.5 * get(this, "totalDuration") / 5));
  }),

  _updateCoefficientGeneral: on('init', observer('totalCoefficient',function(){
    const totalCoefficient = get(this, 'totalCoefficient');
    get(this, 'questions').forEach(function(q){
      get(q, 'answers').setEach('coefficientGeneral', totalCoefficient);
    });

  })),

});

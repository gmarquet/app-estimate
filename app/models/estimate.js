import DS from 'ember-data';
import { get, computed, observer } from '@ember/object';
import { calculateDuration } from 'app-estimate/helpers/calculate-duration';
import { on } from '@ember/object/evented';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  email: attr('string'),
  locale: attr('string'),
  delivery_time: attr('number'),
  total_duration: attr('number'),
  full_price: attr('number'),
  total_price: attr('number'),
  total_coefficent: attr('number'),
  discount_percent: attr('number'),
  discount_value: attr('number'),
  daily_rate: attr('number'),
  answsers_json: attr('json'),

  init(){
    this._super(...arguments);
    this.answers = [];
  },

  discountPercent: computed('totalDuration', function(){
    let { totalDuration } = this;
    let discountTab = [
      {days: 0, percent: 0},
      {days: 5, percent: 0.1},
      {days: 10, percent: 0.2},
      {days: 20, percent: 0.3},
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

  fullPrice: computed('daily_rate', 'totalDuration', function(){
    let { daily_rate, totalDuration } = this;
    return daily_rate * totalDuration ;
  }),

  totalPrice: computed('fullPrice', 'discountValue', function(){
    let { fullPrice, discountValue } = this;
    return fullPrice - discountValue;
  }),

  deliveryTime: computed('totalDuration',function(){
    return Math.ceil((1.5 * get(this, "totalDuration") / 5));
  }),

  totalDuration: computed('answers.@each.duration', 'totalCoefficient',function(){
    const totalCoefficient = get(this, 'totalCoefficient');
    return get(this, "answers").reduce(function(acc, a){
      const duration = get(a, 'duration');
      const totalDuration = calculateDuration([duration, totalCoefficient]);

      return totalDuration + acc;
    },0);
  }),

  totalCoefficient: computed('answers.@each.coefficient', function(){
    return get(this, "answers").reduce(function(acc, a){
      return get(a, "coefficient") + acc;
    },0);
  }),

  sortedQuestions: computed('answers.[]', function(){
    return get(this, 'answers').reduce(function(prev, answer){

      const alreadyAddedQuestion = prev.findBy('question.id', get(answer, 'question.id'));

      if (!alreadyAddedQuestion) {
        prev.addObject({
          question: get(answer, 'question'),
          answers: [answer]
        });
      }else{
        get(alreadyAddedQuestion, 'answers').addObject(answer);
      }

      return prev;
    }, []).sortBy('question.id');

  }),

});

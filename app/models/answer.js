import DS from 'ember-data';
import { computed } from '@ember/object';


const { attr, belongsTo } = DS;

export default DS.Model.extend({
  title_fr: attr('string'),
  title_en: attr('string'),
  description_fr: attr('string'),
  description_en: attr('string'),
  icon: attr('string', {defaultValue: "lightbulb"}),
  icon_prefix: attr('string', {defaultValue: "fas"}),
  selected: attr('boolean', {defaultValue: false}),
  duration: attr('number', {defaultValue: 1}),
  coefficient: attr('number', {defaultValue: 0}),

  question: belongsTo('question'),

  coefficientGeneral: 0,

  totalDuration: computed('coefficientGeneral', 'duration', function(){
    let { duration, coefficientGeneral } = this;
    let a = Number.parseFloat(duration * (1.0 + coefficientGeneral)).toFixed(2);
    return Math.round(a*2)/2;
  }),

});

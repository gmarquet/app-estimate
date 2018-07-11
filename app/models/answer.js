import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  text_fr: attr('string'),
  text_en: attr('string'),
  description_fr: attr('string'),
  description_en: attr('string'),
  image: attr('string', {defaultValue: "default-answer.png"}),
  selected: attr('booelan'),
  duration: attr('number', {defaultValue: 1}),
  coefficient: attr('number', {defaultValue: 0}),

  question: belongsTo('question'),

});

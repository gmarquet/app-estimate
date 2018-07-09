import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  text: attr('string'),
  description: attr('string'),
  image: attr('string', {defaultValue: "default-answer.png}"}),
  selected: attr('booelan'),

  question: belongsTo('question'),
});

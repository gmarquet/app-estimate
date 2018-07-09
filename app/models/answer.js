import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  text: attr('string'),
  description: attr('string'),
  image: attr('string'),
  selected: attr('booelan'),

  question: belongsTo('question'),
});

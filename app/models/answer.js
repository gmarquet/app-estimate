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
  duration: attr('number', {defaultValue: 1}),
  coefficient: attr('number', {defaultValue: null}),
  question: belongsTo('question'),
  estimate: belongsTo('estimate'),

  selected: false,

});

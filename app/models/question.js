import DS from 'ember-data';
import { get, computed } from '@ember/object';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  title: attr('string'),
  description: attr('string'),
  image: attr('string', {defaultValue: "default-question.png}"}),
  multiple: attr('booelan'),

  answers: hasMany('answer'),

  hasOneAnswer: computed('answers@each.selected', function(){
    return get(this, "answers").isAny('selected', true);
  }),
});

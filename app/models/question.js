import DS from 'ember-data';
import { get, computed } from '@ember/object';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  title_fr: attr('string'),
  title_en: attr('string'),
  description_fr: attr('string'),
  description_en: attr('string'),
  icon: attr('string', {defaultValue: "question"}),
  icon_prefix: attr('string', {defaultValue: "fas"}),
  multiple: attr('boolean'),
  passable: attr('boolean'),
  answers: hasMany('answer'),

  passed: false,

  hasOneAnswer: computed('answers.@each.selected', function(){
    return get(this, "answers").isAny('selected', true);
  }),

  hasCoefficient: computed('answers.@each.coefficient', function(){
    return get(this, "answers").any((a) => get(a, 'coefficient') > 0);
  }),

  isValid: computed('hasOneAnswer', 'passable', 'passed', function(){
    if (get(this, 'hasOneAnswer') || (get(this, 'passable') && get(this, "passed"))) {
      return true;
    }
    return false;
  }),
});

import DS from 'ember-data';
import { get, computed } from '@ember/object';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  title_fr: attr('string'),
  title_en: attr('string'),
  description_fr: attr('string'),
  description_en: attr('string'),
  icon: attr('string', {defaultValue: "question"}),
  multiple: attr('boolean'),
  passable: attr('boolean'),
  passed: attr('boolean'),

  answers: hasMany('answer'),

  totalDuration: computed('answers.@each.selected', function(){
    return get(this, "answers").reduce(function(acc, a){
      if(get(a, "selected")) return get(a, "duration") + acc;
      return acc;
    }, 0);
  }),

  coefficientTotal: computed('answers.@each.selected', function(){
    return get(this, "answers").reduce(function(acc, a){
      if(get(a, "selected")) return get(a, "coefficient") + acc;
      return acc;
    }, 0);
  }),

  hasOneAnswer: computed('answers.@each.selected', function(){
    return get(this, "answers").isAny('selected', true);
  }),

  isValid: computed('hasOneAnswer', 'passable', 'passed', function(){
    if (get(this, 'hasOneAnswer') || (get(this, 'passable') && get(this, "passed"))) {
      return true;
    }
    return false;
  }),


  selectAnswer(a){
    if (get(this, 'multiple')) {
      a.toggleProperty('selected');
    }else{
      get(this, 'answers').forEach((p) =>{
        p.set('selected', false);
      });
      a.set("selected", true);
    }
  }
});

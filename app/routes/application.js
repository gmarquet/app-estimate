import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
  i18n: Ember.inject.service(),
  model(){
    return this.get('store').findAll('question', {include: 'answers'});
  },
  beforeModel() {
    this.set('i18n.locales', ["fr-fr", 'en-us']);
    return this.set('i18n.locale', "fr-fr");
  },

  actions:{
    transitionToNextQuestion(){
      let invalidQuestion = this.modelFor('application').find(function(q){
        return !get(q, 'isValid');
      });

      if(invalidQuestion) return this.transitionTo("question", invalidQuestion);

      return this.transitionTo("send-estimate");

    },
  }
});

import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
  i18n: service(),
  model(){
    return this.get('store').findAll('question', {include: 'answers'});
  },
  beforeModel() {
    this.set('i18n.locales', ["fr", 'en']);
    return this.set('i18n.locale', "fr");
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

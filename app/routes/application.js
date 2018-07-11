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
      let questions = this.modelFor('application');
      let q = this.modelFor('question');

      if(get(q, 'id') === get(questions, "lastObject.id")) return this.transitionTo("send-estimate");

      return this.transitionTo("question", questions.objectAt(questions.indexOf(q) + 1));


    },
    transitionToPrevQuestion(){
      let questions = this.modelFor('application');
      let q = this.modelFor('question');

      if(get(q, 'id') === get(questions, "firstObject.id")) return this.transitionTo("index");

      return this.transitionTo("question", questions.objectAt(questions.indexOf(q) - 1));

    },
  }
});

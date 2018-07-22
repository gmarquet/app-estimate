import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
  i18n: service(),
  question: null,

  model(){
    return this.store.createRecord('estimate', {
      daily_rate: 400,
    });
  },

  beforeModel() {
    this.set('i18n.locales', ["fr", 'en']);
    this.set('i18n.locale', "fr");
    return this.set('questions', this.get('store').findAll('question', {include: 'answers'}));
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.set('questions', get(this, 'questions'));
  },

  actions:{
    transitionToNextQuestion(){
      let questions = this.controllerFor('application').get('questions');
      let q = this.modelFor('question');

      if(get(q, 'id') === get(questions, "lastObject.id")) return this.transitionTo("send-estimate");

      return this.transitionTo("question", questions.objectAt(questions.indexOf(q) + 1));
    },
    transitionToPrevQuestion(){
      let questions = this.controllerFor('application').get('questions');
      let q = this.modelFor('question');

      if(get(q, 'id') === get(questions, "firstObject.id")) return this.transitionTo("index");

      return this.transitionTo("question", questions.objectAt(questions.indexOf(q) - 1));

    },
    selectAnswer(a){
      const selected = get(a, 'selected')
      const estimate = this.modelFor('application');
      const answers = get(estimate, 'answers');
      const questionIsMultiple = get(a, 'question.multiple');

      if(!questionIsMultiple && !selected){
        const previousAnswer = get(a, 'question.answers').filterBy('selected', true);
        answers.removeObjects(previousAnswer);
        previousAnswer.setEach('selected', false);
      }

      if (selected) {
        answers.removeObject(a);
      }else{
        answers.addObject(a);
      }

      a.toggleProperty('selected');
    },
  }
});

import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model(){
    return this.get('store').findAll('question', {include: 'answers'});
  },
  actions:{
    transitionToNextQuestion(){
      let invalidQuestion = this.modelFor('application').find(function(q){
        return !get(q, 'isValid');
      });

      if(invalidQuestion) return this.transitionTo("question", invalidQuestion);

      return this.transitionTo("send-estimate");

    }
  }
});

import Controller from '@ember/controller';
import { get } from '@ember/object';

export default Controller.extend({
  nextUrl: null,
  classNames: ['question'],

  actions:{
    select(a){
      get(this, "model").selectAnswer(a);
    },
    next(){
      let model = get(this, 'model');
      if (get(model, 'passable')) {
        model.set('passed', true);
      }
      this.send('transitionToNextQuestion');
    },
    prev(){
      this.send('transitionToPrevQuestion');
    }
  }
});

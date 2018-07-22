import Controller from '@ember/controller';
import { get } from '@ember/object';

export default Controller.extend({
  actions:{
    select(a){
      this.send('selectAnswer', a);
    },
    next(){
      this.send('transitionToNextQuestion', get(this, 'model'));
    },
    prev(){
      this.send('transitionToPrevQuestion', get(this, 'model'));
    }
  }
});

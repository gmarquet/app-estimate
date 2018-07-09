import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['question'],
  classNameBindings: ['questionHasOneAnswer'],
  questionHasOneAnswer: computed.readOnly('question.hasOneAnswer'),

  actions:{
    toggle(a){
      a.toggleProperty('selected');
    }
  }
});

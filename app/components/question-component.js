import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNameBindings: ['questionHasOneAnswer'],
  questionHasOneAnswer: computed.readOnly('question.hasOneAnswer'),
});

import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['answer', 'card'],
  classNameBindings: ['selected'],
  selected: computed.readOnly('answer.selected'),
});

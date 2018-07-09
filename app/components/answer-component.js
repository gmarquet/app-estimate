import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['answer'],
  classNameBindings: ['selected'],
  selected: computed.readOnly('answer.selected'),
});

import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNameBindings: ['selected'],
  selected: computed.readOnly('answer.selected'),
});

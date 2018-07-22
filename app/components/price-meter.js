import Component from '@ember/component';
import { get, computed } from '@ember/object';

export default Component.extend({
  showDetails: false,
  classNames: ['card', 'p-2'],

  actions: {
    toggleDetails(){
      this.toggleProperty('showDetails');
    }
  }

});

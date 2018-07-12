import Component from '@ember/component';
import EstimateMathsMixin from '../mixins/estimate-maths';

export default Component.extend(EstimateMathsMixin, {
  showDetails: false,

  actions: {
    toggleDetails(){
      this.toggleProperty('showDetails');
    }
  }

});

import Component from '@ember/component';
import EstimateMathsMixin from '../mixins/estimate-maths';

export default Component.extend(EstimateMathsMixin, {
  showDetails: true,

  actions: {
    toggleDetails(){
      this.toggleProperty('showDetails');
    }
  }

});

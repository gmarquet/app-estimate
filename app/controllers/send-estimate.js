import Controller from '@ember/controller';
import EstimateMathsMixin from '../mixins/estimate-maths';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend(EstimateMathsMixin, {
  i18n: service(),
  email: null,
  emailSended: false,
  showError: false,
  isSaving:false,

  init(){
    this._super(...arguments);
    this.model = [];
  },

  actions: {
    sendEmail(){
      this.set('showError', false);
      this.set('isSaving', true);
      let email = get(this, 'store').createRecord('estimate', {
        email : get(this, 'email'),
        locale : get(this, 'i18n.locale'),
        daily_cost: get(this, 'dailyCost'),
        delivery_time: get(this, 'deliveryTime'),
        total_duration: get(this, 'totalDuration'),
        full_price: get(this, 'fullPrice'),
        total_price: get(this, 'totalPrice'),
        discout_percent: get(this, 'discountPercent'),
        discout_value: get(this, 'discountValue'),
      });

      email.setAnswersFromQuestions(get(this, "model"));

      email.save().then(()=>{
        this.set("emailSended", true)
        this.set('isSaving', false);
      }).catch(()=>{
        this.set('isSaving', false);
        this.set('showError', true);
      });
    }
  }
});

import Controller from '@ember/controller';
import { get } from '@ember/object';
import { calculateDuration } from 'app-estimate/helpers/calculate-duration';
import { calculatePrice } from 'app-estimate/helpers/calculate-price';
import { inject as service } from '@ember/service';

export default Controller.extend({
  i18n: service(),
  email: null,
  emailSended: false,
  showError: false,
  isSaving:false,

  init(){
    this._super(...arguments);
  },

  actions: {
    sendEmail(){
      let model = get(this, 'model');
      const locale = get(this, 'i18n.locale');
      this.set('showError', false);
      this.set('isSaving', true);

      model.setProperties({
        locale: locale,
        delivery_time: get(model, 'deliveryTime'),
        total_duration: get(model, 'totalDuration'),
        full_price: get(model, 'fullPrice'),
        total_price: get(model, 'totalPrice'),
        total_coefficent: get(model, 'totalCoefficient'),
        discount_percent: get(model, 'discountPercent'),
        discount_value: get(model, 'discountValue'),
        answsers_json: get(model,'sortedQuestions').map(function(item){

          return {
            question : get(item, 'question.title_'+locale),
            answers : get(item, 'answers').map(function(answer){
              return {
                title: get(answer, 'title_'+locale),
                duration: calculateDuration([
                  get(answer, 'duration'),
                  get(model, 'totalCoefficient')
                ]),
                price: calculatePrice([
                  get(answer, 'duration'),
                  get(model, 'daily_rate'),
                  get(model, 'totalCoefficient'),
                ]),
              }
            }),
          }
        })
      });

      model.save().then(()=>{
        this.set("emailSended", true)
        this.set('isSaving', false);
      }).catch(()=>{
        this.set('isSaving', false);
        this.set('showError', true);
      });
    }
  }
});

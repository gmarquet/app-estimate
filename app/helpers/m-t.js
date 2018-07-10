import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';
import { get, observer } from '@ember/object';

export default Helper.extend({
  i18n: service(),

  compute(params) {
    let model = params[0];
    let attr = params[1];
    if (!model || model[attr]) { return ;}

    let str = attr+'_'+get(this, 'i18n.locale');
    return get(model, str);
  },

  _recomputeOnLocaleChange: observer('i18n.locale', function() {
    this.recompute();
  })
});

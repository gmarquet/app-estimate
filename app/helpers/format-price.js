import Helper from '@ember/component/helper';
import numeral from 'numeral';
import { inject as service } from '@ember/service';
import { get, observer } from '@ember/object';
import { isArray } from '@ember/array';
import 'numeral/fr';


export default Helper.extend({
  i18n: service(),

  compute(params){
    let number = params;
    numeral.locale(get(this, 'i18n.locale'));
    let euroSymbol = "€";

    if (params[1]) {
      euroSymbol = params[1];
    }

    if (isArray(params)) {
      number = params[0];
    }

    if (typeof(number) === 'undefined') {
      number = null;
    }

    if (isNaN(number)) {
      number = null;
    }

    return numeral(number).format('0,00') + " " + euroSymbol;
  },

  _recomputeOnLocaleChange: observer('i18n.locale', function() {
    this.recompute();
  })
});


import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  i18n: service(),
  classNames: ['language-select'],

  actions: {
    setLocale(l) {
      this.set('i18n.locale', l);
    }
  }
});

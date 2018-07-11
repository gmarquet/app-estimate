import Component from '@ember/component';
import EstimateMathsMixin from '../mixins/estimate-maths';

export default Component.extend(EstimateMathsMixin, {

  _removeAccents(strAccents) {
    strAccents = strAccents.split('');
    let strAccentsOut = new Array();
    let strAccentsLen = strAccents.length;
    let accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
    let accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
    for (let y = 0; y < strAccentsLen; y++) {
      if (accents.indexOf(strAccents[y]) != -1) {
        strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
      } else
        strAccentsOut[y] = strAccents[y];
    }
    strAccentsOut = strAccentsOut.join('');
    return strAccentsOut;
  },

  actions: {
    sendEmail(){
      let subject = this.$('#email-subject').text().trim();
      let content = this.$('#email-content').text().trim();
      let link = "mailto:gaetan@gmdev.eu"
      + "?subject=" + escape(this._removeAccents(subject))
      + "&body=" + escape(this._removeAccents(content))
      ;
      let elipse = (link.length > 1900 ) ? "..." : "";
      window.location.href = link.substring(0,1900).concat('\n' + elipse);
    }
  }
});

import Component from '@ember/component';
import EstimateMathsMixin from '../mixins/estimate-maths';

export default Component.extend(EstimateMathsMixin, {
  email: "marquetgaetan@gmail.com",

  actions: {
    sendEmail(){
      let { email } = this;
       var link = "mailto:"+ escape(email)
        + "?cc=gaetan@example.com"
        + "&subject=" + escape(this.$('#email-subject').text().trim())
        + "&body=" + escape(this.$('#email-content').text().trim())
        ;

      console.log(link);
        window.location.href = link;
    }
  }
});

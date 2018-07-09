import Component from '@ember/component';
import { get, computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
  classNames: ['question-list'],

  currentQuestionId: computed('router.{currentRouteName,currentURL}', function(){
    if(get(this, 'router.currentRouteName') !== 'question') return;

    return get(this, 'router.currentURL').substring(1);
  }),
});

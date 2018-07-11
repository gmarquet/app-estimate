import LinkComponent from '@ember/routing/link-component';
import { get, computed } from '@ember/object';

export default LinkComponent.extend({
  classNames : ['badge'],
  classNameBindings: ['badgeType'],
  badgeType: computed('isValid', 'active', function(){
    if(get(this, 'active')) return 'badge-secondary';
    if(get(this, 'isValid')) return 'badge-success';
    return 'badge-primary';
  })

});

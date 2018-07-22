import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    return this.get('store').peekRecord('question', params.id);
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.set('estimate', this.modelFor('application'));
  },
});

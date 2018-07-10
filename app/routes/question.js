import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    return this.get('store').peekRecord('question', params.id);
  },
  setupController(controller, model) {
    // Call _super for default behavior
    this._super(controller, model);

    controller.set('questions', this.modelFor('application'));
  }
});

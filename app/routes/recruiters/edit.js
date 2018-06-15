import Route from '@ember/routing/route';

export default Route.extend({
  models(params) {
    return this.get('store').findRecord('recruiter', params.id);
  }
});

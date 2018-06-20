import Route from '@ember/routing/route';
export default Route.extend({
  model(params) {
    return this.get('store').findRecord('job', params.id)
  },

  actions: {
    delete(record) {
      record.destroyRecord()
    }
  }
});

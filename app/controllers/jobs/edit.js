import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    updateJob() {
      this.get('model').save();
    }
  }
});

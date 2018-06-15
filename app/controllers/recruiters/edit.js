import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    updateRecruiter() {
      this.get('model').save();
    }
  }
});

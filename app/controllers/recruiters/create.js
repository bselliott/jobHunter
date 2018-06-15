import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createRecruiter() {
      this.get('model').save();
    }
  }
});

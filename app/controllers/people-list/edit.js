import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    updatePerson() {
      this.get('model').save();
    }
  }
});

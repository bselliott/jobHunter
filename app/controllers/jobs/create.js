import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createJob() {
      this.get('model').save().then(() => {
        this.transitionToRoute('people-list');
      }, () => {}
    )},
  }
});

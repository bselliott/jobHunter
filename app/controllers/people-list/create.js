import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createPerson() {
      this.get('model').save().then(() => {
        this.transitionToRoute('people-list');
      }, () => {}
    )},
  }
});

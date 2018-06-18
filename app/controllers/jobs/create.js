import Controller from '@ember/controller';
import {computed} from '@ember/object';
export default Controller.extend({
  people: computed(function() {
    return this.get('store').findAll('people');
  }),

  actions: {
    createJob() {
      this.get('model').save().then(() => {
        this.transitionToRoute('people-list');
      }, () => {}
    )},
  }
});

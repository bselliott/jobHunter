import Controller from '@ember/controller';
import {computed} from '@ember/object';
export default Controller.extend({
  jobs: computed(function() {
    return this.get('store').findAll('job');
  }),

  actions: {
    createPerson() {
      this.get('model').set('job', null);
      this.get('model').save().then(() => {
        this.transitionToRoute('people-list');
      }, () => {}
    )},
  }
});

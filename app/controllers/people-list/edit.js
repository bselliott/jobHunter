import Controller from '@ember/controller';
import {computed} from '@ember/object';

export default Controller.extend({
  jobs: computed(function() {
    return this.get('store').findAll('job');
  }),

  actions: {
    updatePerson() {
      this.get('model').save();
    }
  }
});

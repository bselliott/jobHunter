import Controller from '@ember/controller';
import {computed} from '@ember/object';
export default Controller.extend({
  people: computed(function() {
    return this.get('store').findAll('people');
  }),

  actions: {
    updateJob() {
      this.get('model').save();
    }
  }
});

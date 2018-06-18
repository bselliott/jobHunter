import Component from '@ember/component';
import {computed} from '@ember/object';
export default Component.extend({
  person: computed(function() {
    return this.get('store').findAll('people');
  }),

  actions: {
    updateJob() {
      this.get('job').save();
    }
  }
});

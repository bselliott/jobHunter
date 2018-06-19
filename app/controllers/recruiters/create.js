import Controller from '@ember/controller';
import {computed} from '@ember/object';
export default Controller.extend({

  person: computed(function() {
    return this.get('store').findAll('person');
  }),


  actions: {
    createRecruiter() {
      this.get('model').save();
    }
  }
});

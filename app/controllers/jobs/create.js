import Controller from '@ember/controller';
import EmberObject, {computed} from '@ember/object';

export default Controller.extend({

 // people: computed(function() {
 //   return this.get('store').findAll('people');
 // }),

 // personList: computed('people.@each', function() {
   // return this.get('people').map(function(person) {
     // return EmberObject.create({ person: person, selected:false});
 //   })
 // }),

  actions: {
    createJob() {
      this.get('model').save().then(() => {
        this.transitionToRoute('jobs');
      }, () => {}
    )},
  }

    });


import Controller from '@ember/controller';
import EmberObject, {computed} from '@ember/object';
import {inject as service} from '@ember/service';
export default Controller.extend({

  store: service(),

  people: computed(function() {
    return this.get('store').findAll('person');
  }),

  personList: computed('people.@each', function() {
    return this.get('people').map(function(person) {
      return EmberObject.create({ person: person, selected: false})
    })
  }),

  actions: {
    editRecruiter() {
      let list = this.get('personList').map(function(person) {
        if (person.selected){
          return person.person
        }
      }).filter(person => person !== undefined);

      let thing = this.get('model');
      thing.set('person', list);

      this.get('model').save().then(() => {
        this.transitionToRoute('recruiters');
      }, () => {}
      )},

    deleteRecruiter(){
      this.get('model').destroyRecord().then(() => {
        this.transitionToRoute('recruiters')
      }, () => {}
      )},
    makeSelection (selected) {
      selected.toggleProperty('selected');
    },
  }
});

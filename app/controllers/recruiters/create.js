import Controller from '@ember/controller';
import EmberObject, {computed} from '@ember/object';

export default Controller.extend({

  people: computed(function() {
    return this.get('store').findAll('person');
  }),

  personList: computed('people.@each', function() {
    return this.get('people').map(function(person) {
      return EmberObject.create({ person: person, selected: false})
    })
  }),

  actions: {
    createRecruiter() {
      let list = this.get('personList').map(function(person){
        if (person.selected){
          return person.person
        }
      }).filter(person => person !== undefined);

      let thing = this.get('model');
      thing.set('person', list);

      this.get('model').save()
    },
    makeSelection: function(selected){
      selected.toggleProperty('selected');
    },
  }
});

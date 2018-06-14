import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.store.createRecord('person');
  },
  actions: {
    willTransition(){
      if(!this.controller.get('model.id')) {
        this.controller.get('model').deleteRecord();
      }
    }
  }
});

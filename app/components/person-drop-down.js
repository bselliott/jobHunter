import Component from '@ember/component';
export default Component.extend({

  actions: {
    makeSelection: function(selected) {
      let val = this.get('people').filterBy('id', selected)[0];
      let thing = this.get('model');
      thing.set('person', val);
    },
  }
});

import Component from '@ember/component';

export default Component.extend({
  actions: {
    setSelection: function (selected) {
      let val = this.get('jobs').filterBy('id', selected)[0];
      let thing = this.get('model');
      thing.set('job', val);
    },
  }
});

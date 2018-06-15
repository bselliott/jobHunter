import Component from '@ember/component';

export default Component.extend({
  actions: {
    updateJob() {
      this.get('job').save();
    }
  }
});

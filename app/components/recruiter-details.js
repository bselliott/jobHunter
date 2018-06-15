import Component from '@ember/component';

export default Component.extend({
  actions: {
    updateRecruiter() {
      this.get('recruiter').save();
    }
  }
});

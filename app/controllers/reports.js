import Controller from '@ember/controller';

export default Controller.extend({

  jobs: true,
  people: false,
  recruiters: false,

actions: {

  showJobs: function() {
    this.set('jobs', true);
    this.set('people', false);
    this.set('recruiters', false);

  },

    showPeople: function() {
      this.set('jobs', false);
      this.set('people', true);
      this.set('recruiters', false);
    },

    showRecruiters: function() {
      this.set('jobs', false);
      this.set('people', false);
      this.set('recruiters', true);
    }
}
});

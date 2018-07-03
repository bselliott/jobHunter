import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default Route.extend({
  model() {
    return RSVP.hash({
      people: this.get('store').query('person', { job: null}).then(function(cand) {
        return cand;
      }),
      jobs: this.get('store').query('job', { person: null} ),
      recruiters: this.get('store').query('recruiter', { person: null}).then(function(cand) {
        return cand;
      }),
    });
  }
});

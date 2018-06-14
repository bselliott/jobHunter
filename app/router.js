import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('people-list', function() {
    this.route('edit', {path: '/:person_id'});
    this.route('create');
  });
  this.route('jobs');
});

export default Router;

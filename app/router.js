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
  this.route('jobs', function() {
    this.route('create');
    this.route('view', {path: ':id/view'});
    this.route('edit', {path: ':id/edit'});
  });
  this.route('recruiters', function() {
    this.route('create');
    this.route('edit', {path: ':id/edit'});
  });
});

export default Router;

import DS from 'ember-data';
import ENV from 'job-hunter/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.host,
  namespace: 'api'
});

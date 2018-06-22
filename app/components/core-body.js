import CoreBody from 'apps-core-ui/components/core-body';
import { computed } from '@ember/object';
import { A as emberA } from '@ember/array';

export default CoreBody.extend({

  applicationLinks: computed  ('router.currentRouteName', function() {
    return emberA ([
      {linkTo: 'people', name: 'People'},
      {linkTo: 'jobs', name: 'Jobs'},
      {linkTo: 'recruiters', name: 'Recruiters'},
    ]);
  })
});

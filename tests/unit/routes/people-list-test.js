import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | peopleList', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:people-list');
    assert.ok(route);
  });
});

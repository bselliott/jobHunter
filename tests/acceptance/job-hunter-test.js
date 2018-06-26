import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | job hunter', function(hooks) {
  setupApplicationTest(hooks);

  test('should show list of people as main page', async function (assert) {
    await visit('/people-list');
    assert.equal(currentURL());
  });
});

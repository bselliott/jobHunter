import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | create person test', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /create-person-test', async function(assert) {
    await visit('/create-person-test');

    assert.equal(currentURL(), '/create-person-test');
  });
});

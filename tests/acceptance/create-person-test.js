import { module, test } from 'qunit';
import { visit, fillIn, currentURL, pauseTest, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { faker } from 'ember-cli-mirage';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | create person', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('create a person with all fields filled in', async function(assert) {
    await visit('/people-list/create');
    await fillIn('#firstName', 'Brian');
    await fillIn('#lastName', 'Elliott');
    await fillIn('#address', 'no one knows' );
    await click('#submit');
    assert.equal(currentURL(), '/people-list');
  });
});

import { module, test } from 'qunit';
import { visit, fillIn, currentURL, click, pauseTest } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | create person', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('create a person with all fields filled in', async function(assert) {
    await visit('/jobs/create');
    await fillIn('#job-type', 'Full-time');
    await fillIn('#job-title', 'Janitor');
    await fillIn('#company-name', 'IMT');
    await fillIn('#company-address', 'doent matter');
    await click('#submit');

    await visit('/people-list/create');
    await fillIn('#first-name', 'Brian');
    await fillIn('#last-name', 'Elliott');
    await fillIn('#address', 'no one knows' );
    await $('#select').dropdown('set selected', 'Janitor, IMT');
    await click('#submit');
    assert.equal(currentURL(), '/people-list');
  });
});

module ('Acceptance | create job', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  test('Create a job with all fields filled in', async function(assert) {

    await visit('/jobs/create');
    await fillIn('#job-type', 'Full-time');
    await fillIn('#job-title', 'Mystery');
    await fillIn('#company-name','Mysterious co.');
    await fillIn('#company-address', 'West Des Moines, IA');
    await click('#submit');
    assert.equal(currentURL(), '/jobs');
  });
});

module('Acceptance | create recruiter', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  test('Create recruiter with all fields filled out.', async function(assert) {
    await visit('/jobs/create');
    await fillIn('#job-type', 'Full-time');
    await fillIn('#job-title', 'Mystery');
    await fillIn('#company-name', 'Mysterious co.');
    await fillIn('#company-address', 'West Des Moines, IA');
    await click('#submit');


    await visit ('/people-list/create');
    await fillIn('#first-name', 'Brain');
    await fillIn('#last-name', 'Elliott');
    await fillIn('#address', 'no one knows');
    await $('#select').dropdown('set selected', 'mystery, Mystery co.');
    await click('#submit');

    await visit('/recruiters/create');
    await fillIn('#first-name', 'Mark');
    await fillIn('#last-name', 'Poor');
    await fillIn('#address', 'Newton, IA');
    await click('#submit');
    assert.equal(currentURL(), '/recruiters');
  });
});

import { module, test } from 'qunit';
import { visit, click, currentURL, pauseTest } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | delete', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    this.server.create('person', {
    firstName: 'Brian',
    lastName: 'Elliott',
    address: 'doesnt matter',
  });

  this.server.create('job', {
    jobType: 'Full-time',
    jobTitle: 'Mystery',
    companyName: 'Mystery co.',
    companyAddress: 'Newton, IA'
  });

  this.server.create('recruiter', {
    firstName: 'Hanson',
    lastName: 'Brood',
    address: 'who knows, IA'
  });
});

  test('deleting a person', async function(assert) {
    await visit('/people-list/1');
    await click('#delete');
    assert.equal(currentURL(), '/people-list');
  });

test('deleting a job', async function(assert) {
  await visit('/jobs/edit/1');
  await click('#delete');
  assert.equal(currentURL(), '/jobs');
});

test('deleting a recruiter', async function(assert) {
  await visit('/recruiters/edit/1');
  await click('#delete');
  assert.equal(currentURL(), '/recruiters');
});
});

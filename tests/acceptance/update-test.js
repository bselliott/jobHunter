import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn, pauseTest } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | update', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    this.server.create('candidate', {
      firstName: 'Brian',
      lastName: 'Elliott',
      address: 'no one knows'
    });

    this.server.create('job', {
      jobType: 'full-time',
      jobTitle: 'Mop',
      comapnyName: 'Mop co.',
      companyAddress: 'Mop Dr.'
    });

    this.server.create('recruiter', {
      firstName: 'Recruit',
      lastName: 'Joe',
      address: 'nowhere'
    });
  });

  test('Updating a person', async function(assert) {
    await visit('/people-list/1/');
    await fillIn('#lastName', 'nope');
    await click('#submit');
    assert.equal(currentURL(), '/people-list');
  });

  test('Update a job', async function(assert) {
    await visit('jobs/1/edit');
    await fillIn('#job-title', 'programming intern');
    await click('#submit');
    assert.equal(currentURL(), '/jobs');
  });

  test('Updating a recruiter', async function(assert) {
    await visit('/recruiters/1/edit');
    await fillIn('#last-name', 'ricky');
    await click('#submit');
    assert.equal(currentURL(), '/recruiters');
  });
});

import { module, test } from 'qunit';
import { visit, fillIn, currentURL, click, pauseTest, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | reports', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    let testJob = this.server.create('job', {
      job_type: 'full-time',
      job_title: 'mop person',
      company_name: 'mop co.',
      company_address: 'mop rd.',
      job_description: 'you mop stuff',
    });
    this.server.create('person');
    this.server.create('recruiter');
  });

  test('visiting /reports', async function(assert) {
    await visit('/reports');
    assert.equal(currentURL(), '/reports');
  });

  test('should show an available job', async function(assert) {
    await visit('/reports');
    assert.ok(this.element.querySelector('#job-tab').textContent);
  });

  test('should show an available person', async function(assert) {
    await visit ('/reports');
    assert.ok(this.element.querySelector('#person-tab').textContent);
  });

  test('should show an available recruiter', async function(assert) {
    await visit ('/reports');
    assert.ok(this.element.querySelector('#recruiter-tab').textContent);
  });

  test('should be able to view jobs as default page', async function(assert) {
    await visit('reports');
    assert.equal(this.element.querySelector('h2.job').textContent, 'Available Jobs');
  });

  test('when click on recruiter tab, one is there', async function(assert) {
    await visit('/reports');
    await click ('#recruiter-tab');
    assert.ok(this.element.querySelector('a').textContent);
  });

  test('when click on job tab, one is there', async function(assert) {
    await visit('/reports');
    await click ('#job-tab');
    assert.ok(this.element.querySelector('a').textContent);
  });

 test('when click on person tab, one is there', async function(assert) {
    await visit('/reports');
    await click ('#person-tab');
    assert.ok(this.element.querySelector('a').textContent);
  });


});

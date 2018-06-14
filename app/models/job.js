import DS from 'ember-data';

export default DS.Model.extend({
  job_type: DS.attr(),
  job_title:DS.attr(),
  company_name:DS.attr(),
  company_address:DS.attr(),
  job_description:DS.sttr(),
  person:DS.hasMany('person')
});

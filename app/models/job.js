import DS from 'ember-data';

export default DS.Model.extend({
  jobType: DS.attr(),
  jobTitle:DS.attr(),
  companyName:DS.attr(),
  companyAddress:DS.attr(),
  jobDescription:DS.attr(),
  person:DS.hasMany('person')
});

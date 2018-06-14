import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  address: DS.attr(),
  job: DS.belongsTo(),
  recruiter: DS.hasMany()
});

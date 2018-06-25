import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  jobType: faker.name.jobType,
  jobTitle: faker.name.jobTitle,
  companyName: faker.internet.domainName,
  companyAddress: faker.address.state,
  jobDescription: faker.lorem.paragraph
});

import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  jobTitle: faker.name.jobTitle,
  jobType: faker.name.jobType,
  companyName: faker.internet.domainName,
  companyAddress: faker.address.state,
  jobDescription: faker.lorem.paragraph
});

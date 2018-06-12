import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  firstName(i) {
    return `person ${i}`;
  },

  lastName(i) {
    return `person ${i}`;
  },

  address(i) {
    return `person ${i}`;
  }

});

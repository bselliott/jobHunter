import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByfirst_name(param) {
      if (param !== '') {
        return this.get('store').query('person', {first_name: param}).then((results) => {
          return {query: param, results: results};
        });
      } else {
        return this.get('store').findAll ('person').then((results) => {
          return {query: param, results: results};
        });
      }
    }
    }
  });

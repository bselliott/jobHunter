import Component from '@ember/component';
export default Component.extend({

  actions: {
    makeSelection(selected) {
      this.sendAction('action1', selected);
    },
  }
});

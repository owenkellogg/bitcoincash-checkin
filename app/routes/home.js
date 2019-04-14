import Ember from 'ember';

export default Ember.Route.extend({
  actions: {

    didTransition() {
      Ember.run.scheduleOnce('afterRender', this, () => {
        console.log('did transition');
        document.getElementById("scaninput").focus();
        // ...
      });
    }
  }
});

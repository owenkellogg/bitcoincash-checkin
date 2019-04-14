import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return params;
  },

  setupController(controller, model) {

    var audio = new Audio('/legend-of-zelda-orarina-of-time-opening-a-large-treasure-chest-short.mp3');
    audio.play();


    controller.set('address', model.address);

    setTimeout(function() {

      controller.transitionToRoute("home");

    }, 5000);

  }
});

import Ember from 'ember';

export default Ember.Controller.extend({

  scannedAddress: null, 

  actions: {
    keyup: function(){ 
      console.log("keyup"); 
    },

    checkin: function() {

      if (this.scannedAddress && this.scannedAddress !== '') {
        console.log('address scanned', this.scannedAddress);

        if (this.scannedAddress.match(/^bitcoincash:/)) {

          this.transitionToRoute("successful-checkin", this.scannedAddress);

        } else {

          this.scannedAddress = null;

        }

        this.scannedAddress = null;


      } else {
        console.log('submitted, not scanned');
      }

    }
  }
});

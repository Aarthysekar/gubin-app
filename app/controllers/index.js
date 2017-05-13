import Ember from 'ember';

export default Ember.Controller.extend({	

	emailAddress: '',

	isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

	isDisabled: Ember.computed.not('isValid'),

	actions: {
		saveInvitation: function(){
			const email = this.get('emailAddress');

			const newInvitation = this.store.createRecord('invitation',{
				email: email
			});

			newInvitation.save().then((response) => {
				this.set('responseText', 'Thank you! We have just saved your email address "' + response.get('email') + '"');
				this.set('emailAddress','');
			});
			
		}
	}

	/*actualEmailAddress: Ember.computed('emailAddress',function(){
		console.log('actualEmailAddress called: '+ this.get('emailAddress'));
	}),

	emailAddressChanged: Ember.observer('emailAddress',function(){
		console.log('emailAddressChanged called: '+ this.get('emailAddress'));
	})*/
});

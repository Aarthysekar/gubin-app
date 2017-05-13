import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		 return this.store.createRecord('contact');
		//return this.store.findAll('contact');
	},

	actions:{
		sendMessage: function(newContactMessage){

				

				// const newCreatedMessage = this.store.createRecord('contact',{
				// 	email: newMessage.email,
				// 	message: newMessage.message
				// });
				newContactMessage.save().then(() => this.controller.set('responseMessage',true));
		},

		willTransition(){
			let model = this.controller.get('model');

			if(model.get('isNew')){
				model.destroyRecord();
			}

			this.controller.set('responseMessage',false);
		}
		
		}
	
});

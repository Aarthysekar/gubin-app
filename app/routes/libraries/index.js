import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.findAll('library');
	},

	actions:{
		deleteLibrary: function(library){
			let confirmation = confirm("Are you sure you want to delete the Record?");

			if(confirmation){
				library.destroyRecord();
			}
		}
	}
});

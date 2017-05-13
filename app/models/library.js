import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';

export default Model.extend({
  city: attr('string'),
  address: attr('string'),
  phone: attr('string'),

  isValid: Ember.computed.notEmpty('city'),
  isNotValid: Ember.computed.not('isValid')
});

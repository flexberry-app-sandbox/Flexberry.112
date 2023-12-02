import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  спрСотр: DS.belongsTo('i-i-s-11-спр-сотр', { inverse: null, async: false })
});

export let ValidationRules = {
  спрСотр: {
    descriptionKey: 'models.i-i-s-11-админ.validations.спрСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АдминE', 'i-i-s-11-админ', {
    
  });

  modelClass.defineProjection('АдминL', 'i-i-s-11-админ', {
    
  });
};

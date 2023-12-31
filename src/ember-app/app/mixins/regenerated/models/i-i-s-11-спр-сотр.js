import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string')
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-11-спр-сотр.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпрСотрE', 'i-i-s-11-спр-сотр', {
    фИО: attr('ФИО', { index: 0 })
  });

  modelClass.defineProjection('СпрСотрL', 'i-i-s-11-спр-сотр', {
    фИО: attr('ФИО', { index: 0 })
  });
};

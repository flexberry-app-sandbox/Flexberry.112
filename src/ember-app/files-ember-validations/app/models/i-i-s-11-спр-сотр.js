import {
  defineNamespace,
  defineProjections,
  Model as СпрСотрMixin
} from '../mixins/regenerated/models/i-i-s-11-спр-сотр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СпрСотрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

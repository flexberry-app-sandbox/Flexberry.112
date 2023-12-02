import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-11-спр-сотр', 'Unit | Model | i-i-s-11-спр-сотр', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-11-админ',
    'model:i-i-s-11-кар-дос',
    'model:i-i-s-11-спр-сотр',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('line', {
  // Specify the other units that are required for this test.
    needs: ['model:basket', 'model:product',
        'model:stockrecord', 'model:category']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

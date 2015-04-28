import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('basket', {
  // Specify the other units that are required for this test.
    needs: ['model:line', 'model:product', 'model:stockrecord', 'model:category']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

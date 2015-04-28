import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('stockrecord', {
  // Specify the other units that are required for this test.
    needs: ['model:product']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('compare_at_price', function(assert){
    var record = this.subject({
        price_retail: 2,
        price_excl_tax: 1.5
    });

    assert.equal(record.get('compare_at_price'), 2);

});

test('discount', function(assert){
    var record = this.subject({
        price_retail: 2,
        price_excl_tax: 1.5
    });

    assert.equal(record.get('discount'), 1.5);

});

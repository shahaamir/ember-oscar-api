import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('useraddress', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('full_name', function(assert){
    var model = this.subject({
        title: 'Mr.',
        first_name: 'Aamir',
        last_name: 'Khan'
    });
    assert.equal(model.get('full_name'), 'Mr. Aamir Khan');
});

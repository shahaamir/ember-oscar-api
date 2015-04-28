import DS from 'ember-data';

export default DS.Model.extend({
    product: DS.belongsTo('product', {inverse: 'stockrecords'}),
    partner: DS.attr('string'),
    partner_sku: DS.attr('string'),
    price_excl_tax: DS.attr('number'),
    price_retail: DS.attr('number'),

    compare_at_price: function(){
        return this.get('price_retail');
    }.property('price_retail'),

    discount: function(){
        return this.get('price_retail') - this.get('price_excl_tax');
    }.property('price_excl_tax', 'price_retail'),
});

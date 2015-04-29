import DS from 'ember-data';

export default DS.Model.extend({
    product: DS.belongsTo('product', {inverse: 'stockrecords'}),
    partner: DS.belongsTo('partner'),
    partner_sku: DS.attr('string'),
    price_currency: DS.attr('string'),
    price_excl_tax: DS.attr('number'),
    price_retail: DS.attr('number'),
    cost_price: DS.attr('number'),
    num_in_stock: DS.attr('number'),
    num_allocated: DS.attr('number'),
    low_stock_threshold: DS.attr('number'),
    date_created: DS.attr('date'),
    date_upated: DS.attr('date'),
});

import DS from 'ember-data';

export default DS.Model.extend({
    basket: DS.belongsTo('basket', {async:true, inverse: 'lines'}),
    date_created: DS.attr('date'),
    line_reference: DS.attr('string'),
    price_currency: DS.attr('string'),
    price_excl_tax: DS.attr('number'),
    price_incl_tax: DS.attr('number'),
    product: DS.belongsTo('product', {async:true}),
    quantity: DS.attr('number'),
});

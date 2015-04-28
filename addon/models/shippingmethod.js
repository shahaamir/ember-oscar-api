import DS from 'ember-data';

export default DS.Model.extend({
    code: DS.attr('string'),
    countries: DS.hasMany('country'),
    description: DS.attr('string'),
    free_shipping_threshold: DS.attr('number'),
    name: DS.attr('string'),
    price_per_item: DS.attr('number'),
    price_per_order: DS.attr('number'),
});

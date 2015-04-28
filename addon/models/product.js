import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    image_l: DS.attr('string'),
    image_m: DS.attr('string'),
    image_s: DS.attr('string'),
    price: DS.attr('number'),
    compare_at_price: DS.attr('number'),
    available: DS.attr('boolean'),
    categories: DS.hasMany('category', {async: true, inverse: 'products'}),
    on_sale: DS.attr('boolean'),
    product_class: DS.attr('number'),
    size: DS.attr('string'),
    vendor: DS.attr('string'),
    weight_based: DS.attr('boolean'),
    weight_with_unit: DS.attr('string'),
    stockrecords: DS.hasMany('stockrecord', {async:true}),
});

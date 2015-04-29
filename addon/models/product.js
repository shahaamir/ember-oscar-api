import DS from 'ember-data';

export default DS.Model.extend({
    url: DS.attr('string'),
    title: DS.attr('string'),
    description: DS.attr('string'),
    date_created: DS.attr('date'),
    date_updated: DS.attr('date'),
    recommended_products: DS.hasMany('product', {async: true}),
    attributes: DS.hasMany('productattribute'),
    stockrecords: DS.hasMany('stockrecord', {async:true}),
    images: DS.hasMany('productimage', {inverse: 'product'}),
    price: DS.hasMany('productprice', {async: true}),
    availability: DS.hasMany('productavailability', {async: true}),
});

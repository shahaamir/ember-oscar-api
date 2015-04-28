import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    has_children: DS.attr('boolean'),
    depth: DS.attr('number'),
    full_name: DS.attr('string'),
    children: DS.hasMany('category', {async: true, inverse: 'parent'}),
    products: DS.hasMany('product', {async:true, inverse: 'categories'}),
    parent: DS.belongsTo('category', {inverse: 'children'}),
});

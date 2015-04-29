import DS from 'ember-data';

export default DS.Model.extend({
    product: DS.belongsTo('product', {inverse: images});
    original: DS.attr('string'),
    caption: DS.attr('string'),
    display_order: DS.attr('number'),
    date_created: DS.attr('date'),
});

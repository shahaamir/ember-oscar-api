import DS from 'ember-data';

export default DS.Model.extend({
    currency: DS.attr('string'),
    status: DS.attr('string'),
    total_excl_tax: DS.attr('number'),
    total_excl_tax_excl_discounts: DS.attr('number'),
    total_incl_tax: DS.attr('number'),
    total_incl_tax_excl_discounts: DS.attr('number'),
    total_tax: DS.attr('number'),
    lines: DS.hasMany('line', {async:true, inverse: 'basket'}),
});

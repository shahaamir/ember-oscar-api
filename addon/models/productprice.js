import DS from 'ember-data';

export default DS.Model.extend({
    currency: DS.attr('string'),
    excl_tax: DS.attr('number'),
    incl_tax: DS.attr('number'),
    tax: DS.attr('number'),
});

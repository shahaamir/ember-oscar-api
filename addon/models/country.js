import DS from 'ember-data';

export default DS.Model.extend({
    iso_3166_1_a2: DS.attr('string'),
    iso_3166_1_a3: DS.attr('string'),
    iso_3166_1_numeric: DS.attr('string'),
    printable_name: DS.attr('string'),
    name: DS.attr('string'),
    is_shipping_country: DS.attr('boolean'),
});

import DS from 'ember-data';

export default DS.Model.extend({
    is_available_to_buy: DS.attr('boolean'),
    num_available: DS.attr('number'),
    message: DS.attr('string'),
});

import DS from 'ember-data';

export default DS.Model.extend({
    image: DS.attr('string'),
    name: DS.attr('string'),
    link_url: DS.attr('string'),
    date_created: DS.attr('date')
});

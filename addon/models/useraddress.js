import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),  
    first_name: DS.attr('string'),  
    last_name: DS.attr('string'),  
    line1: DS.attr('string'),  
    line2: DS.attr('string'),  
    line3: DS.attr('string'),  
    line4: DS.attr('string'),  
    state: DS.attr('string'),  
    postcode: DS.attr('string'),  
    country: DS.attr('string'),
    phone_number: DS.attr('string'),  
    notes: DS.attr('string'),  
    is_default_for_shipping: DS.attr('boolean'),  
    is_default_for_billing: DS.attr('boolean'),  
    num_orders: DS.attr('number'),  
    date_created: DS.attr('date'),  

    full_name: function(){
        return this.get('title') + ' ' + 
            this.get('first_name') + ' ' + 
            this.get('last_name');
    }.property('title', 'first_name', 'last_name')
});

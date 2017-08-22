const exportObj = require('../tom-morgan-wedding-export.json');

const path = require('path');
const rsvpsObj = exportObj['rsvps'];
let items = [];
for (let code in rsvpsObj) {
    const rsvp = rsvpsObj[code];
    
    const names = rsvp.rsvpGuests.filter(g => {
      return g.name && g.name.toLowerCase().indexOf('guest') === -1;
    }).map(g => g.name).join(', ');

    const note = rsvp.notes;
    if (note && names) {
      items.push(`${names} - ${note}`);
    }
}
items.forEach(i => console.log(i + '\n----------------------------------------------\n'));
const exportObj = require('../tom-morgan-wedding-export.json');
const fs = require('fs');
const path = require('path');
const rsvpsObj = exportObj['rsvps'];
let items = [];
for (let code in rsvpsObj) {
    const rsvp = rsvpsObj[code];
    items.push(rsvp);
}
const peopleNotResponded = items.filter(i => i.numSaves === 0).length;

items = items.filter(i => i.numSaves);
const peopleResponded = items.length;

const peopleGoing = items.map(i => i.rsvpGuests.filter(g => g.isGoing).length).reduce((a, b) => a + b);
const peopleNotGoing = items.map(i => i.rsvpGuests.filter(g => !g.isGoing).length).reduce((a, b) => a + b);
const percent = (peopleGoing / (peopleGoing + peopleNotGoing) * 100).toFixed(2);
const percentResponded = (peopleResponded / (peopleResponded + peopleNotResponded) * 100).toFixed(2);
console.log('Number of People Going: ', peopleGoing);
console.log('Number of People Who Are Not Going: ', peopleNotGoing);
console.log('Percent of People Going: ', percent + '%');

console.log('People who have responded:', peopleResponded);
console.log('People who have not responded:', peopleNotResponded);
console.log('Percent of People Responded: ', percentResponded + '%');


console.log(items.length);
fs.writeFileSync(path.join(__dirname, '../tom-morgan-wedding-filtered.json'), JSON.stringify(items, null, 4));
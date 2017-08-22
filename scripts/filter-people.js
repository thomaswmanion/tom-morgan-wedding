const exportObj = require('../tom-morgan-wedding-export.json');
const fs = require('fs');
const path = require('path');
const rsvpsObj = exportObj['rsvps'];
let items = [];
for (let code in rsvpsObj) {
    const rsvp = rsvpsObj[code];
    items.push(rsvp);
}

const alreadyResponded = [
    'Andrew Gagen',
    'Michael Rauzi',
    'Thomas Coen',
    'Tyler Ames',
    'Elizabeth Ford',
    'Brian Hodny',
    'Kristofer Von Ahnen',
    'James Last',
    'Katie Gundrum',
    'Amanda Hurst',
    'Jessica Starbuck',
    'John Gagen',
    'Leslie Farcy',
    'Susan DePew',
    'Mary Meland',
    'Christine Manion',
    'Kathryn Manion',
    'Karen Tripp',
    'Breanna Wimmler',
    'Theo Gagen',
    'Stefan Platikanov',
    'Sarita Patel',
    'Matt Olberding',
    'Adam Gagen',
    'Thomas Gundrum',
    'David Kratzke',
    'Mark MacDonald',
    'James Gagen',
    'Devon Kipp',
    'Sherry',
    'Michael Kratochvil',
    'Tim Gundrum',
    'Michael Gundrum',
    'Jennifer Lamb',
    'Brian Manion',
    'Lloyd Graser',
    'Danielle Hay',
    'Taylor Goodman',
    'Jamie Harnett',
    'Kitty Culbert',
    'Lee Friedman',
    'Matthew Gundrum',
    'Jean Rennpferd',
    'Sven Loberg',
    'Peter Debreceney',
    'Dylan Kipp',
    'Hector Hector',
    'Killian MacDonald',
    'Diane MacDonald',
    'Marcus Tedesco',
    'Kevin Frame',
    'Derrick',
    'David Gundrum',
    'John Bock',
    'Byron Shafer',
    'Tony Slusser',
    'Max Gagen',
    'Kyle Ewert',
    'Edward Manion',
    'Meg Wheaton',
    'Dr. Felissa Kreindler'
];


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



items = items.filter(item => {
    return item.rsvpGuests.filter(g => {
        const isAlreadyResponded = alreadyResponded.indexOf(g.name) === -1;
        return isAlreadyResponded;
    }).length === item.rsvpGuests.length;
});
console.log(items.length);

fs.writeFileSync(path.join(__dirname, '../tom-morgan-wedding-filtered.json'), JSON.stringify(items, null, 4));
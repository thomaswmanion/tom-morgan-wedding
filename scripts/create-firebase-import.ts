import { RSVPGuest } from './../src/app/routes/rsvp/rsvp.model';
import { RSVP } from '../src/app/routes/rsvp/rsvp.model';
import * as fs from 'fs-extra';
import * as csvjson from 'csvjson';


class RSVPCode {
    constructor(
        public code: string,
        public rsvp: RSVP
    ) { }
}


async function create() {
    const guests = require('./guests.json');
    const rsvpCodes: RSVPCode[] = guests.map(g => {
        const rsvp = new RSVP();
        rsvp.rsvpGuests = g.names.map(ga => new RSVPGuest(ga));
        return new RSVPCode(g.code, rsvp);
    });
    console.log(rsvpCodes);

    let rsvps: any = {};
    rsvpCodes.forEach(rsvpCode => {
        rsvps[rsvpCode.code] = rsvpCode.rsvp;
    });
    fs.writeFile(__dirname + '/codes.json', JSON.stringify({ rsvps }, undefined, 4), 'utf-8');
}
create();

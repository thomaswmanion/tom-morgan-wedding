export class RSVP {
    notes: string = '';
    numSaves: number = 0;
    rsvpGuests: RSVPGuest[] = [];
    isAtHotel: boolean = undefined;
    isParking: boolean = undefined;
    numberOfCarsParking: number = 0;

    static parse(r: RSVP): RSVP {
        const rsvp = new RSVP();
        if (r.rsvpGuests) {
            rsvp.rsvpGuests = r.rsvpGuests.map(g => RSVPGuest.parse(g));
        }
        if (r.notes) {
            rsvp.notes = r.notes;
        }
        rsvp.isAtHotel = r.isAtHotel;
        rsvp.isParking = r.isParking;
        rsvp.numSaves = r.numSaves || 0;
        rsvp.numberOfCarsParking = r.numberOfCarsParking;
        return rsvp;
    }

    cleanse(): any {
        return JSON.parse(JSON.stringify(this));
    }
}

export class RSVPGuest {
    public isGoing: boolean
    constructor(
        public name: string
    ) {

    }

    static parse(r: RSVPGuest): RSVPGuest {
        const rg = new RSVPGuest(r.name);
        if (r.isGoing) {
            rg.isGoing = r.isGoing;
        }
        return rg;
    }
}
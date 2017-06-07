export class RSVP {
    numSaves: number = 0;
    rsvpGuests: RSVPGuest[] = [];
    isAtHotel: boolean = false;
    isParking: boolean = false;
    numberOfCarsParking: number = 0;

    static parse(r: RSVP): RSVP {
        const rsvp = new RSVP();
        if (rsvp.rsvpGuests) {
            rsvp.rsvpGuests = r.rsvpGuests.map(g => RSVPGuest.parse(g));
        }
        rsvp.isAtHotel = r.isAtHotel;
        rsvp.isParking = r.isParking;
        rsvp.numSaves = r.numSaves || 0;
        rsvp.numberOfCarsParking = r.numberOfCarsParking;
        return rsvp;
    }
}

export class RSVPGuest {
    constructor(
        public name: string,
        public isGoing: boolean
    ) {

    }

    static parse(r: RSVPGuest): RSVPGuest {
        return new RSVPGuest(r.name, r.isGoing);
    }
}
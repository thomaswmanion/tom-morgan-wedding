export abstract class PagePiece {
    public isFlip: boolean = false;
    constructor(
        public date: Date
    ) {}
    flip(): PagePiece {
        this.isFlip = !this.isFlip;
        return this;
    }
}

export class DatePagePiece extends PagePiece {
    isDatePagePiece: boolean = true;
}

export class TextPagePiece extends PagePiece {
    constructor( 
        public date: Date,
        public title: string,
        public html: string
    ) {
        super(date);
    }
}
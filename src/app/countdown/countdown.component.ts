import { Subscription } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'tam-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  @Input('endDate') endDate: string;

  private future: Date;
  private diff: number;
  private $counter: Observable<number>;
  private subscription: Subscription;
  message: string;

  constructor() {

  }

  dhms(t) {
    var days, hours, minutes, seconds;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    seconds = t % 60;

    return [
      days + 'd',
      hours + 'h',
      minutes + 'm',
      seconds + 's'
    ].join(' ');
  }


  ngOnInit() {
    this.future = new Date(this.endDate);
    this.$counter = Observable.interval(1000).map((x) => {
      this.diff = this.getDiff();
      return x;
    });

    this.diff = this.getDiff();
    this.message = this.dhms(this.diff)

    this.subscription = this.$counter.subscribe((x) => this.message = this.dhms(this.diff));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getDiff(): number {
    return Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
  }
}
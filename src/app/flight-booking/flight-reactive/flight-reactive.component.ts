import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, Subscription, timer} from 'rxjs';
import {share, switchMap, takeUntil, tap} from 'rxjs/operators';
import {FlightService} from '../services/flight.service';

@Component({
  selector: 'app-flight-reactive',
  templateUrl: './flight-reactive.component.html',
  styleUrls: ['./flight-reactive.component.css']
})
export class FlightReactiveComponent implements OnInit, OnDestroy {
  timer$: Observable<number>;
  timerSubscription: Subscription;
  destroySubject = new Subject<boolean>();

  constructor(private flightservice: FlightService) {
  }

  ngOnInit() {
    this.timer$ = timer(0, 3000)
      .pipe(
        tap(num => console.log('Observable implementation', num)),
        share()
      );

    this.timerSubscription =
      this.timer$
        .pipe(
          takeUntil(this.destroySubject)
          // take(5)
        )
        .subscribe(num => console.log('TS Subscription', num));

    const outerStreamTimeTimer = this.timer$;
    const innerStreamHttpCall = this.flightservice.find('Hamburg', 'Graz');

    outerStreamTimeTimer
      .pipe(
        takeUntil(this.destroySubject),
        switchMap(timer1 => innerStreamHttpCall)
      ).subscribe(
      flights => console.log(flights)
    );
  }

  ngOnDestroy(): void {
    // this.timerSubscription.unsubscribe();
    this.destroySubject.next(true);
  }
}

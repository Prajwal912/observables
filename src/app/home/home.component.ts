import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  private firstObsSubs:Subscription

  constructor() { }

  ngOnInit() {
    // this.firstObsSubs = interval(1000).subscribe((count) => console.log(count))

    const customObs = Observable.create(observer => {
        let count = 0
        setInterval(() => {
          observer.next(count);
          count++
        },1000)
    })

    this.firstObsSubs = customObs.subscribe(data => {
      console.log(data)
    })
  }

  ngOnDestroy(): void {
    this.firstObsSubs.unsubscribe()
  }
}





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
        let count = 1
        setInterval(() => {
          observer.next(count);
          if(count> 4){
            observer.error(new Error ('count is exceeds to 5'))
          }
          count++
        },1000)
    })

    this.firstObsSubs = customObs.subscribe(data => {
      console.log(data)
    }, error => {
      console.log(error)
    }
    )
  }

  ngOnDestroy(): void {
    this.firstObsSubs.unsubscribe()
  }
}





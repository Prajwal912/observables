import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { map, filter } from 'rxjs/operators';

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
          observer.next(count);//next is used for handling the emmiting data
          if(count==3){
            observer.complete();
          }

          if(count> 4){
            observer.error(new Error ('count is exceeds to 5'))
          }
          count++
        },1000)
    })



    this.firstObsSubs =  customObs.pipe(filter((data:number) => {
       return data > 0;
    }) ,map((data:number) => {
      return  'Round' + (data + 1)
    })).subscribe(data => {
      console.log (data)
    }, error => {
      console.log(error)
    }, () => {
      console.log("misson accomplished")

    }
    )
  }

  ngOnDestroy(): void {
    this.firstObsSubs.unsubscribe()
  }
}





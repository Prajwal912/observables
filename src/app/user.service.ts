import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

userEmit = new EventEmitter<boolean>()

  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  signedIn = false;
  toDestroy!: Subscription;

  constructor(private account: AccountService) {} 

  ngOnInit() {
    this.toDestroy = this.account.subject.subscribe(b => {
      this.signedIn = b;
    })
  }

  ngOnDestroy() {
    this.toDestroy.unsubscribe();
  }
}

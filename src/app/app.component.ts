import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public constructor(private _router: Router) {
  }

  ngOnInit(): void {

  }

  public showTabs(): boolean {
    let result = false;

    switch(this._router.url) {
      case '/home':
      case '/home/warehouses':
      case '/home/reports':
      case '/home/settings':
                result = true;
                break;
      default:
                result = false;
                break;
    }
    // console.log(this._router.url);
    
    return result;
  }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public constructor(private _router: Router) {}

  ngOnInit(): void {
      setTimeout(() => this._router.navigate(["/warehouses"]));
  }
}
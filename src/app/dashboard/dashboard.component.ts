import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'app';
  constructor(
    private _routes: Router,
    private _route: ActivatedRoute,
  ) { }


  ngOnInit() { }

  change_path(value) {
    if (value == 'image_upload')
      this._routes.navigate(["/image_upload"]);
  }

  image(value) {
    if (value == 'image_upload')
      this._routes.navigate(["/image_upload"]);
    else if (value == 'google')
      this._routes.navigate(["/google"]);
  }
}

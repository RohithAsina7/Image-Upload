import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image-upload/image.service';
import { Appsetting } from '../app.settings';
declare var $;

@Component({
  selector: 'app-womensday',
  templateUrl: './womensday.component.html',
  styleUrls: ['./womensday.component.css']
})
export class WomensdayComponent implements OnInit {

  image_det: any = [];
  image_path = Appsetting.image_path;
  constructor(
    private image_service: ImageService) {

  }

  ngOnInit() {
    this.get_image_det();
  }

  get_image_det() {
    this.image_service.getImagedetails().subscribe(data => {
      console.log(data);
      this.image_det = data;
    })
  }

  visited() {
    console.log('function called');
    var getIPAddress = function () {
      $.getJSON("https://jsonip.com?callback=?", function (data) {
        alert("Your IP address is :- " + data.ip);
        console.log(data, '1234');
      });
    };
    console.log(getIPAddress);
    
    var browser = window.navigator.userAgent;
    console.log(browser);

    $(document).ready(function () {
 
      $.getJSON("//jsonip.com/?callback=?", function (data) {
       
       var ipAddress = data.ip;
       
       console.log(ipAddress);
      });
     
     });

  }

}

import { Component, OnInit, EventEmitter } from '@angular/core';

import { UploadOutput, UploadInput, UploadFile, humanizeBytes } from "ngx-uploader";
import { Observable, Subscription } from "rxjs/";
import { Appsetting } from '../app.settings';
import { ImageService } from "./image.service";
import { Router } from '@angular/router'
import { FormBuilder, Validators, FormGroup } from "@angular/forms";


import { log } from "util";


@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  image_det: any = [];
  imagePreview: {};
  files: UploadFile[];
  imageUpload: any;
  image: any;
  extension: string;
  errorMessage;
  imagedone = false;
  uploadInput: EventEmitter<UploadInput>;
  searchableList: string[];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _fb: FormBuilder,
    private image_service: ImageService
  ) {
    this.searchableList = ["name", "created_at"];
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
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

  image_path = Appsetting.image_path;
  onUploadOutput(output: UploadOutput): void {
    console.log(output, 'image det');

    if (output.type === "allAddedToQueue") {
      this.startUpload();
    }
    if (output.type === "addedToQueue" && typeof output.file !== "undefined") {
      this.previewImagem(output.file.nativeFile).then(response => {
        this.imagePreview = response; // The image preview
      });
      this.files.push(output.file);
      this.imageUpload = this.files[0].name;
      this.extension = this.files[0].type.slice(6);
      this.image =
        Math.random()
          .toString(36)
          .slice(-5) +
        `.` +
        this.extension;
    }
    if (output.type != `done`) {
      this.errorMessage = {
        success: false,
        error: "Please wait till the Image is uploaded"
      };
      return;
    }
    if (output.type === `done`) {
      this.imagedone = true;
      this.errorMessage = {
        success: true,
        error: "Image uploaded succefully"
      };
      this.startUpload();
      this.get_image_det();
      return;
    }
  }

  startUpload(): void {
    const event: UploadInput = {
      type: "uploadAll",
      url: Appsetting.API.savecodes,
      method: "POST",
      data: {
        image: this.image
      }
    };
    this.uploadInput.emit(event);
    this.files = [];
  }

  previewImagem(files: any) {
    const fileReader = new FileReader();
    return new Promise(resolve => {
      fileReader.readAsDataURL(files);
      fileReader.onload = function (e: any) {
        resolve(e.target.result);
      };
    });
  }

}

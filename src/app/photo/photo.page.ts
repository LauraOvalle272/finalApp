import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit {

  imageSource: any;
  photosSource: any;

  photoData: {
     imageSource: any, title: string, captureDate: string
  } [] = []

  constructor(
    public route: Router,
  ) { }

  ngOnInit() {

    this.photoData = JSON.parse(localStorage.getItem('photoData') || '[]');
   
  }

  gotoTakePicture(){
    this.route.navigate(['/takephoto'])
  }

  deletePhoto(data: any) {
    const index = this.photoData.indexOf(data);
    if (index !== -1) {
      this.photoData.splice(index, 1);
      localStorage.setItem('photoData', JSON.stringify(this.photoData));
    }
  }

}

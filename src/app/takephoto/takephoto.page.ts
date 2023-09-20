import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Router } from '@angular/router';

@Component({
  selector: 'app-takephoto',
  templateUrl: './takephoto.page.html',
  styleUrls: ['./takephoto.page.scss'],
})
export class TakephotoPage implements OnInit {

  imageSource: any;
  photosSource: any;
  title: string = ''


  constructor(private router: Router) { }

  ngOnInit() {
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Camera 
    });

    this.imageSource=image.dataUrl;
  }

  choosePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Photos
    });

    this.imageSource=image.dataUrl;

  }

  saveData() {
    const photoData = JSON.parse(localStorage.getItem('photoData') || '[]');
    const newPhoto = {
      imageSource: this.imageSource,
      title: this.title,
      captureDate: new Date().toLocaleDateString(), 
  
    };
    photoData.push(newPhoto);
    localStorage.setItem('photoData', JSON.stringify(photoData));
  
    // Redirecciona a la página "photo"
    this.router.navigate(['/photo']);
  }
  
  discardPhoto() {
    this.imageSource = ''; // Restablece la URL de la foto
  }


}

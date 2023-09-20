import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    public route: Router,
  ) { }

  ngOnInit() {
    
  }


  goToregistrar(){
    this.route.navigate(['/registrar'])
  }

  goToAlbums(){
    this.route.navigate(['/pokelist'])
  }

  goToCamera(){
    this.route.navigate(['/photo'])
  }

  goToMusic(){
    this.route.navigate(['/musica'])
  }

}

import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  password: string = '';
  userName: string = '';

  token= false;

  errormessage: string = ''; // contraseñas no coinciden 
  usermessage: string = ''; // usuario no encontrado




  constructor(
    public route: Router,
  ) { }

  ngOnInit() {

    localStorage.setItem('token', JSON.stringify(this.token));

  }

  Ingresar(){
    const StoredUserData = localStorage.getItem(this.userName);

    if(StoredUserData){
      const UserData = JSON.parse(StoredUserData);
      const storeduserName = UserData[0];
      const storedPassword = UserData[1];
    

    if(this.userName === storeduserName && this.password == storedPassword){
      this.route.navigate(['menu']);

      this.token = true;
      localStorage.setItem('token',JSON.stringify(this.token));
    } else{
      this.errormessage = 'Usuario y contraseña incorrectos'
    }
  } else {
    this.usermessage = ' El Usuario no  se encuentra registrado'

  }
}


  goToRegister(){
    this.route.navigate(['/registrar'])
  }

}

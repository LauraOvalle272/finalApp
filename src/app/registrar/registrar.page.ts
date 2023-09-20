import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  userName: string = '';
  password: string = '';
  repeatPassword: string = '';

  data: any = []
  user: any = []

  errormessage: string = ''; // Void, unidefiend, null
  passwordmessage: string = ''; // contraseñas no coinciden 


  constructor(private router: Router) { }

  ngOnInit() {
  }


  validacion(){
    this.user = localStorage.getItem(this.userName)

        if(this.user == null){
          if(
            this.userName == '' || this.userName == null || this.userName == undefined ||
            this.password == '' || this.password == null || this.password == undefined ||
            this.password == '' || this.repeatPassword == null || this.repeatPassword == undefined 
          ) {
            this.errormessage = 'Campos vacios'
          } else {
            if(this.password == this.repeatPassword){
              this.data[0] = this.userName;
              this.data[1] = this.password;
              localStorage.setItem(this.userName, JSON.stringify(this.data));

              this.router.navigate(['/login']);
            } else {
              this.passwordmessage = 'Las contraseñas no coinciden'
            }
          }
        }
      }
    }
    

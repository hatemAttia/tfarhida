import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title ="form_login";
  loginForm :FormGroup;
  
  constructor(private fb: FormBuilder) { 
      this.loginForm =this.fb.group({
        adress: ['', Validators.compose([
          Validators.pattern('^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]{0,10})*@[A-Za-z0-9]+(\\.[A-Za-z0-9]{0,10})*(\\.[A-Za-z]{0,5})$'),
          Validators.required])],
          password: ['', Validators.required],
      });
  }

  ngOnInit() {
  }


  onClick(){
    console.log(this.loginForm.value);
    
  }
}

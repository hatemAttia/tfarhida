import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title ="form_login";
  signupForm :FormGroup;
  
  constructor(private fb: FormBuilder) { 
      this.signupForm =this.fb.group({
        adress: ['', Validators.compose([
          Validators.pattern('^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]{0,10})*@[A-Za-z0-9]+(\\.[A-Za-z0-9]{0,10})*(\\.[A-Za-z]{0,5})$'),
          Validators.required])],
          password: ['', Validators.required],
          Confirm_password: ['', Validators.required],
        username: ['', Validators.required],
        phoneNumber: ['', [Validators.required,Validators.min(10000000),Validators.maxLength(99999999)]],
      }, { validator: this.checkPasswords });
  }

  ngOnInit() {
  }

  /**
   * Validation for password and confirm password
   * @param group: FormGroup
   */
   checkPasswords(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.Confirm_password.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  onClick(){
    console.log(this.signupForm.valid);

    console.log(this.signupForm.value);
    
  }
}

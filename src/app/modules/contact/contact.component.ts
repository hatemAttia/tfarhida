import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title ="form_login";
  contactForm :FormGroup;
  
  constructor(private fb: FormBuilder
    ,private contacServ:ContactService) { 
      this.contactForm =this.fb.group({
        adress: ['', Validators.compose([
          Validators.pattern('^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]{0,10})*@[A-Za-z0-9]+(\\.[A-Za-z0-9]{0,10})*(\\.[A-Za-z]{0,5})$'),
          Validators.required])],
        name: ['', Validators.required],
        subject: ['', Validators.required],
        message: ['', Validators.required],
      });
  }

  ngOnInit() {
  }

  onClick(){
    this.contacServ.sendMail(this.contactForm.value)
  }
}
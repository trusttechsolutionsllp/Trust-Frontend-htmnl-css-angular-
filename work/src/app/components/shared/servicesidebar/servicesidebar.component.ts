
import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import emailjs, { EmailJSResponseStatus } from 'emailjs-com'; 

import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ContactService } from '../../../service/contact.service';

import service from '../../../data/service.json';

@Component({
  selector: 'app-servicesidebar',
  templateUrl: './servicesidebar.component.html',
  styleUrls: ['./servicesidebar.component.css']
})
export class ServicesidebarComponent { 
  public service = service;

  PHP_API_SERVER = environment.apiUrl;

  submitted: boolean = false;
  showMsg: boolean = false;
  successMsg: string = '';

  constructor(private http: HttpClient, private contact: ContactService) { }

  public fcontactForm = new FormGroup({ 
    to_email: new FormControl('', [Validators.required, Validators.email]),
    message_html: new FormControl(''),
  });

  get from_name(): any {
    return this.fcontactForm.get('from_name');
  }

  //only digits,+,- will be allowed
  keyPressNumbers(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onSubmit(fcontactForm) {
    console.log(fcontactForm);  // {first: 'Nancy', last: 'Drew'}
    this.submitted = true;
    console.log('from contact on footer'); 

    if (!this.fcontactForm.valid) {
      console.log('form not status =' + this.fcontactForm.valid);
      return;
    } else {
      return this.http.post(`${this.PHP_API_SERVER}contactdb.php`
      , {
        'contactname': 'Guest',
        'contactphone': 0,
        'contactemail': this.fcontactForm.value.to_email,
        'contactsubject': 'Service detail',
        'contactmessage': this.fcontactForm.value.message_html
      }).subscribe(res => {
        // console.log(res);
        this.showMsg = true;
        this.successMsg = 'Thank you for contacting us. We will contact you very soon!';
        this.fcontactForm.reset();
        (this as { submitted: boolean }).submitted = false;
      },
        err => {
          console.log('Error occured');
          // this.showMsg = false;
          this.successMsg = 'Please check the above details';
        });

    }

  }

}

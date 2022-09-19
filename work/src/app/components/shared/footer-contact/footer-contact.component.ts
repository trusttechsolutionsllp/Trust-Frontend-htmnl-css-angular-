import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import emailjs, { EmailJSResponseStatus } from 'emailjs-com'; 

import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ContactService } from '../../../service/contact.service';

 
@Component({
  selector: 'app-footer-contact',
  templateUrl: './footer-contact.component.html',
  styleUrls: ['./footer-contact.component.css']
})
export class FooterContactComponent {

  PHP_API_SERVER = environment.apiUrl;

  submitted: boolean = false;
  showMsg: boolean = false;
  successMsg: string = '';

  constructor(private http: HttpClient, private contact: ContactService) { }

  public fcontactForm = new FormGroup({
    from_name: new FormControl('', [Validators.required, Validators.minLength(4),]),
    to_phone: new FormControl('', [Validators.required ]),
    to_email: new FormControl('', [Validators.required, Validators.email]),
    to_subject: new FormControl('', [Validators.required ]),
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
        'contactname': this.fcontactForm.value.from_name,
        'contactphone': this.fcontactForm.value.to_phone,
        'contactemail': this.fcontactForm.value.to_email,
        'contactsubject': this.fcontactForm.value.to_subject,
        'contactmessage': this.fcontactForm.value.message_html
      }).subscribe(res => {
        console.log(res);
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

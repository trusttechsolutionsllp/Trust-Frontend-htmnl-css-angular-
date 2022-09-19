import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ContactService } from '../../../../service/contact.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  // template: `<form [formGroup]="form" (ngSubmit)="onSubmit()">
  //       <div *ngIf="first.invalid"> Name is too short. </div>
  //       <input formControlName="first" placeholder="First name">
  //       <input formControlName="last" placeholder="Last name">
  //       <button type="submit">Submit</button>
  //   </form>
  //   <button (click)="setValue()">Set preset value</button>`,
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  PHP_API_SERVER = environment.apiUrl;

  submitted: boolean = false;
  showMsg: boolean = false;
  successMsg: string = '';

  constructor(private http: HttpClient, private contact: ContactService) { }

  contactForm = new FormGroup({
    from_name: new FormControl('', [Validators.required, Validators.minLength(4),]),
    to_phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9+-]*$")]),
    to_email: new FormControl('', [Validators.required, Validators.email]),
    message_html: new FormControl(''),
  });

  get from_name(): any {
    return this.contactForm.get('from_name');
  }

  //only digits,+,- will be allowed
  keyPressNumbers(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onSubmit(contactForm) {
    console.log(contactForm);  // {first: 'Nancy', last: 'Drew'}
    this.submitted = true;

    if (!this.contactForm.valid) {
      console.log('form not status =' + this.contactForm.valid);
      return;
    } else {

      return this.http.post(`${this.PHP_API_SERVER}contactdb.php`
        , {
          'contactname': this.contactForm.value.from_name,
          'contactphone': this.contactForm.value.to_phone,
          'contactemail': this.contactForm.value.to_email,
          'contactsubject': 'Contact form general enquiry',
          'contactmessage': this.contactForm.value.message_html
        }).subscribe(res => {
          console.log(res);
          this.showMsg = true;
          this.successMsg = 'Thank you for contacting us. We will contact you very soon!';
          this.contactForm.reset();
          (this as { submitted: boolean }).submitted = false;
        },
          err => {
            console.log('Error occured');
            // this.showMsg = false;
            this.successMsg = 'Please check the above details';
          });

    }
  }

  setValue() {
    // this.contactForm.setValue({from_name: 'Carson', to_email: 'Drew', to_phone: 'Drew', message_html: 'Drew'});
  }

}

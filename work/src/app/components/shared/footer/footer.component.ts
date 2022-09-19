import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  PHP_API_SERVER = environment.apiUrl;

  submitted = false;
  showMsg: boolean = false;
  successMsg: string = '';

  constructor(private http: HttpClient) { }

  @Input() layout: number | string;
  @Input() logo: number | string;
  @Input() shape: number | string;
  @Input() shape2: number | string;
  @Input() shapeclass: number | string;
  @Input() shape2class: number | string;

  public newsletterForm = new FormGroup({
    newsletteremail: new FormControl('', [Validators.required, Validators.email])
  });

  onSubmit(newsletterForm) {
    console.log(newsletterForm);  // {first: 'Nancy', last: 'Drew'}
    this.submitted = true;
    console.log('newsletter on footer'); 

    if (!this.newsletterForm.valid) {
      console.log('form not status =' + this.newsletterForm.valid);
      return;
    } else {
      return this.http.post(`${this.PHP_API_SERVER}newsletter.php`
      , {
        'newsletteremail': this.newsletterForm.value.newsletteremail
      }).subscribe(res => {
        // console.log(res);
        this.showMsg = true;
        this.successMsg = 'Thank you for subscribing our newsletter!';
        this.newsletterForm.reset();
        // this.submitted = false;
      },
        err => {
          console.log('Error occured');
          // this.showMsg = false;
          this.successMsg = 'Please check the above details';
        });

    }

  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}

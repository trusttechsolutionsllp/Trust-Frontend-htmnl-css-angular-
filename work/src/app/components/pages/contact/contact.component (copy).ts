import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // Footer style
  classname = "grey-bg-footer";
  ftlogo = "assets/img/logo-3.png";
  ftshape = "assets/img/lines/09.png";
  ftshape2 = "assets/img/lines/10.png";
  ftshapeclass = "line-three";
  ftshape2class = "line-four";

  PHP_API_SERVER = environment.apiUrl;

  contactForm: FormGroup;
  submitted = false;
  showMsg: boolean = false;
  successMsg: string = '';

  control: FormControl;

  constructor(  private formBuilder: FormBuilder, private http: HttpClient ) {
    this.control = formBuilder.control({value: 'my val', disabled: true});
  }

  // constructor(
  //   private formBuilder: FormBuilder, private http: HttpClient
  //   ) { }

  //only number will be add
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      contactname: ['', Validators.required],
      contactphone: ['', [Validators.required, Validators.pattern("^[0-9+-]*$")]],
      contactemail: ['', [Validators.required, Validators.email]],
      contactsubject: ['', Validators.required],
      contactmessage: ['', Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }
  posts: any;

  submit(form) {
    //console.log(this.contactForm.value);
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    // Initialize Params Object
    let Params = new HttpParams();

    // Begin assigning parameters
    Params = Params.append('contactname', this.contactForm.value.contactname);
    Params = Params.append('contactphone', this.contactForm.value.contactphone);
    Params = Params.append('contactemail', this.contactForm.value.contactemail);
    Params = Params.append('contactsubject', this.contactForm.value.contactsubject);
    Params = Params.append('contactmessage', this.contactForm.value.contactmessage);

    // return this.httpClient.get<Post[]>(`${this.PHP_API_SERVER}blog.php`);
    //return this.http.post('http://icmbangular.local/api/db.php'
    // return this.http.post(`${this.PHP_API_SERVER}db.php`
    return this.http.post(`${this.PHP_API_SERVER}contactdb.php`
      , {
        'contactname': this.contactForm.value.contactname,
        'contactphone': this.contactForm.value.contactphone,
        'contactemail': this.contactForm.value.contactemail,
        'contactsubject': this.contactForm.value.contactsubject,
        'contactmessage': this.contactForm.value.contactmessage

      }).subscribe(res => {
        console.log(res);
        this.showMsg = true;
        this.successMsg = 'Thank you for contact us. We will contact you very soon!';
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

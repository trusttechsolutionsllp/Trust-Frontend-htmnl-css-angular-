import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { FormBuilder } from '@angular/forms';
// import { Component, OnInit } from '@angular/core';
// import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  /* contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.contactForm = formBuilder.group({
      from_name: ['', [Validators.required, Validators.minLength(10)]],
      // lastname: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
      to_email: ['', [Validators.required, Validators.email]],
      to_phone: ['', [Validators.required]],
      message_html: ['', [Validators.required]],
    });
  } */
  constructor(private formBuilder: FormBuilder) { }

  public contactForm = new FormGroup({
    from_name: new FormControl(''),
    to_email: new FormControl(''),
    to_phone: new FormControl(''),
    message_html: new FormControl(''),
  });

  public updateUserProfile(): void {
    // Logic to update the user will go here, but for now, we'll just log the values
    console.log(
      this.contactForm.controls.from_name.value,
      this.contactForm.controls.to_email.value,
    );
  }

  ngOnInit(): void {
  }

  get from_name() {
    return this.contactForm.get('from_name');
  }

  get to_email() {
    return this.contactForm.get('to_email');
  }

  get to_phone() {
    return this.contactForm.get('to_phone');
  }

  get message_html() {
    return this.contactForm.get('message_html');
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

}

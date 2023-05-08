import { Component } from '@angular/core';
import { IContactForm } from './i-contact';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  titleText: string = 'Contact';
  imageSource: string = 'assets/images/contact-head.jpg';

  // formModel: IContactForm = {
  //   name: '',
  //   subject: '',
  //   messageBody: '',
  // };

  onSubmit(content: NgForm) {
    // console.log(content.controls['contactEmail'].markAllAsTouched())
    Object.keys(content.controls).forEach((value: string) => {
      content.controls[value].markAsTouched();
      // content.controls[value].setValue(content.controls[value].value)
    });
    if (!content.valid) return;

    // content.controls.markAllAsTouched();
    // console.log(content.controls[0].markAsTouched())
    console.log(content.value);
  }
}

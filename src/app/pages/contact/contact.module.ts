import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { PageTitleModule } from 'src/app/components/page-title/page-title.module';
import { FormsModule } from '@angular/forms';
import { ValidationFeedbackModule } from 'src/app/components/validation-feedback/validation-feedback.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ContactRoutingModule, PageTitleModule, FormsModule, ValidationFeedbackModule],
})
export class ContactModule {}

import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { IValidationMessage } from './i-validation-message';

@Component({
  selector: 'app-validation-feedback',
  templateUrl: './validation-feedback.component.html',
  styleUrls: ['./validation-feedback.component.scss'],
})
export class ValidationFeedbackComponent implements OnInit {
  @Input({ required: true }) model!: NgModel;
  @Input({ required: true }) validationMessages!: IValidationMessage[];

  displayMessage: IValidationMessage | undefined = undefined;

  ngOnInit(): void {
    this.model.update.subscribe({
      next: () => {
        this.displayMessage = this.identifyValidationMessage();
      },
    });
    setTimeout(() => {
      this.displayMessage = this.identifyValidationMessage();
    });
  }

  private identifyValidationMessage(): IValidationMessage | undefined {
    return this.validationMessages.find((value: IValidationMessage) =>
      this.model.hasError(value.error)
    );
  }
}

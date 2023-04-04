import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
// import { BehaviorSubject, Observable } from 'rxjs';
// type Step = 'personalInfo' | 'loginInfo';

@Component({
  selector: 'form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent implements OnInit {
  formConfig: any = {
    currentStep: 1,
    finalStep: 3,
    steps: {
      1: 'userDetails',
      2: 'contactDetails',
      3: 'personalDetails',
    },
  };

  steps: number = 1;

  multiStep = new FormGroup({
    userDetails: new FormGroup({
      fname: new FormControl('', [Validators.required]),
      uname: new FormControl('', [Validators.required]),
    }),
    contactDetails: new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(
          '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'
        ),
      ]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9+-]*$'),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      address: new FormControl('', [Validators.required]),
    }),
    personalDetails: new FormGroup({
      gender: new FormControl('', [Validators.required]),
      education: new FormControl('', [Validators.required]),
    }),
  });

  constructor() {}

  ngOnInit(): void {}

  get fname() {
    return this.multiStep.get('userDetails.fname');
  }

  get uname() {
    return this.multiStep.get('userDetails.uname');
  }

  get email() {
    return this.multiStep.get('contactDetails.email');
  }

  get mobile() {
    return this.multiStep.get('contactDetails.mobile');
  }

  get address() {
    return this.multiStep.get('contactDetails.address');
  }

  get gender() {
    return this.multiStep.get('personalDetails.gender');
  }

  get education() {
    return this.multiStep.get('personalDetails.education');
  }

  previous() {
    // this.steps = this.steps - 1;
    this.formConfig.currentStep = this.formConfig.currentStep - 1;
  }

  next() {
    // TO Find the current step in form
    const currentFormStep = this.multiStep.get(
      `${this.formConfig.steps[this.formConfig.currentStep]}`
    ) as unknown as FormGroup;

    if (currentFormStep.valid) {
      if (this.formConfig.currentStep == this.formConfig.finalStep) {
        console.log('Form Filled Completely!!!!');
      } else {
        this.formConfig.currentStep = this.formConfig.currentStep + 1;
      }
    } else {
      Object.values(currentFormStep.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
  }

  OnSubmit() {
    console.log(this.multiStep.get('userDetails')?.valid);

    if (this.multiStep.get('userDetails')?.valid) {
      this.steps = this.steps + 1;
    }

    if (this.multiStep.get('contactDetails')?.valid) {
      this.steps = this.steps + 1;
    }

    if (this.multiStep.get('personalDetails')?.valid) {
      this.steps = this.steps + 1;
    }
  }
}

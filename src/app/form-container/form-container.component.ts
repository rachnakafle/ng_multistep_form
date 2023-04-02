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
  steps: number = 1;

  multiStep = new FormGroup({
    userDetails: new FormGroup({
      fname: new FormControl('', [Validators.required]),
      uname: new FormControl('', [Validators.required]),
    }),
    contactDetails: new FormGroup({
      email: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
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

  previous() {
    this.steps = this.steps - 1;
  }

  OnSubmit() {
    // console.log(this.steps);
    // if (this.steps == 4) {
    // this._router.navigate(['thank-you']);
    console.log(this.multiStep.valid);

    if (this.multiStep.valid) {
      
      this.steps = this.steps + 1;
    }
  }
  // }
}
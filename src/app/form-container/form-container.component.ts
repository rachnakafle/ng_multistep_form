import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
type Step = 'personalInfo' | 'loginInfo';

@Component({
  selector: 'form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent implements OnInit {
  steps: number = 1;

  multiStep = new FormGroup({
    userDetails: new FormGroup({
      fname: new FormControl(''),
      uname: new FormControl(''),
    }),
    contactDetails: new FormGroup({
      email: new FormControl(''),
      mobile: new FormControl(''),
      address: new FormControl(''),
    }),
    personalDetails: new FormGroup({
      gender: new FormControl(''),
      education: new FormControl(''),
    }),
  });

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    // this.userForm = this._fb.group({
    //   personalInfo: null,
    //   loginInfo: null,
    // });
  }

  previous() {
    this.steps = this.steps - 1;
  }

  OnSubmit() {
    this.steps = this.steps + 1;
    console.log(this.steps);
    if (this.steps == 4) {
      // this._router.navigate(['thank-you']);
    }
  }
}

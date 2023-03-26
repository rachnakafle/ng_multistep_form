import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'multistep_form';
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

  constructor(private _router: Router) {}

  ngOnInit(): void {
    console.log(this.steps);
  }

  previous() {
    this.steps = this.steps - 1;
  }

  OnSubmit() {
    this.steps = this.steps + 1;
    console.log(this.steps);
    if (this.steps == 4) {
      this._router.navigate(['thank-you']);
    }
  }
}

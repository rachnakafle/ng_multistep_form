import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'multistep_form';
  steps: number = 1;
  constructor() {}

  ngOnInit(): void {
    console.log(this.steps);
  }

  previous(){
    this.steps = this.steps-1;
  }

  OnSubmit() {
    this.steps = this.steps + 1;
    console.log(this.steps);
    
  }
}

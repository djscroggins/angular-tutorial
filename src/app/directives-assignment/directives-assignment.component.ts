import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-assignment',
  templateUrl: './directives-assignment.component.html',
  styleUrls: ['./directives-assignment.component.css']
})
export class DirectivesAssignmentComponent implements OnInit {
  secret = 'hello world!';
  secretHidden = false;
  togglesArray = [];
  toggleCount = 1;

  constructor() { }

  ngOnInit() {
  }

  toggleSecret(event) {
    this.secretHidden = !this.secretHidden;
    console.log(event);
    this.togglesArray.push('timeStamp: ' + event.timeStamp);
    this.toggleCount += 1;
  }

  getColor() {
    return this.toggleCount >= 5 ? 'green' : null;
  }

}

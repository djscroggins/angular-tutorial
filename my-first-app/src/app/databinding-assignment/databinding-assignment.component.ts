import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-databinding-assignment',
  templateUrl: './databinding-assignment.component.html',
  styleUrls: ['./databinding-assignment.component.css']
})
export class DatabindingAssignmentComponent implements OnInit {
  userName = '';
  allowUserNameClear = false;

  constructor() {
  }

  ngOnInit() {
  }

  onUsernameEntry() {
    this.allowUserNameClear = this.userName !== '';
  }

  onAddUserName() {
    this.userName = '';
    this.onUsernameEntry();
  }

}

import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-avatar-dialog',
  templateUrl: './avatar-dialog.component.html',
  styleUrls: ['./avatar-dialog.component.scss']
})
export class AvatarDialogComponent implements OnInit {

  avatars: Array<any> = new Array<any>();
  coffees = ['https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg', 'Flat White', 'Cappuccino', 'Latte', 'Espresso', 'Machiato', 'Mocha', 'Hot Chocolate', 'Tea'];

  constructor(
    public dialogRef: MatDialogRef<AvatarDialogComponent>,
    public firebaseService: FirebaseService
  ) {
    console.log('avatar dialog con');
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    console.log('avatar dialog');
    /* this.firebaseService.getAvatars()
       .subscribe(data => {
         this.avatars = data;
         console.log(data);
       });*/
  }

  close(avatar) {
    this.dialogRef.close(avatar);
  }

}

import { Component, OnInit } from '@angular/core';
import { Merchant } from '../merchant';
import { EnrollmentService } from '../enrollment.service';


@Component({
  selector: 'app-addid',
  templateUrl: './addid.component.html',
  styleUrls: ['./addid.component.css']
})
export class AddidComponent implements OnInit {


  constructor(private _enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
  }

  merchantModel = new Merchant('', 'Walmart Store 64', '111 Overland Boise ID 83706', 'Yes');

  onSubmit(){
    this._enrollmentService.enroll(this.merchantModel)
    .subscribe(
      data => console.log('Success!', data),
      error => console.error('Error!', error)
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userphone',
  templateUrl: './userphone.component.html',
  styleUrls: ['./userphone.component.css']
})
export class UserphoneComponent implements OnInit {

  constructor(private router: Router) { }

  submit() {
    this.router.navigate(['/app/actions/accountlist']);
  }

  ngOnInit() {
  }

}

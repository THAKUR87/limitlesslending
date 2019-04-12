import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showbanklist',
  templateUrl: './showbanklist.component.html',
  styleUrls: ['./showbanklist.component.css']
})
export class ShowbanklistComponent implements OnInit {

  constructor(private router: Router) {

   }

   makePayment() {
    this.router.navigate(['/app/actions/userphone']);
   }

  ngOnInit() {
  }

}

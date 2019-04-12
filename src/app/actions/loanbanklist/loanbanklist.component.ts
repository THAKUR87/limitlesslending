import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loanbanklist',
  templateUrl: './loanbanklist.component.html',
  styleUrls: ['./loanbanklist.component.css']
})
export class LoanbanklistComponent implements OnInit {

  constructor(private router: Router) { }

  submit() {
    this.router.navigate(['/app/actions/thankspage']);
  }

  ngOnInit() {
  }

}

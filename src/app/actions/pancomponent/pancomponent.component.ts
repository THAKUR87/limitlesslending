import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pancomponent',
  templateUrl: './pancomponent.component.html',
  styleUrls: ['./pancomponent.component.css']
})
export class PancomponentComponent implements OnInit {

  constructor(private router: Router) { }

  public panNumber : string;

  submitPan() {
    if (this.panNumber ==='QWERTYUIO7'){
      alert("Sorry, you are not eligible for loan due to your previous credit history");
      return;
    }
    this.router.navigate(['/app/actions/loanbanklist']);
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userinputmodal',
  templateUrl: './userinputmodal.component.html',
  styleUrls: ['./userinputmodal.component.css']
})
export class UserinputmodalComponent implements OnInit {

  constructor(private router: Router) { }
  public radioButtonValue : string;
  submit() {
    console.log(this.radioButtonValue);
    if (this.radioButtonValue == 'YES') {
    this.router.navigate(['/app/actions/pancomponent']);
    } else {
      this.router.navigate(['app/actions/showbanklist']);
    }
  }

  onItemChange(event) {
    console.log(event.target.value);
    this.radioButtonValue = event.target.value;
  }

  ngOnInit() {
    this.radioButtonValue = 'YES';
  }

}

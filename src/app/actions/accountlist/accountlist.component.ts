import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent implements OnInit {

  constructor(private router: Router) { }
  getuserinput(){
    this.router.navigate(['/app/modal/userinputmodal']);
  }
  ngOnInit() {
  }

}

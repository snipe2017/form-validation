import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataa: any;
  constructor(private user_service: UserService) { }

  ngOnInit() {
    this.user_service.Getrecent().subscribe(daya => {this.dataa = daya; 
  }
    );
}
}
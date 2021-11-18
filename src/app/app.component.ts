import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wmy-app';
  data:any =[];
  constructor(private user:UserServiceService){
    this.user.getData().subscribe((data: any)=>{
      console.warn(data)
      this.data=data
    })
   
  }
}

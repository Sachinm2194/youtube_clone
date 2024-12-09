import { Component } from '@angular/core';
import { HomeServiceService } from './Services/home-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Youtube';
  constructor(private homeService:HomeServiceService){
  }
 
}

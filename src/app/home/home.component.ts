import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeServiceService } from '../Services/home-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  colorTheme: string = '';
  fullSidebar: boolean = false;
  private sidebarSubscription: Subscription = new Subscription();
  private themeSubscription: Subscription = new Subscription();

  constructor(private homeService: HomeServiceService) {
    this.fullSidebar=this.homeService.fullSidebar
  }

  ngOnInit() {
    this.themeSubscription = this.homeService.colorTheme$.subscribe(theme => {
      this.colorTheme = theme;
    });
    this.sidebarSubscription = this.homeService.fullSidebar$.subscribe(sidebarState => {
      this.fullSidebar = sidebarState;
      console.log('Sidebar State:', this.fullSidebar);
    });
  }
  toggleSound(event: MouseEvent) {
    
  }
  
  

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
    this.sidebarSubscription.unsubscribe();

  }
}

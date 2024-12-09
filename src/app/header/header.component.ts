import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeServiceService } from '../Services/home-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  colorTheme: string = '';
  brandLogo: string = '';
  menuIcon: string = '';
  searchIcon: string = '';
  bellIcon:string='';
  createVideo:string=''; 
  fullSidebar:boolean=false;
  private themeSubscription: Subscription = new Subscription();
  private logoSubscription: Subscription = new Subscription();
  private menuSubscription: Subscription = new Subscription();
  private searchSubscription: Subscription = new Subscription();
  private bellIconSubcription:Subscription=new Subscription();
  private createVideoSubscription : Subscription=new Subscription();

  constructor(private homeService: HomeServiceService) {}

  ngOnInit() {
    this.themeSubscription = this.homeService.colorTheme$.subscribe(theme => {
      this.colorTheme = theme;
    });

    this.logoSubscription = this.homeService.brandLogo$.subscribe(logo => {
      this.brandLogo = logo;
    });

    this.menuSubscription = this.homeService.menuIcon$.subscribe(icon => {
      this.menuIcon = icon;
    });

    this.searchSubscription = this.homeService.searchIcon$.subscribe(icon => {
      this.searchIcon = icon;
    });
    
    this.bellIconSubcription=this.homeService.bellIcon$.subscribe(icon=>{
      this.bellIcon=icon;
    })

    this.createVideoSubscription=this.homeService.createVideoIcon$.subscribe(icon=>{
      this.createVideo=icon;
    })
    this.homeService.fullSidebar$.subscribe(sidebarState => {
      this.fullSidebar = sidebarState;
    })
  }

  themeToggle() {
    this.homeService.colorMode();
  }
  menu(){

    this.homeService.toggleSidebar();

  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
    this.logoSubscription.unsubscribe();
    this.menuSubscription.unsubscribe();
    this.searchSubscription.unsubscribe();
    this.bellIconSubcription.unsubscribe();
  }
}

import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeServiceService } from '../Services/home-service.service';

@Component({
  selector: 'app-footer-sidebar',
  templateUrl: './footer-sidebar.component.html',
  styleUrl: './footer-sidebar.component.css'
})
export class FooterSidebarComponent {
  colorTheme:string='';
  home: string = '';
  shorts: string = '';
  subscription: string = '';
  createPlus:string='';
  private themeSubscription: Subscription = new Subscription();
  private homeSubscription: Subscription = new Subscription();
  private shortsSubscription: Subscription = new Subscription();
  private subscriptionsSubscription: Subscription = new Subscription();
  private createPlusSubscription: Subscription = new Subscription();


  constructor(private homeService: HomeServiceService) {}

  ngOnInit() {
    this.themeSubscription = this.homeService.colorTheme$.subscribe((theme) => {
      this.colorTheme = theme;
    });

    this.homeSubscription = this.homeService.homeIcon$.subscribe((home) => {
      this.home = home;
    });
    this.shortsSubscription = this.homeService.shortsIcon$.subscribe((shorts) => {
      this.shorts = shorts;
    });
    this.subscriptionsSubscription = this.homeService.subscriptionIcon$.subscribe((subcriptions) => {
      this.subscription = subcriptions;
    });
    this.createPlusSubscription = this.homeService.createplusIcon$.subscribe((createPlus) => {
      this.createPlus = createPlus;
    });
  }
}

import { Component } from '@angular/core';
import { HomeServiceService } from '../Services/home-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-half-sidebar',
  templateUrl: './half-sidebar.component.html',
  styleUrl: './half-sidebar.component.css',
})
export class HalfSidebarComponent {
  colorTheme: string = '';
  home: string = '';
  shorts: string = '';
  subscription: string = '';
  you: string = '';

  private themeSubscription: Subscription = new Subscription();
  private homeSubscription: Subscription = new Subscription();
  private shortsSubscription: Subscription = new Subscription();
  private subscriptionsSubscription: Subscription = new Subscription();
  private youSubscription: Subscription = new Subscription();

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
    this.youSubscription = this.homeService.youIcon$.subscribe((you) => {
      this.you = you;
    });
  }
}

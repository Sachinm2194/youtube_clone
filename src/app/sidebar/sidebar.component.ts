import { Component } from '@angular/core';
import { HomeServiceService } from '../Services/home-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  colorTheme: string = '';
  home: string = '';
  shorts: string = '';
  subscription: string = '';
  yourChannel: string = '';
  history: string = '';
  playlist: string = '';
  yourVideos: string = '';
  watchLater: string = '';
  likedVideos: string = '';

  private themeSubscription: Subscription = new Subscription();
  private homeSubscription: Subscription = new Subscription();
  private shortsSubscription: Subscription = new Subscription();
  private subscriptionsSubscription: Subscription = new Subscription();
  private yourChannelSubscription: Subscription = new Subscription();
  private historySubscription: Subscription = new Subscription();
  private playlistSubscription: Subscription = new Subscription();
  private yourVideosSubscription: Subscription = new Subscription();
  private watchLaterSubscription: Subscription = new Subscription();
  private likedVideosSubscription: Subscription = new Subscription();

  constructor(private homeService: HomeServiceService) {}
  ngOnInit() {
    this.themeSubscription = this.homeService.colorTheme$.subscribe((theme) => {
      this.colorTheme = theme;
    });

    this.homeSubscription = this.homeService.homeIcon$.subscribe((home) => {
      this.home = home;
    });

    this.shortsSubscription = this.homeService.shortsIcon$.subscribe(
      (shorts) => {
        this.shorts = shorts;
      }
    );

    this.subscriptionsSubscription =
      this.homeService.subscriptionIcon$.subscribe((subcriptions) => {
        this.subscription = subcriptions;
      });

    this.yourChannelSubscription = this.homeService.yourChannelIcon$.subscribe(
      (yourChannel) => {
        this.yourChannel = yourChannel;
      }
    );

    this.historySubscription = this.homeService.historyIcon$.subscribe(
      (history) => {
        this.history = history;
      }
    );

    this.playlistSubscription = this.homeService.playlistIcon$.subscribe(
      (playlist) => {
        this.playlist = playlist;
      }
    );

    this.yourVideosSubscription = this.homeService.yourVideos$.subscribe(
      (yourVideos) => {
        this.yourVideos = yourVideos;
      }
    );

    this.watchLaterSubscription = this.homeService.watchLaterIcon$.subscribe(
      (watchLater) => {
        this.watchLater = watchLater;
      }
    );

    this.likedVideosSubscription = this.homeService.likedVideosIcon$.subscribe(
      (like) => {
        this.likedVideos = like;
      }
    );
  }

  a() {}
}

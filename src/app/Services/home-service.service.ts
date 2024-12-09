import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeServiceService {
  
  fullSidebar:any=false; 

  private themeSubject = new BehaviorSubject<string>('lightMode'); 
  colorTheme$ = this.themeSubject.asObservable();

  private fullSidebarSubject = new BehaviorSubject<boolean>(false);
  fullSidebar$ = this.fullSidebarSubject.asObservable();

  private brandLogoSubject = new BehaviorSubject<string>('../../assets/lightModeImages/brandLogo.svg');
  brandLogo$ = this.brandLogoSubject.asObservable();

  private menuIconSubject = new BehaviorSubject<string>('../../assets/lightModeImages/menu.svg');
  menuIcon$ = this.menuIconSubject.asObservable();

  private searchIconSubject = new BehaviorSubject<string>('../../assets/lightModeImages/searchIcon.svg');
  searchIcon$ = this.searchIconSubject.asObservable();

  private bellIconSubject=new BehaviorSubject<string>('../../assets/lightModeImages/bell.svg');
  bellIcon$=this.bellIconSubject.asObservable()

  private createVideoSubject=new BehaviorSubject<string>('../../assets/lightModeImages/createVideo.svg')
  createVideoIcon$= this.createVideoSubject.asObservable();

  private createPlusSubject=new BehaviorSubject<string>('../../assets/lightModeImages/createPlus.svg')
  createplusIcon$= this.createPlusSubject.asObservable();

  private homeIconSubject=new BehaviorSubject<string>('../../assets/lightModeImages/home.svg')
  homeIcon$=this.homeIconSubject.asObservable();

  private shotrsIconSubject=new BehaviorSubject<string>('../../assets/lightModeImages/shorts.svg')
  shortsIcon$=this.shotrsIconSubject.asObservable();

  private subscriptionIconSubject=new BehaviorSubject<string>('../../assets/lightModeImages/subscription.svg')
  subscriptionIcon$=this.subscriptionIconSubject.asObservable();

  private yourVideoIconSubject=new BehaviorSubject<string>('../../assets/lightModeImages/yourVideos.svg')
  yourVideos$=this.yourVideoIconSubject.asObservable();

  private historyIconSubject=new BehaviorSubject<string>('../../assets/lightModeImages/history.svg')
  historyIcon$=this.historyIconSubject.asObservable();

  private playlistIconSubject=new BehaviorSubject<string>('../../assets/lightModeImages/playlist.svg')
  playlistIcon$=this.playlistIconSubject.asObservable();

  private watchLaterIconSubject=new BehaviorSubject<string>('../../assets/lightModeImages/watchLater.svg')
  watchLaterIcon$=this.watchLaterIconSubject.asObservable();

  private yourChannelIconSubject=new BehaviorSubject<string>('../../assets/lightModeImages/yourChannel.svg')
  yourChannelIcon$=this.yourChannelIconSubject.asObservable();

  private likedVideosIconSubject=new BehaviorSubject<string>('../../assets/lightModeImages/like.svg')
  likedVideosIcon$=this.likedVideosIconSubject.asObservable();

  private likedFillVideosIconSubject=new BehaviorSubject<string>('../../assets/lightModeImages/likeFill.svg')
  likedFillVideosIcon$=this.likedFillVideosIconSubject.asObservable();

  private youIconSubject=new BehaviorSubject<string>('../../assets/lightModeImages/you.svg')
  youIcon$=this.youIconSubject.asObservable();
  

  constructor() {
    this.initializeTheme();
    // this.initializeSidebar();
  }

  private initializeTheme() {
    // Check if running in browser
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = localStorage.getItem('localStorageColorTheme') || 'lightMode';
      this.setTheme(storedTheme);
    }
  }

  toggleSidebar() {
    const currentValue = this.fullSidebarSubject.getValue();
    this.fullSidebarSubject.next(!currentValue);
  }

  

  setTheme(theme: string) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('localStorageColorTheme', theme);
      this.themeSubject.next(theme);
      this.updateAssets(theme);
      document.body.className = theme;
    }
  }

 

  colorMode() {
    const newTheme = this.themeSubject.getValue() === 'lightMode' ? 'darkMode' : 'lightMode';
    this.setTheme(newTheme);
  }

  private updateAssets(theme: string) {
    if (theme === 'darkMode') {
      this.brandLogoSubject.next('../../assets/darkModeImages/brandLogo.svg');
      this.menuIconSubject.next('../../assets/darkModeImages/menu.svg');
      this.searchIconSubject.next('../../assets/darkModeImages/searchIcon.svg');
      this.bellIconSubject.next('../../assets/darkModeImages/bell.svg')
      this.createVideoSubject.next('../../assets/darkModeImages/createVideo.svg')
      this.createPlusSubject.next('../../assets/darkModeImages/createPlus.svg')
      this.homeIconSubject.next('../../assets/darkModeImages/home.svg');
      this.shotrsIconSubject.next('../../assets/darkModeImages/shorts.svg')
      this.subscriptionIconSubject.next('../../assets/darkModeImages/subscription.svg')
      this.yourVideoIconSubject.next('../../assets/darkModeImages/yourVideos.svg')
      this.historyIconSubject.next('../../assets/darkModeImages/history.svg')
      this.playlistIconSubject.next('../../assets/darkModeImages/playlist.svg')
      this.watchLaterIconSubject.next('../../assets/darkModeImages/watchLater.svg')
      this.yourChannelIconSubject.next('../../assets/darkModeImages/yourChannel.svg');
      this.likedVideosIconSubject.next('../../assets/darkModeImages/like.svg');
      this.likedFillVideosIconSubject.next('../../assets/darkModeImages/likeFill.svg');
      this.youIconSubject.next('../../assets/darkModeImages/you.svg');
    } else {
      this.brandLogoSubject.next('../../assets/lightModeImages/brandLogo.svg');
      this.menuIconSubject.next('../../assets/lightModeImages/menu.svg');
      this.searchIconSubject.next('../../assets/lightModeImages/searchIcon.svg');
      this.bellIconSubject.next('../../assets/lightModeImages/bell.svg')
      this.createVideoSubject.next('../../assets/lightModeImages/createVideo.svg')
      this.createPlusSubject.next('../../assets/lightModeImages/createPlus.svg')
      this.homeIconSubject.next('../../assets/lightModeImages/home.svg');
      this.shotrsIconSubject.next('../../assets/lightModeImages/shorts.svg')
      this.subscriptionIconSubject.next('../../assets/lightModeImages/subscription.svg')
      this.yourVideoIconSubject.next('../../assets/lightModeImages/yourVideos.svg')
      this.historyIconSubject.next('../../assets/lightModeImages/history.svg')
      this.playlistIconSubject.next('../../assets/lightModeImages/playlist.svg')
      this.watchLaterIconSubject.next('../../assets/lightModeImages/watchLater.svg')
      this.yourChannelIconSubject.next('../../assets/lightModeImages/yourChannel.svg');
      this.likedVideosIconSubject.next('../../assets/lightModeImages/like.svg');
      this.likedFillVideosIconSubject.next('../../assets/lightModeImages/likeFill.svg');
      this.youIconSubject.next('../../assets/lightModeImages/you.svg');

      


    }
  }
}

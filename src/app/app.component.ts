import { Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AlertController } from "@ionic/angular";
import { Router, ActivatedRoute } from "@angular/router";
import { Storage } from "@ionic/storage";
import { Events } from "../app/events";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    private splashScreen: SplashScreen,
    public events: Events,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.styleBlackTranslucent();
      this.statusBar.backgroundColorByHexString("#f05e00");
      this.splashScreen.hide();

      // stop connect watch
      this.checkLogin();
    });
  }

  logout() {
    this.storage.clear();
    this.router.navigate(["signin"]);
  }

  checkLogin() {
    this.storage.get("userObject").then((val) => {
      console.log("login data", val);
      if (val != null) {
        this.router.navigate(["/tabs"]);
      } else {
        this.router.navigate(["/signin"]);
      }
    });
  }

  ngOnInit() {
    console.log("pages");
  }
}

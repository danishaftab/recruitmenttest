import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.page.html",
  styleUrls: ["./tabs.page.scss"],
})
export class TabsPage implements OnInit {
  constructor(public navCtrl: NavController) {}

  logout() {
    this.navCtrl.navigateRoot(["/signin"]);
  }

  ngOnInit() {}
}

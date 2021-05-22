import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../providers/http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-friends",
  templateUrl: "./friends.component.html",
  styleUrls: ["./friends.component.scss"],
})
export class FriendsComponent implements OnInit {
  friends: any;
  constructor(private http: HttpService) {}

  getfeeds() {
    this.http.getApi(this.http.api.friends, true).then((res: any) => {
      console.log(res);
      this.friends = res;
    });
  }

  ngOnInit() {
    console.log("feed component");
    this.getfeeds();
  }
}

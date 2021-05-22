import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../providers/http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.scss"],
})
export class FeedComponent implements OnInit {
  feeds: any;
  constructor(private http: HttpService) {}

  getfeeds() {
    this.http.getApi(this.http.api.feeds, true).then((res: any) => {
      console.log(res);
      this.feeds = res;
    });
  }

  ngOnInit() {
    console.log("feed component");
    this.getfeeds();
  }
}

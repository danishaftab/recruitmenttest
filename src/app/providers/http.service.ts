import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GeneralService } from "./general.service";
import { GlobaldataService } from "./globaldata.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  headers: any;

  globalUrl = "";

  api = {
    feeds: "https://jsonplaceholder.typicode.com/posts",
    friends: "https://jsonplaceholder.typicode.com/users",
  };
  constructor(
    private http: HttpClient,
    public general: GeneralService,
    private router: Router
  ) {}

  postApi(link, data, loader) {
    if (loader == true) {
      this.general.presentLoading();
    }
    this.headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + GlobaldataService.token,
      Accept: "application/json",
    };
    return new Promise((resolve) => {
      this.http
        .post(this.globalUrl + link, JSON.stringify(data), {
          headers: this.headers,
        })
        .subscribe(
          (data) => {
            resolve(data);
            if (loader == true) {
              this.general.stopLoading();
            }
          },
          (error) => {
            console.log("Error" + error);
            this.general.stopLoading();
            if (error.status == 0) {
              this.general.presentToast(error.error.message);
            } else if (error.status == 401) {
              this.general.presentToast(error.error.message);
            } else if (error.status == 500) {
              this.general.presentToast(error.status);
            } else if (error.status == 503) {
              this.general.presentToast("Server Error");
            } else if (error.status == 404) {
              console.log(error);
              this.general.presentToast("Error: " + error.status);
            } else if (error.status == 400) {
              this.general.presentToast(error.status);
            } else if (error.status == 409) {
              this.general.presentToast(error.status);
            } else if (error.status == 406) {
              this.general.presentToast(error.status);
            } else {
              this.general.presentToast(error.status);
            }
          }
        );
    });
  }

  postApi2(link, data, loader) {
    if (loader == true) {
      this.general.presentLoading();
    }
    this.headers = { "Content-Type": "application/json" };
    return new Promise((resolve) => {
      this.http
        .post(this.globalUrl + link, JSON.stringify(data), {
          headers: this.headers,
        })
        .subscribe(
          (data) => {
            resolve(data);
            if (loader == true) {
              this.general.stopLoading();
            }
          },
          (error) => {
            console.log("Error" + error);
            this.general.stopLoading();
            if (error.status == 0) {
              this.general.presentToast(error.error.message);
            } else if (error.status == 500) {
              this.general.presentToast(error.status);
            } else if (error.status == 503) {
              this.general.presentToast("Server Error");
            } else if (error.status == 401) {
              console.log(error);
              this.general.presentToast("Error: " + error.status);
            } else if (error.status == 400) {
              this.general.presentToast(error.status);
            } else if (error.status == 409) {
              this.general.presentToast(error.status);
            } else if (error.status == 406) {
              this.general.presentToast(error.status);
            } else {
              this.general.presentToast(error.status);
            }
          }
        );
    });
  }

  getApi(link, loader) {
    if (loader == true) {
      this.general.presentLoading();
    }
    this.headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + GlobaldataService.token,
      Accept: "application/json",
    };
    return new Promise((resolve) => {
      this.http.get(this.globalUrl + link, { headers: this.headers }).subscribe(
        (data) => {
          resolve(data);
          this.general.stopLoading();
        },
        (error) => {
          console.log("Error" + error);
          this.general.stopLoading();
          if (error.status == 0) {
            this.general.presentToast(error.error.message);
          } else if (error.status == 500) {
            this.general.presentToast(error.status);
          } else if (error.status == 503) {
            this.general.presentToast("Server Error");
          } else if (error.status == 401) {
            console.log(error);

            this.general.presentToast("Error: " + error.status);
          } else if (error.status == 400) {
            this.general.presentToast(error.status);
          } else if (error.status == 409) {
            this.general.presentToast(error.status);
          } else if (error.status == 406) {
            this.general.presentToast(error.status);
          } else {
            this.general.presentToast(error.status);
          }
        }
      );
    });
  }

  getApi2(link) {
    this.headers = { "Content-Type": "application/json" };
    return new Promise((resolve) => {
      this.http.get(this.globalUrl + link, { headers: this.headers }).subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          console.log("Error" + err);
        }
      );
    });
  }
  getFlag(link, loader) {
    if (loader == true) {
      this.general.presentLoading();
    }
    this.headers = {
      "Content-Type": "application/json",
    };
    return new Promise((resolve) => {
      this.http.get(link, { headers: this.headers }).subscribe(
        (data) => {
          resolve(data);
          this.general.stopLoading();
        },
        (error) => {
          this.general.stopLoading();
          console.log("Error" + error);
        }
      );
    });
  }
}

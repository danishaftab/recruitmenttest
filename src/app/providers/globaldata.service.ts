import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GlobaldataService {
  constructor() {}

  public static userObject: any;
  public static token: any;
  public static netcheck: boolean = true;
}

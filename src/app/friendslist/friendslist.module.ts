import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { FriendslistPageRoutingModule } from "./friendslist-routing.module";

import { FriendslistPage } from "./friendslist.page";
import { FriendsComponent } from "../components/friends/friends.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FriendslistPageRoutingModule,
  ],
  declarations: [FriendslistPage, FriendsComponent],
})
export class FriendslistPageModule {}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { CoreRoutingModule } from "./core-routing.module";

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    CoreRoutingModule,
    CommonModule
  ],
  declarations: [
  ],
  providers: [
  ]
})
export class CoreModule {
}

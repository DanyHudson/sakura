import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Navbar } from "./navbar/navbar";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, Navbar],
  template: `
    <section class="">
    <app-navbar></app-navbar>
      <h1 class="font-Raleway">SAKURA RAMEN</h1>
      <h2 class="font-Raleway">BEST RAMEN IN TOWN</h2>
    </section>
    
    `,


  styleUrls: ['./landing-page.scss']
})
export class LandingPage {

}
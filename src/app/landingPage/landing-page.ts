import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="">
      <h1>SAKURA RAMEN</h1>
      <h2>BEST RAMEN IN TOWN</h2>
    </section>
    
    `,


    styleUrls: ['./landing-page.scss']
})
export class LandingPage {

}
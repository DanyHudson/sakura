import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule],
    template: '<h1>Hallo Welt!</h1>',
    styles: ['h1 {color: hotpink; text-align: center;}']
})
export class LandingPage {

}
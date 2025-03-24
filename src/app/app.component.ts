import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContactComponent} from "./component/contact/contact.component";

@Component({
  selector: 'app-root',
    imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kata-phonebook-front';
}

import { Routes } from '@angular/router';
import {ContactComponent} from "./component/contact/contact.component";

export const routes: Routes = [
    // {path: '', component: ContactComponent}
    {
        path: '',
        loadComponent: () => import('./component/contact/contact.component').then(c =>c.ContactComponent)}
];

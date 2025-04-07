import { Routes } from '@angular/router';

export const routes: Routes = [
    // {path: '', component: ContactComponent}
    {
        path: '',
        loadComponent: () => import('./component/contact/contact.component').then(c =>c.ContactComponent)}
];

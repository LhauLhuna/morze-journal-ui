import { Routes } from '@angular/router';

// Components
import { PublicComponent } from './components/pages/modules/public/public.component';
import { LoginComponent } from './components/pages/login/login.component';

export const routes: Routes = [
  {
    path: "",
    component: PublicComponent,
    children: [
      { path: "", component: LoginComponent }
    ]
  },
];

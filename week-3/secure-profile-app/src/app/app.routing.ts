/**
 * Title: app.routing.ts
 * Author: Gunner Bradley
 * Date: January 22 2022
 * Description: Routing file
 */

import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];

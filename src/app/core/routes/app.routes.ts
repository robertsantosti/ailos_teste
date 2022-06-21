import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app' },
  {
    path: 'app',
    loadChildren: () =>
      import('../../pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('../../pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

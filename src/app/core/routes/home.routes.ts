import { HomeComponent } from './../../pages/home/home.component';
import { Routes } from '@angular/router';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'cooperados',
        loadChildren: () =>
          import('../../pages/cooperados/cooperados.module').then(
            (m) => m.CooperadosModule
          ),
      },
    ],
  },
];

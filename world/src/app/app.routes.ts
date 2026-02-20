import { Routes } from '@angular/router';
import { WorldApp } from './world-app/world-app';

export const routes: Routes = [
    { path: '', redirectTo: '/map', pathMatch: 'full' },
    { path: 'map', component: WorldApp, title: 'map' },
    { path: '**', redirectTo: '/map' }
];

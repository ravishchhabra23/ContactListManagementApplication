import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from '../components/main/app.component';
import { HomeComponent } from '../components/home/app.home.component';
import { CommonErrorComponent } from '../components/error/error.component';


const appRoutes: Routes = [
    {path: '', component:HomeComponent},
    {path: '**', redirectTo: 'error'},
    {path: 'error/:code',component:CommonErrorComponent}
];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

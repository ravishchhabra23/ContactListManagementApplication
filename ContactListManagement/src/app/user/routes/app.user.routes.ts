import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
//import components
import{UserLoginComponent} from '../components/login/app.login.component';
import{UserLogoutComponent} from '../components/logout/app.logout.component';
import{UserAppComponent} from '../components/main/app.component';
import{UserContactCreateComponent} from '../components/contacts/user.contact.create.component';
import{UserContactDetailsComponent} from '../components/contacts/user.contact.details.component';
import{UserRegisterComponent} from '../components/register/user.register.component';
import {UserContactMenuComponent} from '../components/menu/contactmenu.component';

const userroutes:Routes =[
    {path: 'user', component: UserAppComponent, children: [
        {path: 'register', component: UserRegisterComponent},
        {path: 'login', component: UserLoginComponent},
        {path: 'logout', component: UserLogoutComponent},
        {path: 'contact', component: UserContactMenuComponent, children: [
            {path: '', redirectTo:'details',pathMatch: 'full'},
            {path: 'create', component: UserContactCreateComponent},
            {path: 'details', component: UserContactDetailsComponent}
            
        ]},
    ] }
];

export const userRoutingProviders: any[] = [];
export const userrouting: ModuleWithProviders = RouterModule.forChild(userroutes);
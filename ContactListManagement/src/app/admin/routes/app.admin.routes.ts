import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
//import components
import{AdminLoginComponent} from '../components/login/app.login.component';
import{AdminLogoutComponent} from '../components/logout/app.logout.component';
import{AdminAppComponent} from '../components/main/app.main.component';
import{AdminUserCreateComponent} from '../components/users/app.user.create.component';
import{AdminHomeComponent} from '../components/home/admin.home.component';
import{AdminUserDetailsComponent} from '../components/userdetails/app.userdetails.component';
import{AdminUserMenuComponent} from '../components/usermenu/usermenu.component';


const adminroutes:Routes =[
    {path: 'admin', component: AdminAppComponent, children: [
        {path: '', component: AdminHomeComponent},
        {path: 'login', component: AdminLoginComponent},
        {path: 'logout', component: AdminLogoutComponent},
         {path: 'user', component: AdminUserMenuComponent, children: [
            {path: '', redirectTo:'details',pathMatch: 'full'},
            {path: 'details', component: AdminUserDetailsComponent},
            {path: 'create', component: AdminUserCreateComponent},
            {path: ':id', component: AdminUserDetailsComponent},
            
        ]},
    ] }
];

export const adminRoutingProviders: any[] = [];
export const adminrouting: ModuleWithProviders = RouterModule.forChild(adminroutes);
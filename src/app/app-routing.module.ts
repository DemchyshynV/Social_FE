import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component';
import {AuthGuard} from './shared/classes/auth.guard';
import {AdminLayoutComponent} from "./shared/layouts/admin-layout/admin-layout.component";
import {OverviewPageComponent} from "./overview-page/overview-page.component";
import {FriendsPageComponent} from "./friends-page/friends-page.component";
import {TopComponent} from "./friends-page/top/top.component";
import {MyFriendsComponent} from "./friends-page/top/my-friends/my-friends.component";
import {FindFriendsComponent} from "./friends-page/top/find-friends/find-friends.component";
import {MyRequestsComponent} from "./friends-page/top/my-requests/my-requests.component";
import {FriendsRequestComponent} from "./friends-page/top/friends-request/friends-request.component";
import {MassagePageComponent} from "./massage-page/massage-page.component";


const routes: Routes = [
    {
      path: '', component: AuthLayoutComponent, children: [
        {path: '', redirectTo: '/login', pathMatch: 'full'},
        {path: 'login', component: LoginPageComponent},
        {path: 'register', component: RegisterPageComponent}
      ]
    },
    {
      path: '', component: SiteLayoutComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard], children: [
        {path: 'overview', component: OverviewPageComponent},
        {path: 'friends', component: FriendsPageComponent,  children:[
            {path:'', component: TopComponent, children:[
                {path:'', redirectTo:'myFriends', pathMatch: 'full'},
                {path: 'myFriends', component: MyFriendsComponent},
                {path: 'findFriends', component: FindFriendsComponent},
                {path: 'myRequests', component: MyRequestsComponent},
                {path: 'friendsRequest', component: FriendsRequestComponent}
              ]}
          ]},
        {path: 'massages', component: MassagePageComponent}
      ]
    },
    {
      path: '', component:
      AdminLayoutComponent, canActivate:
        [AuthGuard], children:
        []
    }

  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './shared/classes/token.interceptor';
import {AdminLayoutComponent} from './shared/layouts/admin-layout/admin-layout.component';
import {OverviewPageComponent} from './overview-page/overview-page.component';
import {FriendsPageComponent} from './friends-page/friends-page.component';
import {TopComponent} from './friends-page/top/top.component';
import {MyFriendsComponent} from './friends-page/top/my-friends/my-friends.component';
import {FindFriendsComponent} from './friends-page/top/find-friends/find-friends.component';
import {LoaderComponent} from './shared/components/loader/loader.component';
import {MyRequestsComponent} from './friends-page/top/my-requests/my-requests.component';
import {FriendsRequestComponent} from './friends-page/top/friends-request/friends-request.component';
import {MassagePageComponent} from './massage-page/massage-page.component';
import {BodyComponent} from './massage-page/body/body.component';
import {PhotosPageComponent} from './photos-page/photos-page.component';
import {CarouselComponent} from './photos-page/carousel/carousel.component';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import { MisicPageComponent } from './misic-page/misic-page.component';

const config: SocketIoConfig = {url: 'http://localhost:3000', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    AdminLayoutComponent,
    OverviewPageComponent,
    FriendsPageComponent,
    TopComponent,
    MyFriendsComponent,
    FindFriendsComponent,
    LoaderComponent,
    MyRequestsComponent,
    FriendsRequestComponent,
    MassagePageComponent,
    BodyComponent,
    PhotosPageComponent,
    CarouselComponent,
    MisicPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config)

  ],
  entryComponents: [CarouselComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './layout/home/home.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ShowbanklistComponent } from './actions/showbanklist/showbanklist.component';
import { UserphoneComponent } from './actions/userphone/userphone.component';
import { AccountlistComponent } from './actions/accountlist/accountlist.component';
import { PancomponentComponent } from './actions/pancomponent/pancomponent.component';
import { UserinputmodalComponent } from './modal/userinputmodal/userinputmodal.component';
import { LoanbanklistComponent } from './actions/loanbanklist/loanbanklist.component';
import { ThankspageComponent } from './actions/thankspage/thankspage.component';

const routes: Routes = [
  {
    path: '',
    children: [
		{ path: '', redirectTo: 'app/home', pathMatch: 'full' },
    { path: 'app/home', loadChildren: './layout/home/home.module#HomeModule'},
    { path: 'app/actions/showbanklist', component: ShowbanklistComponent},
    { path: 'app/actions/userphone', component: UserphoneComponent},
    { path: 'app/actions/accountlist', component: AccountlistComponent},
    { path: 'app/modal/userinputmodal', component: UserinputmodalComponent},
    { path: 'app/actions/pancomponent', component: PancomponentComponent},
    { path: 'app/actions/loanbanklist', component: LoanbanklistComponent},
    { path: 'app/actions/thankspage', component: ThankspageComponent}
    ]
  }
];

const rootRouting: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ShowbanklistComponent,
    UserphoneComponent,
    AccountlistComponent,
    PancomponentComponent,
    UserinputmodalComponent,
    LoanbanklistComponent,
    ThankspageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HomeModule,
    rootRouting,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

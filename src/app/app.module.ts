import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginPanelComponent } from './components/shared/navbar/login-panel/login-panel.component';

import { AdminModule } from './components/admin/admin.module';
import { AuthModule } from './components/auth/auth.module';
import { PublicModule } from './components/public/public.module';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { LayoutComponent } from './components/shared/layout/layout.component';
import { ProfileComponent } from './components/shared/profile/profile.component';
import { InterceptorService } from './_services/interceptor-service.service';
import { FormatDatePipe } from './_pipes/format_date.pipe';

const Material = [
  MatExpansionModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatSelectModule,
  MatInputModule,
  MatButtonToggleModule
]

const myModules = [
  AdminModule, 
  AuthModule, 
  PublicModule
]

const myPipes = {
  FormatDatePipe
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginPanelComponent,
    LayoutComponent,
    ProfileComponent,
  ],
  imports: [
    Material,
    myModules,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

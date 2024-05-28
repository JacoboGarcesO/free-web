import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAuthComponent } from '../../ui/layouts/layout-auth/layout-auth.component';
import { BannerLoginComponent } from '../../ui/components/banner-login/banner-login.component';
import { FooterLoginComponent } from '../../ui/components/footer-login/footer-login.component';
import { LoginFormContainerComponent } from '../../containers/login-form-container/login-form-container.component';

const routes: Routes = [
  {
    path: 'login',
    component: LayoutAuthComponent,
    children: [
      {
        path: '',
        component: LoginFormContainerComponent,
        outlet: 'right'
      },
      {
        path: '',
        component: BannerLoginComponent,
        outlet: 'left'
      },
      {
        path: '',
        component: FooterLoginComponent,
        outlet: 'footer'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }

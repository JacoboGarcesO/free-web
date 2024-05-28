import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutHomeComponent } from '../../ui/layouts/layout-home/layout-home.component';
import { HeaderComponent } from '../../ui/components/header/header.component';
import { FooterComponent } from '../../ui/components/footer/footer.component';
import { BannerComponent } from '../../ui/components/banner/banner.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutHomeComponent,
    children: [
      {
        path: '',
        component: HeaderComponent,
        outlet: 'header'
      },
      {
        path: '',
        component: FooterComponent,
        outlet: 'footer'
      },
      {
        path: '',
        component: BannerComponent,
        outlet: 'banner'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProxyComponent } from './proxy/proxy.component';

const routes: Routes = [
    {
        path: '',
        component: ProxyComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
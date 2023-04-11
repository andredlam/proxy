import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProxyComponent } from './proxy.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MainPipe } from '../core/main-pipe.module';


@NgModule({
    declarations: [
        ProxyComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MainPipe,
    ]
})
export class ProxyModule { }

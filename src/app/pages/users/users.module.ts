import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserNameFilterPipe } from './pipes/user-name-filter.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { OrderModule } from 'ngx-order-pipe';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { MatButtonModule } from '@angular/material/button';
import { AvatarGenerator } from 'random-avatar-generator';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [UsersComponent, UserCardComponent, UserNameFilterPipe, UserOrdersComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule,
    FlexLayoutModule,
    OrderModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    UsersService,
    AvatarGenerator
  ]
})
export class UsersModule { }

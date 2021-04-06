import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { switchMap } from 'rxjs/operators';
import { Order } from '../../models/order.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit {

  orders$: Observable<Order[]>;
  displayedColumns: string[] = ['id', 'product_type', 'product_name', 'price', 'paid'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.orders$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.usersService.getUserOrders(params.get('id')))
    );
  }

  goToUsers(): void {
    this.router.navigate(['/users']);
  }
}

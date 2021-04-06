import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({
  name: 'userNameFilter'
})
export class UserNameFilterPipe implements PipeTransform {

  transform(users: User[], name: string): User[] {
    if (!users) { return []; }
    if (!name) { return users; }
    name = name.toLowerCase();
    return users.filter(user => user.name.toLowerCase().includes(name));
  }
}

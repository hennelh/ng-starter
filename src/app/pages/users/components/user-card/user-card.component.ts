import { Component, Input } from '@angular/core';
import { AvatarGenerator } from 'random-avatar-generator';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user: User;

  avatarUrl: string;

  constructor(private avatarGenerator: AvatarGenerator) {
    // huge content shifts occuring with the random svg when resizing
    // cool generator for random avatar pics though
    this.avatarUrl = `url('${this.avatarGenerator.generateRandomAvatar()}')`;
  }

}

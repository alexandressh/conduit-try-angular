import { Injectable } from '@angular/core';

import { User } from '../../models/user';

@Injectable()
export class AuthService {

  constructor() { }
  
  authenticateUser(user: User) {
      
  }
  
  getUserInfo():User {
    const user: User = {
      username: 'alexandressh',
      email: 'alexandressh@gmail.com',
      bio: 'This is a short bio',
      name: 'Henrique Alexandre',
      password: '123456789'
    }
    return user;
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  faPlus,
  faSearch,
  faEdit,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { User, UserListResponse, UsersService } from './services/users.service';
import { SNR_ROLES } from '../common/enum/snr-enum';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit, OnDestroy {
  faPlus = faPlus;
  faSearch = faSearch;
  faEdit = faEdit;
  faTrash = faTrash;
  public SNR_ROLES = SNR_ROLES;
  public userList: User[] | undefined = [];
  private userSubscription$: Subject<boolean> = new Subject<boolean>();
  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit() {
    this.getAllUsers();
  }

  ngOnDestroy(): void {
    this.userSubscription$.next(true);
    this.userSubscription$.unsubscribe();
  }

  private getAllUsers(): void {
    this.userService
      .getAllUsers()
      .pipe(takeUntil(this.userSubscription$))
      .subscribe({
        next: (response: UserListResponse) => {
          if (response.users && response.users?.length > 0) {
            this.userList = response.users;
          } else {
            this.userList = [];
          }
        },
        error: (e) => console.error(e),
        complete: () => {},
      });
  }

  public onAddUser(): void {
    this.router.navigate(['users/users-details', 0]);
  }

  public onEditUser(user: User): void {
    this.router.navigate(['users/users-details', user.userId]);
  }

  public deleteUserById(user: User): void {
    if (user.userId && user.userId > 0) {
      this.userService
        .deleteUserById(user.userId)
        .pipe(takeUntil(this.userSubscription$))
        .subscribe({
          next: () => {
            this.getAllUsers();
          },
          error: (e) => console.error(e),
          complete: () => {},
        });
    }
  }
}

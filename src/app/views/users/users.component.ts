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
import { ColDef, ValueFormatterParams } from 'ag-grid-community';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit, OnDestroy {
  faPlus = faPlus;
  public ENUM_SNR_ROLES = SNR_ROLES;
  public userList: User[] | undefined = [];

  colDefs: ColDef[] = [
    { field: 'userId', hide: true },
    { field: 'userName', flex: 1, filter: 'agSetColumnFilter' },
    { field: 'password', flex: 1, filter: 'agSetColumnFilter' },
    { field: 'email', flex: 1 },
    { field: 'mobile', flex: 1, filter: 'agSetColumnFilter' },
    {
      field: 'role',
      flex: 1,
      filter: 'agSetColumnFilter',
      valueFormatter: this.roleFormatter,
    },
  ];
  private userSubscription$: Subject<boolean> = new Subject<boolean>();

  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit() {
    this.getAllUsers();
  }

  ngOnDestroy(): void {
    this.userSubscription$.next(true);
    this.userSubscription$.unsubscribe();
  }

  // ag-grid properties
  gridOptions = {
    onRowClicked: this.onRowClicked.bind(this),
    getRowStyle: this.getRowStyle.bind(this),
  };

  getRowStyle(params: any): any {
    return { cursor: 'pointer' };
  }

  onRowClicked(params: any): void {
    this.onEditUser(params.data);
  }

  roleFormatter(params: ValueFormatterParams) {
    if (SNR_ROLES[SNR_ROLES.admin] === params.value) {
      return SNR_ROLES[params.value];
    } else if (SNR_ROLES[SNR_ROLES.fieldUser] === params.value) {
      return SNR_ROLES[params.value];
    } else if (SNR_ROLES[SNR_ROLES.storeManager] === params.value) {
      return SNR_ROLES[params.value];
    }
    return params.value;
  }
  // end
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
}

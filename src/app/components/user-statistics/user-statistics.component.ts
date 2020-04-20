import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {StatisticsService} from "../../shared/services/statistics.service";
import {User} from 'src/app/shared/models/user.model';
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";

interface queryParams {
  page: number,
  range?: number
}

@Component({
  selector: 'app-user-statistics',
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.scss']
})

export class UserStatisticsComponent implements OnInit {
  numberOfLoadedUsers: number = 50;
  page: number = 1;
  users: Array<User>;
  arrayPages: Array<number>;
  isShowPreloader: boolean = true;
  totalPages: number;
  itemsPerSlide = 5;
  selectedPages: Array<number> = [];

  subscription = new Subscription();

  constructor(private statisticsService: StatisticsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.router.navigate([],
      {
        queryParams: {page: this.page, range: this.numberOfLoadedUsers} as queryParams
      });

    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadData(): void {
    this.subscription.add(this.statisticsService.getUsers(this.page - 1, this.numberOfLoadedUsers).subscribe(data => {
      this.users = data.content;
      this.totalPages = data.totalPages;
      this.arrayPages = Array(this.totalPages).fill(0).map((x, i) => i + 1);
      this.isShowPreloader = false;
    }));
  }

  onChangePage(): void {
    this.isShowPreloader = true;
    this.subscription.add(this.route.queryParams.pipe(
      switchMap((queryParams: queryParams) => {
        this.page = queryParams['page'] - 1;
        return this.statisticsService.getUsers(this.page, this.numberOfLoadedUsers)
      })).subscribe(data => {
        this.users = data.content;
        this.isShowPreloader = false;
    }));
  }

  onSlideRangeChange(indexes: number[]): void {
    this.selectedPages = indexes;
  }

  onNavigateForUserPage(user :User): void {
    this.router.navigate([`/user/${user.id}`]);
  }

  getNonActiveArrow(typeArrow: string): boolean {
    return typeArrow === 'prev' && this.selectedPages.length
      ? this.selectedPages[0] === 0
      : this.selectedPages[this.selectedPages.length - 1] === this.totalPages - 1;
  }
}

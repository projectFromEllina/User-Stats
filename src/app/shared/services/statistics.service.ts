import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {StatisticsModel} from "../models/statistics.model";
import {Observable} from "rxjs";
import {ChartDataModel} from "../models/chart-data.model";

@Injectable({providedIn: 'root'})
export class StatisticsService {

  constructor(private http: HttpClient) {
  }

  getUsers(page: number = 0, range: number = 50): Observable<StatisticsModel> {
    return this.http.get<StatisticsModel>(`/api/v1/users?page=${page}&range=${range}`);
  }

  getChartData(id: number, from: string, to: string): Observable<Array<ChartDataModel>> {
    return this.http.get<Array<ChartDataModel>>(`/api/v1/users/statistic?id=${id}&from=${from}&to=${to}`);
  }
}

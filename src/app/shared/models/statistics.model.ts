import {User} from "./user.model";

export interface StatisticsModel {
  content: Array<User>,
  totalPages: number,
  totalElements: number
}

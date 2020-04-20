import {BaseEntity} from "./base-entity";

export interface User extends BaseEntity{
  firstName: string,
  lastName: string,
  email: string,
  gender: string,
  totalClicks: number,
  totalPageViews: number,
  ipAddress: string
}

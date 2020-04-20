import {BaseNamedEntity} from "../../../../../ItCompanies/src/app/shared/models/base-named-entity";

export interface ChartDataModel extends BaseNamedEntity{
  userId: number
  page_views: number,
  clicks: number,
  date: Date,
}

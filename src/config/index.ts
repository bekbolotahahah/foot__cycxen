import {instance} from "./api"
import {IRequestResponse} from "../models/main.page.model"

export const requests = {
  getMission: () => instance.get('/v1_client/mission'),
  getProjects: () => instance.get('/v1_client/projetcs'),
  getReviews: () => instance.get('/v1_client/reviews'),
  getServices: () => instance.get('/v1_client/services'),
  getTeam: () => instance.get('/v1_client/team'),
  getPartners: () => instance.get('/v1_client/partners'),
  postRequest: (data: IRequestResponse) => instance.post('/v1_client/requests/', data)
}
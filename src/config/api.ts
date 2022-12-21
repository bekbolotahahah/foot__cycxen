import axios from "axios";

const baseURL = 'https://cryxxencrm.pythonanywhere.com/api'

export const instance = axios.create({baseURL})
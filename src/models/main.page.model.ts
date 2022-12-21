export interface IProject {
  id: number;
  created_at: Date;
  updated_at: Date;
  image: string;
  title: string;
}

export interface IReview {
  id: number;
  total_stars: number;
  stars: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  message: string;
}

export interface IService {
  id: number;
  created_at: Date;
  updated_at: Date;
  icon: string;
  title: string;
}

export interface ITeam {
  id: number;
  created_at: Date;
  updated_at: Date;
  first_name: string;
  last_name: string;
  age: number;
  image: string;
  position: string;
}

export interface IRequestForm {
  email: string
  firstName: string
  lastName: string
  interest_type: string
  message: string
  phone_number: string
}

export interface IRequestResponse {
  email: string
  first_name: string
  last_name: string
  type: string
  message: string
  phone_number: string
}


export interface IPartners {
  id: number;
  created_at: Date;
  updated_at: Date;
  title: string;
  ordering: number;
  image: string;
}
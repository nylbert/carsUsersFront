import { Car } from "./car.model";

export interface UserDetails {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    birthday?: string;
    login?: string;
    password?: string;
    phone?: string;
    cars: Car[];
    createdAt?: Date;
    lastLogin?: Date;
}
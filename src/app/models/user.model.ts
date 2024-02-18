import { Car } from "./car.model";

export interface User {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    birthday?: string;
    login?: string;
    password?: string;
    phone?: string;
    cars: Car[];
}
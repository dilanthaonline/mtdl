export interface AuthUser {
    id: number,
    firstName: string,
    lastName: string,
    username: string,
}

export interface User {
    id: number,
    firstName: string,
    lastName: string,
    userName: string,
    password: string,
    isActive: boolean,
    roleId: UserRole,
    hospital: string,
    registrationNumber: string,
    address: string,
    address2: string,
    city: string,
    state: string,
    postalCode: number,
    mobileNumber: number,
    landline: number
}

export enum UserRole {
    Admin = 1,
    Consultant = 2,
    Student = 3
}
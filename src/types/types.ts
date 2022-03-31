export enum UserRole {
    ROLE_BASE = 'ROLE_BASE',
    ROLE_GROUP_ADMIN = 'ROLE_ADMIN',
    ROLE_MODERATOR = 'ROLE_MODERATOR'
}

export type Entries<T extends Record<string, unknown>> = [keyof T, T[keyof T]][];

export type ValidatedFormikValues<T> = {
    [K in keyof T]: T[K] extends number ? T[K] | '' : T[K];
};

export type KeysOfValues<T, V> = { [K in keyof T]-?: T[K] extends V ? K : never }[keyof T];

export interface Size {
    height: number;
    width: number;
}

export interface User {
    id: number;
    name: string;
    roles: UserRole[];
}

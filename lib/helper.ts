import { compare, hash } from "bcrypt";

export function hashPassword (password: string) {
    return hash(password, 10)
}

export function verifyPassword(password: string, hashedPassword: string) {
    return compare(password, hashedPassword)
}

type Value = number;

export function currencyUSFormat(value: Value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value);
}
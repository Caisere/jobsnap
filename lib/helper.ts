import { hash } from "bcrypt";

export function hashPassword (password: string) {
    return hash(password, 10)
}

type Value = number;

export function currencyUSFormat(value: Value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value);
}
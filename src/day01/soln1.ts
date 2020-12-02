import { input1 } from './input'

export function main(input: string) {
    const n = input.split('\n').map((el) => parseInt(el, 10))
    for (const a of n) for (const b of n) if (a + b === 2020) return a * b
}

console.log(main(input1))


export function soln2(input: string) {
    const n = input.split('\n').map((el) => parseInt(el, 10))
    for (const a of n) for (const b of n) for (const c of n) if (a + b + c === 2020) return a * b * c
}

console.log(soln2(input1))

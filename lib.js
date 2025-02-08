export function miFactorial(n) {
    if (n < 0) {
        throw new Error("El factorial no está definido para números negativos");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * miFactorial(n - 1);
}


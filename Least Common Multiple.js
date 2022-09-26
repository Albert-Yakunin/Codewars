function evclidAlg(a, b) {
    for (; a !== 0 && b !== 0;) {
        a > b ? a = a % b : b = b % a
    }
    return a + b
}

var lcm = function (...rest) {
    return rest.length === 1? rest[0] :rest.reduce((accum, item) => accum = accum * item/ evclidAlg(accum,item),)
};
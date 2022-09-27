function valueOfX(eq) {
    [charWithX, chartNoX] = eq.split('=');
    if (chartNoX.includes('x')) [charWithX, chartNoX] = [chartNoX, charWithX];
    let result = (eval(chartNoX) - eval(charWithX.replace('x', '0')));
    return (charWithX.includes('- x')) ? result * (-1) : result;
}
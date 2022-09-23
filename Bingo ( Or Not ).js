function bingo(a) {
    let b = [];
    a.filter((item, pos) => a.indexOf(item) == pos).forEach(element => {
        element === 2 ? b.push(element) : element === 7 ? b.push(element) : element === 9 ? b.push(element) : element === 14 ? b.push(element) : element === 15 ? b.push(15) : a
    });
    return b.sort((a, b) => (a - b)).join() == [2, 7, 9, 14, 15].join() ? "WIN" : "LOSE"
}
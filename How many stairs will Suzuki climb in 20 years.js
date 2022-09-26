function stairsIn20(s) {
    return [].concat(s[0], s[1], s[2], s[3], s[4], s[5], s[6]).reduce((accum, item) => accum += item, 0) * 20
}
function to_nato(words) {
      let natoCode = [
        'Alfa',
        'Bravo',
        'Charlie',
        'Delta',
        'Echo',
        'Foxtrot',
        'Golf',
        'Hotel',
        'India',
        'Juliett',
        'Kilo',
        'Lima',
        'Mike',
        'November',
        'Oscar',
        'Papa',
        'Quebec',
        'Romeo',
        'Sierra',
        'Tango',
        'Uniform',
        'Victor',
        'Whiskey',
        'Xray',
        'Yankee',
        'Zulu',
    ];
    let transform = [];
    for (let i of words) {
        if (/^[,.!?]+$/.test(i)) {
            transform.push(i)
        } else if (i === ' ') {
        } else if (/^[a-zA-Z]+$/.test(i)) {
            natoCode.forEach(item => {
                if (item[0] === i.toUpperCase()){
                    transform.push(item)
                }
            })
        }
    }
    return transform.join(' ')
}
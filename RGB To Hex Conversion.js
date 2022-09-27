function rgb(r, g, b){
 let color = [];
    if (r > 255) {
        r = 255;
    } else if (r < 0) {
        r = 0;
    }
    if (g > 255) {
        g = 255;
    } else if (g < 0) {
        g = 0;
    }
    if (b > 255) {
        b = 255;
    } else if (b < 0) {
        b = 0;
    }

    color.push(r.toString(16), g.toString(16), b.toString(16))

    color.forEach((item,index,array) => {
        if (item.length === 1) {
            array[index]= '0'+item
        }
    })
    return color.join('').toUpperCase()
}
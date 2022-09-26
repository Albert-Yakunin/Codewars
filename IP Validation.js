function isValidIP(str) {
    let arrIp = str.split('.')
    let strRes = arrIp.join('');
    if (arrIp.length > 4 || arrIp.length < 4 || str[0] === ' ' || str[str.length - 1] === ' ' || typeof +str[0] !== 'number' || typeof +str[str.length - 1] !== 'number' || !/^[0-9]+$/.test(strRes)) {
        return false
    }
       return arrIp.every(elem => {
        return (elem >= 0 && elem <= 255 && typeof +elem === 'number' && elem[1] !== 'e' && !(elem[0] === '0' && /^[0-9]+$/.test(elem[1])) && elem !== '')
    })
}
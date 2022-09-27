function validatePIN (pin) {
    return pin.length===4 && /^\d{4}$/ .test(pin)||pin.length===6 && /^\d{6}$/.test(pin)? true:false
   } 
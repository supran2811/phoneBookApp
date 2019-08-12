

export function validateTelephone(tel) {
    const pat = new RegExp('^(\\+91[\\-\\s]?)?[0]?(91)?[789]\\d{9}$');

    return pat.test(tel);
}

export function validateEmail(email) {
    
    const pat = new RegExp('^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$', 'i');

    return pat.test(email);
}
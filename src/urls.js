let domain = '';

switch (process.env.env) {
    case 'dev':
        domain = 'http://112.65.18.61:65000';
    default:
        domain = 'http://112.65.18.61:65000';
}


export {
    domain
}
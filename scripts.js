const E_NAME = document.getElementById('name');

////////////////////
// Email obfuscation
//
const ADDR = 'aderonke.adejare',
      DOMAIN = 'yale.edu';
document.getElementById('email').href = 'mailto' + ':' + ADDR + '@' + DOMAIN;

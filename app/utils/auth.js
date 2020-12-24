const bcrypt            = require('bcryptjs');

exports.isAlNum         = params => {
  if(params.match(/[a-z]/g) === null)
    return false;
  else if(params.match(/[A-Z]/g) === null)
    return false;
  else if(params.match(/\d/g) === null)
    return false;
  else 
    return true;
}

exports.hashedPassword = async password => await bcrypt.hash(password, 8);
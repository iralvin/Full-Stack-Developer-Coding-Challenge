const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    required: true,
    type: String,
    select: false
  }
});

userSchema.statics.findByUsername = function (username, password) {
  return this.findOne({ username })
    .select('+password')
    .then((user) => {
      if (!user) {
        console.log('no user found');
      }
      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          console.log('incorrect password');
        }
        return user;
      });
    });
};

module.exports = mongoose.model('user', userSchema);
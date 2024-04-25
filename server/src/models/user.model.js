const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
  name: String,
  email: String,
  gradeStanding: String,
  major: String,
  questionOne: String,
  questionTwo: String,
  questionThree: String,
  questionFour: String,
  questionFive: String,
  extraInfo: String,
  isChecked: Boolean, // Assuming isChecked is a boolean field
  primaryRole: String,
  secondaryRole: {
    designer: Boolean,
    developer: Boolean,
    teamlead: Boolean
  },
  hasBeenMemberBefore: String // Assuming this field is added to the schema
});

const User = model('User', UserSchema);

module.exports = User;

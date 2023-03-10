import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//get all users
export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};

//create new user
export const newUserRegistration = async (body) => {
  const saltRounds = 10;
  const hash = bcrypt.hashSync(body.password, saltRounds);
  body.password = hash;
  const data = await User.create(body);
  return data;
};

//login user
export const loginUser = async (body) => {
  let email = body.email;
  let data = await User.find({ email: email });
  console.log(data.password);
  console.log(data);
  if (data.length !== 0) {
    let passwordvalidator = await bcrypt.compare(body.password, data[0].password);
    if (passwordvalidator) {
      let token = jwt.sign({ email: data[0].email, firstName: data[0].firstName, id: data[0]._id }, process.env.SECRET_KEY);
      return token;
    } else {
      throw new Error('Password Is incorrect.....');
    }
  } else {
    throw new Error('Email Is incorrect.....');

  }

};

//update single user
export const updateUser = async (_id, body) => {
  const data = await User.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete single user
export const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  return '';
};

//get single user
export const getUser = async (id) => {
  const data = await User.findById(id);
  return data;
};

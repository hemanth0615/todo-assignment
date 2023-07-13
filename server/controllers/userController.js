const User = require('../models/user');

// User Signup
exports.signup = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).send('Signup successful');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// User Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email, password } });
    if (user) {
      res.json({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      });
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// User Data
exports.userData = async (req, res) => {
  try {
    const { email, password } = req.headers;
    const user = await User.findOne({ where: { email, password } });
    if (user) {
      const users = await User.findAll();
      const usersToReturn = users.map(user => ({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }));
      res.json(usersToReturn);
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

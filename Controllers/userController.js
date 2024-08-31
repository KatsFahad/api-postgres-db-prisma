const { PrismaClient, Role } = require("@prisma/client");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const prisma = new PrismaClient();

const getUsers = async (req, res) => {
  const user = await prisma.user.findMany();
  if (user) {
    res.json(user);
  } else {
    res.send("no users found");
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });
  if (user) {
    if (password === password) {
      const token = await jwt.sign({ id: user.id, role: user.role }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      res.json({token, 'message':'success'})
    } else {
      res.send("password was incorrect");
    }
  } else {
    res.send("user not found");
  }
};

module.exports = {
  getUsers,
  loginUser
};

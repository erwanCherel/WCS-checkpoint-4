require("dotenv").config();
const jwt = require("jsonwebtoken");

const { JWT_SECRET, JWT_EXPIRESIN, JWT_SECURE, JWT_COOKIE_MAXAGE } =
  process.env;

const createToken = (req, res) => {
  const { id, role } = req.body;

  jwt.sign(
    { id, role },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRESIN },
    (err, token) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        res
          .cookie("jwtToken", token, {
            httpOnly: true,
            secure: JWT_SECURE === "true",
            maxAge: parseInt(JWT_COOKIE_MAXAGE, 10),
          })
          .json(req.body);
      }
    }
  );
};

const verifyToken = (req, res) => {
  const token = req.cookies.jwtToken;
  if (!token) {
    res.status(401).send("You're not login");
  } else {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        req.body = { ...req.body, ...decoded };
        res.sendStatus(200);
      }
    });
  }
};

const autoVerifyToken = (req, res, next) => {
  const token = req.cookies.jwtToken;
  if (!token) {
    res.status(401).send("You're not login");
  } else {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        req.body = { ...req.body, ...decoded };

        next();
      }
    });
  }
};

const isPro = (req, res, next) => {
  if (req.body.role === "pro") {
    next();
  } else {
    res.sendStatus(401);
  }
};

module.exports = { createToken, verifyToken, isPro, autoVerifyToken };

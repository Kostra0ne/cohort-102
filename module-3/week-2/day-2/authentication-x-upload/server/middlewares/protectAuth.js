const protectAuth = (req, res, next) => {
  if (!req.session.currentUser) {
    return res.status(401).json({ message: "Unauthorized" });
  } else {
    next();
  }
};

module.exports = protectAuth;

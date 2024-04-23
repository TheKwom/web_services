const amberRoute = (req, res) => {
  res.send("Amber Davis");
};

const murphyRoute = (req, res) => {
  res.send("Murphy Davis");
};

const ellieRoute = (req, res) => {
  res.send("Ellie Davis");
};

module.exports = { amberRoute, murphyRoute, ellieRoute };

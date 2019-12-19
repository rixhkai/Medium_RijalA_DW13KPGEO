const models = require("../models");
const todo = models.articles;
const User = models.users;

exports.index = (req, res) => {
 console.log("get all artilces");
 todo
  .findAll({
   include: [
    {
     model: User,
     as: "author"
    }
   ]
  })
  .then(some => res.send(some))
  .catch(err => res.send(err));
}; // Get All articless

exports.pop = (req, res) => {
 console.log("get popular by latest date");
 todo
  .findAll({
   where: {is_published: (req.params.is_published = true)},
   order: [["createdAt", "DESC"]],
   include: [{model: User, as: "author"}],
   limit: 10
  })
  .then(some => res.send(some));
};

exports.show = (req, res) => {
 console.log("get specific one");
 todo.findOne({id: req.params.id}).then(some => res.send(some));
};

exports.store = (req, res) => {
 todo.create(req.body).then(some => {
  res.send({
   message: "success",
   some
  });
 });
};

exports.delete = (req, res) => {
 todo.destroy({where: {id: req.params.id}}).then(todo => {
  res.send({
   message: "success",
   todo
  });
 });
};

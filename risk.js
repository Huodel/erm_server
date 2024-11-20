const router = require('express').Router();
const Risk = require('./risk.model');

router.route('/').post((req, res) => {
    Risk.find()
    .then(test => res.json(test))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const email = req.body.email;
  Risk.find({email:email})
  .then(user => res.json(user))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/rand').post((req, res) => {
  Risk.aggregate()
  .then(test => res.json(test))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const user  = req.body.user
  const email  = req.body.email
  const riskid = req.body.riskid
  const priority = req.body.priority
  const risk = req.body.risk
  const riskdescription = req.body.riskdescription
  const riskmanager = req.body.riskmanager

  const userData = new Risk({
    user,email,riskid,priority,risk,riskdescription,riskmanager});

  userData.save()
    .then(() => res.json('Comment post sucessful!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Risk.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const email = req.body.email;
  Risk.findOneAndDelete({"email":email})
  
    .then(() => res.json('user Removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/up').post((req, res) => {
  const user = req.body.user
  Risk.findOne({user:user})
    .then(user => {
      user.user = req.body.user;
      user.email = req.body.email;
      user.riskid = req.body.riskid;
      user.priority = req.body.priority;
      user.risk = req.body.code;
      user.riskdescription = req.body.riskdescription;
      user.riskdescription = req.body.riskdescription;
      user.sys = req.body.ds12;

      user.save()
        .then(() => res.json('user updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
var User = require("../models/user");


exports.signup = async (req, res) => {
    try{

        const user = new User({
            fullName: req.body.fullName,
            email: req.body.email,
            role: req.body.role,
            password: bcrypt.hashSync(req.body.password, 10)
        });
        
        await user.save();
            
        res.status(200).send({
            message: "User registered successfully"
          });
        } catch (err) {
          res.status(500).send({
            message: err.message || "An error occurred while registering user"
          });    }

};

exports.signin = async (req, res) => {
    try {

   
      const user = await User.findOne({ email: req.body.email });
  
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
  
      const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
  
      if (!passwordIsValid) {
        return res.status(401).send({ accessToken: null, message: "Invalid Password!" });
      }
  
      const token = jwt.sign({ id: user.id,email:user.email }, process.env.API_SECRET || 'fallback_secret_key', { expiresIn: 86400 });
  
      res.status(200).send({
        user: {
          id: user._id,
          email: user.email,
          fullName: user.fullName,
        },
        message: "Login successful",
        accessToken: token,
      });
    } catch (err) {
      res.status(500).send({ message: err.message || "An error occurred while signing in" });
    }
  };



  
  
  
const Admin = require('../models/Admin');

exports.createAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    let admin = new Admin({ username, password });
    admin = await admin.save();
    res.status(201).json(admin);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

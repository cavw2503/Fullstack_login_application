// A placeholder login handler
exports.login = (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password') {
    return res.json({ success: true, message: 'Login success' });
  }
  res.status(401).json({ success: false, message: 'Login failed' });
};

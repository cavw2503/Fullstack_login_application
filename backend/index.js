// 1. Import dependencies
const express = require('express');
const cors    = require('cors');

// 2. Create an Express app
const app = express();

// 3. Apply middleware
app.use(cors());            // allow cross-origin requests
app.use(express.json());    // parse JSON bodies

// 4. Health check route
app.get('/', (req, res) => {
  res.send('Backend is up and running!');
});

// 5. Import routes
const loginRouter = require('./routes/login');
app.use('/login', loginRouter);

// 6. Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

/* Line 1–2: Load the packages you installed.

Line 5: app.use(cors()) lets your React front-end (on port 3000) talk to this server.

Line 6: app.use(express.json()) parses incoming JSON so you can read req.body.

Line 9–11: A simple GET route to verify the server’s working.

Line 14–16: Starts listening on port 5000 and logs a confirmation. */
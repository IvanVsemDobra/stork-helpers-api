import express from 'express';

const app = express();
const PORT = 3030;

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Stork-Helpers API'
  });
});

app.listen(PORT, () => {
  console.log(` API running on http://localhost:${PORT}`);
});

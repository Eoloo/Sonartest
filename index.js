const express =  require('express');
const app =  express();
const port =  process.env.PORT  ||  10000
// Route to be tested
app.get('/', (req, res) => {
    return res.status(200).json({ name:  'Evans Oloo' });
});
// Application running on the door
let server = app.listen(port, () => {
    console.log(`Application running on ${port}`);
});
module.exports  = server;
import * as express from 'express';
import * as path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '../../client/build')));

app.use('/uploads', express.static(path.join(__dirname, '../../strapi/public/uploads')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
})

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
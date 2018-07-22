var express = require('express');

app = express();

app.set('view engine', 'ejs');
app.set('views','app/views');

app.set('port', process.env.PORT || 3000);

app.use(express.static('app/public'));
app.use(require('./routers/index'));

app.listen(app.get('port'), () => {
    console.log('Server is listening on port ' + app.get('port'));
});
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

/* var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users'); */
var postsRouter = require('./routes/posts/routes');
var categoriesRouter = require('./routes/categories/routes');

var app = express();

const allowedMethods = ["GET", "POST", "OPTIONS"];
app.use((req, res, next) => {

	if (!allowedMethods.includes(req.method))
		return res.status(405).end("Method Not Allowed");

	return next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: 'http://127.0.0.1:8080',
  credential: true,
}))
//app.use('/image', express.static('./upload')) //사용자가 image폴더에 접근하면 실제 서버에서 upload폴더로 맵핑

/* app.use('/', indexRouter);
app.use('/users', usersRouter); */
app.use('/posts', postsRouter);
app.use('/categories', categoriesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

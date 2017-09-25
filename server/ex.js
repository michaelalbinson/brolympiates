ex = require('express');

server = ex();

server.use('/css', ex.static('../client/css'));
server.use('/js', ex.static('../client/js'));
server.use('/assets', ex.static('../client/assets'));

server.set('views', '../client/views');
server.set('view engine', 'pug');


server.get('/', function(request, response) {
	response.render('index', {});
});

server.listen(8000);
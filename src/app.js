const express = require('express');
const app = express();
const puerto = 80;
const PedidosController = require('./controllers/PedidosController');
const Detalles_PedidosController = require('./controllers/PedidosController');
const ProductoController = require('./controllers/ProductosController');
const ProductosController = require('./controllers/ProductosController');
const TiendasController = require('./controllers/TiendasController');
const UsuariosController = require('./controllers/UsuariosController');

app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Bridgetool');
});

app.get('/pedidos', PedidosController.indexGet);
app.get('/pedidos/:id([0-9]+)', PedidosController.itemGet);
app.post('/pedidos', PedidosController.indexPost);
app.put('/pedidos/:id([0-9]+)', PedidosController.itemPut);
app.patch('/pedidos/:id([0-9]+)', PedidosController.itemPatch);



app.get('/detalles_pedidos', Detalles_PedidosController.indexGet);
app.get('/detalles_pedidos/:id([0-9]+)', Detalles_PedidosController.itemGet);
app.post('/detalles_pedidos', Detalles_PedidosController.indexPost);
app.put('/detalles_pedidos/:id([0-9]+)', Detalles_PedidosController.itemPut);
app.patch('/detalles_pedidos/:id([0-9]+)', Detalles_PedidosController.itemPatch);


app.get('/productos', ProductosController.indexGet);
app.get('/productos/:id([0-9]+)', ProductosController.itemGet);
app.post('/productos', ProductosController.indexPost);
app.put('/productos/:id([0-9]+)', ProductosController.itemPut);
app.patch('/productos/:id([0-9]+)', ProductosController.itemPatch);


app.get('/tiendas', TiendasController.indexGet);
app.get('/tiendas/:id([0-9]+)', TiendasController.itemGet);
app.post('/tiendas', TiendasController.indexPost);
app.put('/tiendas/:id([0-9]+)', TiendasController.itemPut);
app.patch('/tiendas/:id([0-9]+)', TiendasController.itemPatch);

app.get('/usuarios', UsuariosController.indexGet);
app.get('/usuarios/:id([0-9]+)', UsuariosController.itemGet);
app.post('/usuarios', UsuariosController.indexPost);
app.put('/usuarios/:id([0-9]+)', UsuariosController.itemPut);
app.patch('/usuarios/:id([0-9]+)', UsuariosController.itemPatch);


app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});
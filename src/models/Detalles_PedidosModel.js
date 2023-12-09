const { connectMysql } = require('../dbconnection');
class Detalles_PedidosModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('detalles_pedidos');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('detalles_pedidos').where('id_detalle', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('detalles_pedidos').insert(datos).returning('id_detalle');//cambiar el id tema de todos
    
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('detalles_pedidos').where('id_detalle', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_tema'] = id;
        await db('detalles_pedidos').where('id_detalle', id).del();
        await db.insert(newData).into('detalles_pedidos');
        return id;
    }
}

module.exports = Detalles_PedidosModel;
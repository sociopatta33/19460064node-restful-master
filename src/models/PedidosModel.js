const { connectMysql } = require('../dbconnection');
class PedidosModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('pedidos');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('pedidos').where('id_pedido', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('pedidos').insert(datos).returning('id_pedido');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('pedidos').where('id_pedido', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_tema'] = id;
        await db('pedidos').where('id_pedido', id).del();
        await db.insert(newData).into('pedidos');
        return id;
    }
}

module.exports = PedidosModel;
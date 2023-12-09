const { connectMysql } = require('../dbconnection');
class TiendasModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('tiendas');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('tiendas').where('id_tienda', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('tiendas').insert(datos).returning('id_tienda');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('tiendas').where('id_tienda', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_tienda'] = id;
        await db('tiendas').where('id_tienda', id).del();
        await db.insert(newData).into('tiendas');
        return id;
    }
}

module.exports = TiendasModel;
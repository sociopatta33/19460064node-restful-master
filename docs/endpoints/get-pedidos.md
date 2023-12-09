# Endpoint: `GET /pedidos`
Este endpoint permite obtener una lista de todos los pedidos registrados en la base de datos.
## Parámetros de URL
-No se requieren parámetros adicionales para este endpoint.

## Ejemplo de Solicitud
```http
GET /pedidos
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id_pedido": 1,
        "fecha_pedido": "2023-11-15T00:00:00.000Z",
        "fk_id_usuario": 1
    },
    {
        "id_pedido": 2,
        "fecha_pedido": "2023-11-16T00:00:00.000Z",
        "fk_id_usuario": 2
    },
    {
        "id_pedido": 3,
        "fecha_pedido": "2023-11-17T00:00:00.000Z",
        "fk_id_usuario": 3
    }
]
```

## Respuestas de Errores Posibles
- Código 500 Internal Server Error:

  ```json
    {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud."
    }
  ```


## Notas Adicionales

-Este endpoint devuelve una lista completa de todos los pedidos realizados, incluyendo su fecha y el identificador del usuario que realizó cada pedido. Es ideal para sistemas de gestión donde se necesita un registro completo de todas las transacciones o pedidos realizados.
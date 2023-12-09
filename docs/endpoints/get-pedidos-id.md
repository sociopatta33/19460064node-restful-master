# Endpoint: `GET /pedidos/{id_pedido}`

Este endpoint permite obtener información detallada sobre un pedido específico mediante su identificador único.



## Parámetros de URL
`{id_pedido}` (obligatorio): Identificador único del pedido que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /pedidos/1
GET /pedidos/2
GET /pedidos/3
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_pedido": 1,
    "fecha_pedido": "2023-11-15T00:00:00.000Z",
    "fk_id_usuario": 1
}

{
    "id_pedido": 2,
    "fecha_pedido": "2023-11-16T00:00:00.000Z",
    "fk_id_usuario": 2
}

{
    "id_pedido": 3,
    "fecha_pedido": "2023-11-17T00:00:00.000Z",
    "fk_id_usuario": 3
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
    {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró un pedido con el id_pedido {id_pedido}."
    }
  ```

- Código 500 Internal Server Error:
  ```json
    {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud."
    }
  ``` 

## Notas Adicionales

-Este endpoint es útil para obtener detalles específicos de un pedido, como su fecha y el identificador del usuario que realizó el pedido. Es crucial en sistemas de gestión de pedidos y comercio electrónico para el seguimiento y gestión de pedidos individuales.
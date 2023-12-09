# Endpoint: `GET /detalles-pedidos`

Este endpoint permite obtener una lista de todos los detalles de los pedidos registrados en la base de datos.


## Parámetros de URL
No se requieren parámetros adicionales para este endpoint.

## Ejemplo de Solicitud
```http
GET /detalles-pedidos
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

-Este endpoint proporciona una vista completa de todos los detalles de los pedidos realizados, incluyendo la cantidad y los identificadores de los pedidos y productos asociados. Es ideal para sistemas de gestión de pedidos donde se requiere una revisión detallada de los ítems de cada pedido.
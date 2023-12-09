# Endpoint: `GET /productos/{id_producto}`

Permite obtener información detallada sobre un producto específico mediante su identificador único.


## Parámetros de URL
- `{id_producto}` (obligatorio): Identificador único del producto que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /productos/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_producto": 1,
    "nombre": "Martillo",
    "descripcion": "Martillo de acero forjado",
    "precio": "15.99",
    "fk_id_tienda": 1
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
    {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró un producto con el id_producto {id_producto}."
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

-Este endpoint es esencial para obtener información detallada de un producto específico, como su precio, descripción y la tienda a la que pertenece.
-Es útil en escenarios como tiendas en línea, donde los clientes pueden querer ver más detalles sobre un producto específico antes de realizar una compra.
# Endpoint: `GET /tiendas/{id_tienda}`

Permite obtener información detallada sobre una tienda específica mediante su identificador único.
## Parámetros de URL
- `{id_tienda}` (obligatorio): Identificador único de la tienda que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /tiendas/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_tienda": 1,
    "nombre": "Ferretería López",
    "direccion": "Calle Principal 123",
    "ciudad": "Ciudad A"
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró una tienda con el id_tienda {id_tienda}."
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

-Asegúrate de incluir un ID de tienda válido en la solicitud para obtener información específica sobre una tienda en particular.
-Este endpoint es útil para obtener detalles de una tienda, como su dirección y ciudad, y es esencial en situaciones donde se necesita información específica de una tienda para procesos como envíos o consultas locales.
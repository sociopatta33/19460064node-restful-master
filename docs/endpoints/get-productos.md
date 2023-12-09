# Endpoint: `GET /productos`

Permite obtener una lista de todos los productos registrados en la base de datos.
## Parámetros de URL
-No se requieren parámetros adicionales para este endpoint.

## Ejemplo de Solicitud
```http
GET /productos
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id_producto": 1,
        "nombre": "Martillo",
        "descripcion": "Martillo de acero forjado",
        "precio": "15.99",
        "fk_id_tienda": 1
    },
    {
        "id_producto": 2,
        "nombre": "Destornillador",
        "descripcion": "Destornillador de precisión",
        "precio": "9.75",
        "fk_id_tienda": 2
    },
    {
        "id_producto": 3,
        "nombre": "Sierra circular",
        "descripcion": "Sierra para cortes precisos",
        "precio": "89.50",
        "fk_id_tienda": 3
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

-Este endpoint devuelve una lista completa de todos los productos disponibles en la base de datos.
-Es ideal para aplicaciones de comercio electrónico o sistemas de gestión de inventarios que requieren visualizar todos los productos disponibles.
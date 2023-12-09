# Endpoint: `GET /usuarios`

Permite obtener una lista de todos los usuarios registrados en la base de datos.

## Parámetros de URL
No se requieren parámetros adicionales para este endpoint.

## Ejemplo de Solicitud
```http
GET /usuarios
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id_usuario": 1,
        "nombre": "Juan Pérez",
        "email": "juan@example.com",
        "contraseña": "clave123"
    },
    {
        "id_usuario": 2,
        "nombre": "María García",
        "email": "maria@example.com",
        "contraseña": "contraseña123"
    },
    {
        "id_usuario": 3,
        "nombre": "Pedro Rodríguez",
        "email": "pedro@example.com",
        "contraseña": "segura456"
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

-Este endpoint proporciona una lista completa de los usuarios registrados.
-Es importante tener en cuenta las consideraciones de privacidad y seguridad al exponer datos de usuario, especialmente contraseñas. En una implementación real, las contraseñas nunca deben ser expuestas en las respuestas de la API y deben almacenarse de manera segura (por ejemplo, encriptadas) en la base de datos.




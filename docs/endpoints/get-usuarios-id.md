# Endpoint: `GET /usuarios/{id_usuario}`

Permite obtener información detallada sobre un usuario específico mediante su identificador único.
## Parámetros de URL
`{id_usuario}` (obligatorio): Identificador único del usuario que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /usuarios/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_usuario": 1,
    "nombre": "Juan Pérez",
    "email": "juan@example.com",
    "contraseña": "clave123"
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró un usuario con el id_usuario {id_usuario}."
  }

-Código 500 Internal Server Error:

  ```json
{
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud."
}

## Notas Adicionales

-Este endpoint es útil para obtener detalles específicos de un usuario, como su nombre y correo electrónico.
-Nuevamente, es crucial considerar las buenas prácticas de seguridad y privacidad. En un entorno real, se deben tomar medidas para proteger la información sensible del usuario, como la contraseña, y no exponerla en la API.
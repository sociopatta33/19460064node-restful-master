# Endpoint: `GET /tiendas`

Permite obtener información sobre todas las tiendas registradas.

## Parámetros de URL
No se requieren parámetros adicionales para este endpoint.

## Ejemplo de Solicitud
```http
GET /tiendas
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id_tienda": 1,
        "nombre": "Ferretería López",
        "direccion": "Calle Principal 123",
        "ciudad": "Ciudad A"
    },
    {
        "id_tienda": 2,
        "nombre": "Herramientas Rivas",
        "direccion": "Avenida Central 456",
        "ciudad": "Ciudad B"
    },
    {
        "id_tienda": 3,
        "nombre": "Ferretería Martínez",
        "direccion": "Calle Secundaria 789",
        "ciudad": "Ciudad C"
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

- Este endpoint devuelve una lista completa de todas las tiendas disponibles en la base de datos, sin necesidad de especificar un ID.
Es ideal para ofrecer una visión general de las tiendas en aplicaciones que necesiten mostrar múltiples opciones a los usuarios.





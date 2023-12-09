CREATE DATABASE IF NOT EXISTS bridgetool;

USE bridgetool;

CREATE TABLE tiendas (
    id_tienda       INTEGER             NOT NULL    AUTO_INCREMENT,
    nombre          VARCHAR(255)        NOT NULL,
    direccion       VARCHAR(255)        NOT NULL,
    ciudad          VARCHAR(100)        NOT NULL,
    PRIMARY KEY     (id_tienda)
);

CREATE TABLE productos (
    id_producto     INTEGER             NOT NULL    AUTO_INCREMENT,
    nombre          VARCHAR(255)        NOT NULL,
    descripcion     TEXT,
    precio          DECIMAL(10, 2)      NOT NULL,
    fk_id_tienda    INTEGER             NOT NULL,
    PRIMARY KEY     (id_producto),
    FOREIGN KEY     (fk_id_tienda)      REFERENCES tiendas(id_tienda)
);

CREATE TABLE usuarios (
    id_usuario      INTEGER             NOT NULL    AUTO_INCREMENT,
    nombre          VARCHAR(100)        NOT NULL,
    email           VARCHAR(255)        NOT NULL,
    contraseña      VARCHAR(255)        NOT NULL,
    PRIMARY KEY     (id_usuario),
    UNIQUE          (email)
);

CREATE TABLE pedidos (
    id_pedido       INTEGER             NOT NULL    AUTO_INCREMENT,
    fecha_pedido    DATE                NOT NULL,
    fk_id_usuario   INTEGER             NOT NULL,
    PRIMARY KEY     (id_pedido),
    FOREIGN KEY     (fk_id_usuario)     REFERENCES usuarios(id_usuario)
);

CREATE TABLE detalles_pedido (
    id_detalle      INTEGER             NOT NULL    AUTO_INCREMENT,
    cantidad        INTEGER             NOT NULL,
    fk_id_pedido    INTEGER             NOT NULL,
    fk_id_producto  INTEGER             NOT NULL,
    PRIMARY KEY     (id_detalle),
    FOREIGN KEY     (fk_id_pedido)      REFERENCES pedidos(id_pedido),
    FOREIGN KEY     (fk_id_producto)    REFERENCES productos(id_producto)
);
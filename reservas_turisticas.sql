-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-08-2025 a las 02:11:43
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `reservas_turisticas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `galeria`
--

CREATE TABLE `galeria` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `fecha_subida` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id` int(11) NOT NULL,
  `id_tour` int(11) DEFAULT NULL,
  `identificacion` varchar(20) DEFAULT NULL,
  `nombres_completos` varchar(255) NOT NULL,
  `correo_electronico` varchar(255) NOT NULL,
  `telefono` varchar(55) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `destino` varchar(255) DEFAULT NULL,
  `numero_personas` int(11) DEFAULT NULL,
  `mensaje` text DEFAULT NULL,
  `estado_reserva` enum('pendiente','confirmada','cancelada','') DEFAULT 'pendiente',
  `fecha_reserva` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id`, `id_tour`, `identificacion`, `nombres_completos`, `correo_electronico`, `telefono`, `fecha_inicio`, `fecha_fin`, `destino`, `numero_personas`, `mensaje`, `estado_reserva`, `fecha_reserva`) VALUES
(2, NULL, '12345678', 'Jenifer Perez', 'jeni@hotmail.com', '31300000', '2025-07-01', '2025-07-02', 'islas_del_rosario', 2, 'Cuanto es el valor, y si hay alguna promocion.', 'confirmada', '2025-08-01 04:06:00'),
(3, NULL, '1047383831', 'Daniel Andres', 'jensagar08@hotmail.com', '3218148672', '2025-11-11', '2025-12-11', 'islas_del_rosario', 1, 'Buen viaje', 'confirmada', '2025-08-03 02:47:18'),
(4, NULL, '1047383835', 'Dayana Valdez', 'jensagar08@hotmail.com', '3011332503', '2025-11-11', '2025-11-15', 'tierra_bomba', 2, 'MQSJWNBCDJNS', 'pendiente', '2025-08-03 22:52:46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tours`
--

CREATE TABLE `tours` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT 0.00,
  `estado` enum('activo','inactivo','','') DEFAULT 'activo',
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tours`
--

INSERT INTO `tours` (`id`, `titulo`, `descripcion`, `imagen`, `precio`, `estado`, `fecha_creacion`) VALUES
(1, 'Tur la media luna', 'Este tour te lleva por la calle la media luna donde podrás disfrutar de fotos y comidas de muchos sabores, como también musica caribeña hasta llegar a donde una chiva que te ara un recorrido por el Getsemaní .', 'https://viajandoanuestroaire.com/wp-content/uploads/2023/11/DSC01027-1024x768.jpg', 80000.00, 'activo', '2025-08-01 04:30:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_admin`
--

CREATE TABLE `usuarios_admin` (
  `id` int(11) NOT NULL,
  `usuario` varchar(255) NOT NULL,
  `contrasena` varchar(55) NOT NULL,
  `nombre_completo` varchar(255) DEFAULT NULL,
  `rol` enum('admin','editor','','') DEFAULT 'admin',
  `estado_admin` enum('activo','inactivo','','') DEFAULT 'activo',
  `fecha_creación` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios_admin`
--

INSERT INTO `usuarios_admin` (`id`, `usuario`, `contrasena`, `nombre_completo`, `rol`, `estado_admin`, `fecha_creación`) VALUES
(1, 'admin', 'admin123', 'Administrador Principal', 'admin', 'activo', '2025-08-01 04:16:39'),
(2, 'jsanchezg21', '123', 'Jennifer Sánchez', 'admin', 'activo', '2025-08-03 02:48:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `galeria`
--
ALTER TABLE `galeria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_tour` (`id_tour`);

--
-- Indices de la tabla `tours`
--
ALTER TABLE `tours`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios_admin`
--
ALTER TABLE `usuarios_admin`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `galeria`
--
ALTER TABLE `galeria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tours`
--
ALTER TABLE `tours`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios_admin`
--
ALTER TABLE `usuarios_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`id_tour`) REFERENCES `tours` (`id`);

--
-- Filtros para la tabla `tours`
--
ALTER TABLE `tours`
  ADD CONSTRAINT `tours_ibfk_1` FOREIGN KEY (`id`) REFERENCES `usuarios_admin` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

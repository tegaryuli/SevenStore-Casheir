-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 16, 2026 at 03:56 PM
-- Server version: 8.0.30
-- PHP Version: 8.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cashier_toko7`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity_logs`
--

CREATE TABLE `activity_logs` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `action` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `activity_logs`
--

INSERT INTO `activity_logs` (`id`, `user_id`, `action`, `description`, `created_at`, `updated_at`) VALUES
(1, 1, 'warehouse_transfer', 'User Naafiri membuka segel gudang untuk produk MI ayam sebanyak 1.', '2026-08-04 19:05:57', '2026-08-04 19:05:57'),
(2, 1, 'login', 'User Naafiri login ke sistem.', '2026-08-04 14:18:00', '2026-08-04 14:18:00'),
(3, 1, 'edit_product', 'User Naafiri mengedit produk Kopi Hitam.', '2026-08-04 15:18:00', '2026-08-04 15:18:00'),
(4, 1, 'delete_product', 'User Naafiri menghapus produk Roti Sobek.', '2026-08-04 16:18:00', '2026-08-04 16:18:00'),
(5, 1, 'warehouse_transfer', 'User Naafiri membuka segel gudang untuk produk MI ayam sebanyak 10.', '2026-08-04 17:18:00', '2026-08-04 17:18:00'),
(6, 6, 'login', 'User Packmate login ke sistem.', '2026-08-04 19:39:34', '2026-08-04 19:39:34'),
(7, 1, 'warehouse_transfer', 'Memindahkan 3  MI ayam ke stok toko.', '2026-07-06 03:22:34', '2026-07-06 03:22:34'),
(8, 1, 'warehouse_transfer', 'Memindahkan 2  MI ayam ke stok toko.', '2026-07-06 02:12:34', '2026-07-06 02:12:34'),
(9, 1, 'warehouse_transfer', 'Memindahkan 2  MI ayam ke stok toko.', '2026-07-07 05:15:34', '2026-07-07 05:15:34'),
(10, 6, 'checkout', 'Kasir Packmate menyelesaikan transaksi INV-20260709-UJKCY', '2026-07-09 07:26:25', '2026-07-09 07:26:25'),
(11, 1, 'warehouse_transfer', 'Memindahkan 2  MI ayam ke stok toko.', '2026-07-09 03:28:34', '2026-07-09 03:28:34'),
(12, 1, 'warehouse_transfer', 'Memindahkan 3  MI ayam ke stok toko.', '2026-07-09 03:46:34', '2026-07-09 03:46:34'),
(13, 1, 'warehouse_transfer', 'Memindahkan 3  MI ayam ke stok toko.', '2026-07-10 05:48:34', '2026-07-10 05:48:34'),
(14, 1, 'checkout', 'Kasir Naafiri menyelesaikan transaksi INV-20260711-SL6LP', '2026-07-11 05:17:48', '2026-07-11 05:17:48'),
(15, 1, 'warehouse_transfer', 'Memindahkan 1  MI ayam ke stok toko.', '2026-07-12 03:24:34', '2026-07-12 03:24:34'),
(16, 1, 'warehouse_transfer', 'Memindahkan 2  MI ayam ke stok toko.', '2026-07-12 03:22:34', '2026-07-12 03:22:34'),
(17, 1, 'warehouse_transfer', 'Memindahkan 1  MI ayam ke stok toko.', '2026-07-13 03:36:34', '2026-07-13 03:36:34'),
(18, 1, 'warehouse_transfer', 'Memindahkan 1  MI ayam ke stok toko.', '2026-07-13 01:09:34', '2026-07-13 01:09:34'),
(19, 6, 'checkout', 'Kasir Packmate menyelesaikan transaksi INV-20260714-UN2S7', '2026-07-14 08:05:08', '2026-07-14 08:05:08'),
(20, 1, 'warehouse_transfer', 'Memindahkan 3  MI ayam ke stok toko.', '2026-07-14 04:33:34', '2026-07-14 04:33:34'),
(21, 1, 'checkout', 'Kasir Naafiri menyelesaikan transaksi INV-20260716-EELQL', '2026-07-16 11:51:45', '2026-07-16 11:51:45'),
(22, 6, 'checkout', 'Kasir Packmate menyelesaikan transaksi INV-20260717-W4HKK', '2026-07-17 10:35:16', '2026-07-17 10:35:16'),
(23, 1, 'warehouse_transfer', 'Memindahkan 1  MI ayam ke stok toko.', '2026-07-17 03:59:34', '2026-07-17 03:59:34'),
(24, 1, 'warehouse_transfer', 'Memindahkan 1  MI ayam ke stok toko.', '2026-07-17 02:15:34', '2026-07-17 02:15:34'),
(25, 6, 'checkout', 'Kasir Packmate menyelesaikan transaksi INV-20260718-ILJVU', '2026-07-18 02:36:27', '2026-07-18 02:36:27'),
(26, 6, 'checkout', 'Kasir Packmate menyelesaikan transaksi INV-20260718-EWYVF', '2026-07-18 08:42:24', '2026-07-18 08:42:24'),
(27, 6, 'checkout', 'Kasir Packmate menyelesaikan transaksi INV-20260718-AL7YY', '2026-07-18 05:18:47', '2026-07-18 05:18:47'),
(28, 1, 'warehouse_transfer', 'Memindahkan 2  MI ayam ke stok toko.', '2026-07-18 01:13:34', '2026-07-18 01:13:34'),
(29, 6, 'checkout', 'Kasir Packmate menyelesaikan transaksi INV-20260719-L59Z5', '2026-07-19 05:25:10', '2026-07-19 05:25:10'),
(30, 1, 'warehouse_transfer', 'Memindahkan 2  MI ayam ke stok toko.', '2026-07-19 02:11:34', '2026-07-19 02:11:34'),
(31, 1, 'checkout', 'Kasir Naafiri menyelesaikan transaksi INV-20260720-KEQLV', '2026-07-20 03:09:19', '2026-07-20 03:09:19'),
(32, 6, 'checkout', 'Kasir Packmate menyelesaikan transaksi INV-20260720-KXZJX', '2026-07-20 14:26:37', '2026-07-20 14:26:37'),
(33, 6, 'checkout', 'Kasir Packmate menyelesaikan transaksi INV-20260720-PFN6P', '2026-07-20 11:43:25', '2026-07-20 11:43:25'),
(34, 1, 'warehouse_transfer', 'Memindahkan 2  MI ayam ke stok toko.', '2026-07-20 04:52:34', '2026-07-20 04:52:34'),
(35, 1, 'warehouse_transfer', 'Memindahkan 1  MI ayam ke stok toko.', '2026-07-20 03:30:34', '2026-07-20 03:30:34'),
(36, 1, 'warehouse_transfer', 'Memindahkan 2  MI ayam ke stok toko.', '2026-07-21 05:06:34', '2026-07-21 05:06:34'),
(37, 1, 'warehouse_transfer', 'Memindahkan 1  MI ayam ke stok toko.', '2026-07-21 04:39:34', '2026-07-21 04:39:34'),
(38, 1, 'warehouse_transfer', 'Memindahkan 3  MI ayam ke stok toko.', '2026-07-23 01:58:34', '2026-07-23 01:58:34'),
(39, 1, 'warehouse_transfer', 'Memindahkan 1  MI ayam ke stok toko.', '2026-07-23 05:17:34', '2026-07-23 05:17:34'),
(40, 1, 'checkout', 'Kasir Naafiri menyelesaikan transaksi INV-20260724-3GMWS', '2026-07-24 06:59:46', '2026-07-24 06:59:46'),
(41, 1, 'checkout', 'Kasir Naafiri menyelesaikan transaksi INV-20260724-QVPOA', '2026-07-24 09:31:23', '2026-07-24 09:31:23'),
(42, 1, 'warehouse_transfer', 'Memindahkan 3  MI ayam ke stok toko.', '2026-07-25 01:10:34', '2026-07-25 01:10:34'),
(43, 1, 'warehouse_transfer', 'Memindahkan 1  MI ayam ke stok toko.', '2026-07-25 05:44:34', '2026-07-25 05:44:34'),
(44, 6, 'checkout', 'Kasir Packmate menyelesaikan transaksi INV-20260726-S0MFX', '2026-07-26 10:29:54', '2026-07-26 10:29:54'),
(45, 1, 'checkout', 'Kasir Naafiri menyelesaikan transaksi INV-20260726-O219Z', '2026-07-26 04:00:14', '2026-07-26 04:00:14'),
(46, 1, 'warehouse_transfer', 'Memindahkan 2  MI ayam ke stok toko.', '2026-07-26 05:32:34', '2026-07-26 05:32:34'),
(47, 1, 'warehouse_transfer', 'Memindahkan 2  MI ayam ke stok toko.', '2026-07-26 01:36:34', '2026-07-26 01:36:34'),
(48, 1, 'checkout', 'Kasir Naafiri menyelesaikan transaksi INV-20260727-KDFJ5', '2026-07-27 05:16:32', '2026-07-27 05:16:32'),
(49, 1, 'warehouse_transfer', 'Memindahkan 2  MI ayam ke stok toko.', '2026-07-27 02:40:34', '2026-07-27 02:40:34'),
(50, 6, 'checkout', 'Kasir Packmate menyelesaikan transaksi INV-20260728-XJ7EI', '2026-07-28 02:44:55', '2026-07-28 02:44:55'),
(51, 1, 'warehouse_transfer', 'Memindahkan 3  MI ayam ke stok toko.', '2026-07-28 05:29:34', '2026-07-28 05:29:34'),
(52, 6, 'checkout', 'Kasir Packmate menyelesaikan transaksi INV-20260729-ZHVUL', '2026-07-29 12:21:05', '2026-07-29 12:21:05'),
(53, 6, 'checkout', 'Kasir Packmate menyelesaikan transaksi INV-20260729-BEWWU', '2026-07-29 02:40:50', '2026-07-29 02:40:50'),
(54, 6, 'checkout', 'Kasir Packmate menyelesaikan transaksi INV-20260729-8QL3R', '2026-07-29 14:23:03', '2026-07-29 14:23:03'),
(55, 1, 'warehouse_transfer', 'Memindahkan 2  MI ayam ke stok toko.', '2026-07-29 02:21:34', '2026-07-29 02:21:34'),
(56, 1, 'checkout', 'Kasir Naafiri menyelesaikan transaksi INV-20260730-CZGSV', '2026-07-30 10:42:24', '2026-07-30 10:42:24'),
(57, 1, 'warehouse_transfer', 'Memindahkan 1  MI ayam ke stok toko.', '2026-07-30 02:59:34', '2026-07-30 02:59:34'),
(58, 6, 'checkout', 'Kasir Packmate menyelesaikan transaksi INV-20260731-UHZE6', '2026-07-31 14:39:58', '2026-07-31 14:39:58'),
(59, 1, 'warehouse_transfer', 'Memindahkan 1  MI ayam ke stok toko.', '2026-08-01 04:43:34', '2026-08-01 04:43:34'),
(60, 6, 'checkout', 'Kasir Packmate menyelesaikan transaksi INV-20260802-ZUMBF', '2026-08-02 05:31:04', '2026-08-02 05:31:04'),
(61, 6, 'checkout', 'Kasir Packmate menyelesaikan transaksi INV-20260802-IQ4VS', '2026-08-02 12:27:04', '2026-08-02 12:27:04'),
(62, 6, 'checkout', 'Kasir Packmate menyelesaikan transaksi INV-20260802-J4JGV', '2026-08-02 12:34:48', '2026-08-02 12:34:48'),
(63, 1, 'warehouse_transfer', 'Memindahkan 3  MI ayam ke stok toko.', '2026-08-02 04:42:34', '2026-08-02 04:42:34'),
(64, 1, 'warehouse_transfer', 'Memindahkan 2  MI ayam ke stok toko.', '2026-08-02 01:23:34', '2026-08-02 01:23:34'),
(65, 1, 'warehouse_transfer', 'Memindahkan 3  MI ayam ke stok toko.', '2026-08-04 02:31:34', '2026-08-04 02:31:34'),
(66, 6, 'checkout', 'Kasir Packmate menyelesaikan transaksi INV-20260805-MRXAY', '2026-08-05 02:56:29', '2026-08-05 02:56:29'),
(67, 1, 'warehouse_transfer', 'Memindahkan 3  MI ayam ke stok toko.', '2026-08-05 03:08:34', '2026-08-05 03:08:34'),
(68, 1, 'edit_product', 'User Naafiri mengedit produk Samyang Carbonara.', '2026-08-05 03:45:28', '2026-08-05 03:45:28'),
(69, 1, 'edit_product', 'User Naafiri mengedit produk Baygon Aerosol 600ml.', '2026-08-05 03:48:13', '2026-08-05 03:48:13'),
(70, 1, 'warehouse_transfer', 'User Naafiri membuka segel gudang untuk produk Baygon Aerosol 600ml sebanyak 4.', '2026-08-05 03:50:05', '2026-08-05 03:50:05'),
(71, 1, 'login', 'User Naafiri login ke sistem.', '2026-09-15 13:03:50', '2026-09-15 13:03:50'),
(72, 1, 'login', 'User Naafiri login ke sistem.', '2026-09-16 15:53:41', '2026-09-16 15:53:41');

-- --------------------------------------------------------

--
-- Table structure for table `attendances`
--

CREATE TABLE `attendances` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `attendances`
--

INSERT INTO `attendances` (`id`, `user_id`, `created_at`, `updated_at`) VALUES
(6, 6, '2026-08-03 06:11:46', '2026-08-03 06:11:46'),
(7, 6, '2026-08-04 19:39:34', '2026-08-04 19:39:34');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `image_path`, `created_at`, `updated_at`) VALUES
(24, 'Minuman', '/storage/categories/8yc3xNPrexiN9ebpnWKD9jApPxbm6kQIIZWsOB8r.jpg', '2026-07-13 20:22:23', '2026-07-13 20:22:23'),
(25, 'Makanan Instan', 'https://placehold.co/400x400/0b85ff/ffffff?text=Makanan+Instan', '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(26, 'Minuman Dingin', 'https://placehold.co/400x400/0b85ff/ffffff?text=Minuman+Dingin', '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(27, 'Kebutuhan Mandi', 'https://placehold.co/400x400/0b85ff/ffffff?text=Kebutuhan+Mandi', '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(28, 'Snack & Camilan', 'https://placehold.co/400x400/0b85ff/ffffff?text=Snack+%26+Camilan', '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(29, 'Keperluan Rumah', 'https://placehold.co/400x400/0b85ff/ffffff?text=Keperluan+Rumah', '2026-08-04 20:13:15', '2026-08-04 20:13:15');

-- --------------------------------------------------------

--
-- Table structure for table `category_product`
--

CREATE TABLE `category_product` (
  `id` bigint UNSIGNED NOT NULL,
  `category_id` bigint UNSIGNED NOT NULL,
  `product_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category_product`
--

INSERT INTO `category_product` (`id`, `category_id`, `product_id`, `created_at`, `updated_at`) VALUES
(50, 24, 47, NULL, NULL),
(51, 25, 48, NULL, NULL),
(52, 25, 49, NULL, NULL),
(53, 25, 50, NULL, NULL),
(54, 25, 51, NULL, NULL),
(55, 25, 52, NULL, NULL),
(56, 25, 53, NULL, NULL),
(57, 26, 54, NULL, NULL),
(58, 26, 55, NULL, NULL),
(59, 26, 56, NULL, NULL),
(60, 26, 57, NULL, NULL),
(61, 26, 58, NULL, NULL),
(62, 26, 59, NULL, NULL),
(63, 27, 60, NULL, NULL),
(64, 27, 61, NULL, NULL),
(65, 27, 62, NULL, NULL),
(66, 27, 63, NULL, NULL),
(67, 27, 64, NULL, NULL),
(68, 28, 65, NULL, NULL),
(69, 28, 66, NULL, NULL),
(70, 28, 67, NULL, NULL),
(71, 28, 68, NULL, NULL),
(72, 28, 69, NULL, NULL),
(73, 29, 70, NULL, NULL),
(74, 29, 71, NULL, NULL),
(75, 29, 72, NULL, NULL),
(76, 29, 73, NULL, NULL),
(77, 28, 74, NULL, NULL),
(78, 25, 74, NULL, NULL),
(79, 26, 75, NULL, NULL),
(80, 28, 75, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `failed_jobs`
--

INSERT INTO `failed_jobs` (`id`, `uuid`, `connection`, `queue`, `payload`, `exception`, `failed_at`) VALUES
(1, '387f3c3d-0011-49ff-9125-bee13069bca1', 'database', 'default', '{\"uuid\":\"387f3c3d-0011-49ff-9125-bee13069bca1\",\"displayName\":\"App\\\\Mail\\\\LoginOtpMail\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"failOnTimeout\":false,\"backoff\":null,\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"Illuminate\\\\Mail\\\\SendQueuedMailable\",\"command\":\"O:34:\\\"Illuminate\\\\Mail\\\\SendQueuedMailable\\\":17:{s:8:\\\"mailable\\\";O:21:\\\"App\\\\Mail\\\\LoginOtpMail\\\":3:{s:3:\\\"otp\\\";s:6:\\\"831233\\\";s:2:\\\"to\\\";a:1:{i:0;a:2:{s:4:\\\"name\\\";N;s:7:\\\"address\\\";s:20:\\\"sulkerkiwe@gmail.com\\\";}}s:6:\\\"mailer\\\";s:4:\\\"smtp\\\";}s:5:\\\"tries\\\";N;s:7:\\\"timeout\\\";N;s:13:\\\"maxExceptions\\\";N;s:17:\\\"shouldBeEncrypted\\\";b:0;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:12:\\\"messageGroup\\\";N;s:12:\\\"deduplicator\\\";N;s:5:\\\"delay\\\";N;s:11:\\\"afterCommit\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:19:\\\"chainCatchCallbacks\\\";N;s:3:\\\"job\\\";N;}\",\"batchId\":null},\"createdAt\":1783612334,\"delay\":null}', 'Symfony\\Component\\Mailer\\Exception\\TransportException: Connection could not be established with host \"smtp.gmail.com:587\": stream_socket_client(): php_network_getaddresses: getaddrinfo for smtp.gmail.com failed: No such host is known.  in C:\\laragon\\www\\cashier_toko7\\vendor\\symfony\\mailer\\Transport\\Smtp\\Stream\\SocketStream.php:154\nStack trace:\n#0 [internal function]: Symfony\\Component\\Mailer\\Transport\\Smtp\\Stream\\SocketStream->Symfony\\Component\\Mailer\\Transport\\Smtp\\Stream\\{closure}(2, \'stream_socket_c...\', \'C:\\\\laragon\\\\www\\\\...\', 157)\n#1 C:\\laragon\\www\\cashier_toko7\\vendor\\symfony\\mailer\\Transport\\Smtp\\Stream\\SocketStream.php(157): stream_socket_client(\'smtp.gmail.com:...\', 0, \'\', 60.0, 4, Resource id #902)\n#2 C:\\laragon\\www\\cashier_toko7\\vendor\\symfony\\mailer\\Transport\\Smtp\\SmtpTransport.php(268): Symfony\\Component\\Mailer\\Transport\\Smtp\\Stream\\SocketStream->initialize()\n#3 C:\\laragon\\www\\cashier_toko7\\vendor\\symfony\\mailer\\Transport\\Smtp\\SmtpTransport.php(200): Symfony\\Component\\Mailer\\Transport\\Smtp\\SmtpTransport->start()\n#4 C:\\laragon\\www\\cashier_toko7\\vendor\\symfony\\mailer\\Transport\\AbstractTransport.php(69): Symfony\\Component\\Mailer\\Transport\\Smtp\\SmtpTransport->doSend(Object(Symfony\\Component\\Mailer\\SentMessage))\n#5 C:\\laragon\\www\\cashier_toko7\\vendor\\symfony\\mailer\\Transport\\Smtp\\SmtpTransport.php(138): Symfony\\Component\\Mailer\\Transport\\AbstractTransport->send(Object(Symfony\\Component\\Mime\\Email), Object(Symfony\\Component\\Mailer\\DelayedEnvelope))\n#6 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Mail\\Mailer.php(584): Symfony\\Component\\Mailer\\Transport\\Smtp\\SmtpTransport->send(Object(Symfony\\Component\\Mime\\Email), Object(Symfony\\Component\\Mailer\\DelayedEnvelope))\n#7 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Mail\\Mailer.php(331): Illuminate\\Mail\\Mailer->sendSymfonyMessage(Object(Symfony\\Component\\Mime\\Email))\n#8 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Mail\\Mailable.php(207): Illuminate\\Mail\\Mailer->send(\'emails.login-ot...\', Array, Object(Closure))\n#9 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Support\\Traits\\Localizable.php(19): Illuminate\\Mail\\Mailable->Illuminate\\Mail\\{closure}()\n#10 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Mail\\Mailable.php(200): Illuminate\\Mail\\Mailable->withLocale(NULL, Object(Closure))\n#11 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Mail\\SendQueuedMailable.php(82): Illuminate\\Mail\\Mailable->send(Object(Illuminate\\Mail\\MailManager))\n#12 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(36): Illuminate\\Mail\\SendQueuedMailable->handle(Object(Illuminate\\Mail\\MailManager))\n#13 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Util.php(43): Illuminate\\Container\\BoundMethod::Illuminate\\Container\\{closure}()\n#14 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(96): Illuminate\\Container\\Util::unwrapIfClosure(Object(Closure))\n#15 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(35): Illuminate\\Container\\BoundMethod::callBoundMethod(Object(Illuminate\\Foundation\\Application), Array, Object(Closure))\n#16 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Container.php(799): Illuminate\\Container\\BoundMethod::call(Object(Illuminate\\Foundation\\Application), Array, Array, NULL)\n#17 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Bus\\Dispatcher.php(129): Illuminate\\Container\\Container->call(Array)\n#18 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(180): Illuminate\\Bus\\Dispatcher->Illuminate\\Bus\\{closure}(Object(Illuminate\\Mail\\SendQueuedMailable))\n#19 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(137): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Mail\\SendQueuedMailable))\n#20 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Bus\\Dispatcher.php(133): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#21 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\CallQueuedHandler.php(136): Illuminate\\Bus\\Dispatcher->dispatchNow(Object(Illuminate\\Mail\\SendQueuedMailable), false)\n#22 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(180): Illuminate\\Queue\\CallQueuedHandler->Illuminate\\Queue\\{closure}(Object(Illuminate\\Mail\\SendQueuedMailable))\n#23 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php(137): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Mail\\SendQueuedMailable))\n#24 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\CallQueuedHandler.php(129): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#25 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\CallQueuedHandler.php(70): Illuminate\\Queue\\CallQueuedHandler->dispatchThroughMiddleware(Object(Illuminate\\Queue\\Jobs\\DatabaseJob), Object(Illuminate\\Mail\\SendQueuedMailable))\n#26 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Jobs\\Job.php(102): Illuminate\\Queue\\CallQueuedHandler->call(Object(Illuminate\\Queue\\Jobs\\DatabaseJob), Array)\n#27 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php(485): Illuminate\\Queue\\Jobs\\Job->fire()\n#28 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php(435): Illuminate\\Queue\\Worker->process(\'database\', Object(Illuminate\\Queue\\Jobs\\DatabaseJob), Object(Illuminate\\Queue\\WorkerOptions))\n#29 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Worker.php(358): Illuminate\\Queue\\Worker->runJob(Object(Illuminate\\Queue\\Jobs\\DatabaseJob), \'database\', Object(Illuminate\\Queue\\WorkerOptions))\n#30 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Console\\WorkCommand.php(148): Illuminate\\Queue\\Worker->runNextJob(\'database\', \'default\', Object(Illuminate\\Queue\\WorkerOptions))\n#31 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Queue\\Console\\WorkCommand.php(131): Illuminate\\Queue\\Console\\WorkCommand->runWorker(\'database\', \'default\')\n#32 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(36): Illuminate\\Queue\\Console\\WorkCommand->handle()\n#33 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Util.php(43): Illuminate\\Container\\BoundMethod::Illuminate\\Container\\{closure}()\n#34 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(96): Illuminate\\Container\\Util::unwrapIfClosure(Object(Closure))\n#35 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php(35): Illuminate\\Container\\BoundMethod::callBoundMethod(Object(Illuminate\\Foundation\\Application), Array, Object(Closure))\n#36 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Container.php(799): Illuminate\\Container\\BoundMethod::call(Object(Illuminate\\Foundation\\Application), Array, Array, NULL)\n#37 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php(211): Illuminate\\Container\\Container->call(Array)\n#38 C:\\laragon\\www\\cashier_toko7\\vendor\\symfony\\console\\Command\\Command.php(341): Illuminate\\Console\\Command->execute(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#39 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php(180): Symfony\\Component\\Console\\Command\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#40 C:\\laragon\\www\\cashier_toko7\\vendor\\symfony\\console\\Application.php(1117): Illuminate\\Console\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#41 C:\\laragon\\www\\cashier_toko7\\vendor\\symfony\\console\\Application.php(356): Symfony\\Component\\Console\\Application->doRunCommand(Object(Illuminate\\Queue\\Console\\WorkCommand), Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#42 C:\\laragon\\www\\cashier_toko7\\vendor\\symfony\\console\\Application.php(195): Symfony\\Component\\Console\\Application->doRun(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#43 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Console\\Kernel.php(198): Symfony\\Component\\Console\\Application->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#44 C:\\laragon\\www\\cashier_toko7\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Application.php(1235): Illuminate\\Foundation\\Console\\Kernel->handle(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#45 C:\\laragon\\www\\cashier_toko7\\artisan(16): Illuminate\\Foundation\\Application->handleCommand(Object(Symfony\\Component\\Console\\Input\\ArgvInput))\n#46 {main}', '2026-07-09 08:52:28');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `queue`, `payload`, `attempts`, `reserved_at`, `available_at`, `created_at`) VALUES
(7, 'default', '{\"uuid\":\"d7afb90c-f202-43e4-9982-ad161cacd49c\",\"displayName\":\"App\\\\Mail\\\\LoginOtpMail\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"failOnTimeout\":false,\"backoff\":null,\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"Illuminate\\\\Mail\\\\SendQueuedMailable\",\"command\":\"O:34:\\\"Illuminate\\\\Mail\\\\SendQueuedMailable\\\":17:{s:8:\\\"mailable\\\";O:21:\\\"App\\\\Mail\\\\LoginOtpMail\\\":3:{s:3:\\\"otp\\\";s:6:\\\"515229\\\";s:2:\\\"to\\\";a:1:{i:0;a:2:{s:4:\\\"name\\\";N;s:7:\\\"address\\\";s:27:\\\"ngomongapasampean@gmail.com\\\";}}s:6:\\\"mailer\\\";s:4:\\\"smtp\\\";}s:5:\\\"tries\\\";N;s:7:\\\"timeout\\\";N;s:13:\\\"maxExceptions\\\";N;s:17:\\\"shouldBeEncrypted\\\";b:0;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:12:\\\"messageGroup\\\";N;s:12:\\\"deduplicator\\\";N;s:5:\\\"delay\\\";N;s:11:\\\"afterCommit\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:19:\\\"chainCatchCallbacks\\\";N;s:3:\\\"job\\\";N;}\",\"batchId\":null},\"createdAt\":1783722517,\"delay\":null}', 0, NULL, 1783722517, 1783722517),
(8, 'default', '{\"uuid\":\"6439a11d-8e78-4312-bc6c-bc6453b3a22c\",\"displayName\":\"App\\\\Mail\\\\LoginOtpMail\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"failOnTimeout\":false,\"backoff\":null,\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"Illuminate\\\\Mail\\\\SendQueuedMailable\",\"command\":\"O:34:\\\"Illuminate\\\\Mail\\\\SendQueuedMailable\\\":17:{s:8:\\\"mailable\\\";O:21:\\\"App\\\\Mail\\\\LoginOtpMail\\\":3:{s:3:\\\"otp\\\";s:6:\\\"482812\\\";s:2:\\\"to\\\";a:1:{i:0;a:2:{s:4:\\\"name\\\";N;s:7:\\\"address\\\";s:20:\\\"sulkerkiwe@gmail.com\\\";}}s:6:\\\"mailer\\\";s:4:\\\"smtp\\\";}s:5:\\\"tries\\\";N;s:7:\\\"timeout\\\";N;s:13:\\\"maxExceptions\\\";N;s:17:\\\"shouldBeEncrypted\\\";b:0;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:12:\\\"messageGroup\\\";N;s:12:\\\"deduplicator\\\";N;s:5:\\\"delay\\\";N;s:11:\\\"afterCommit\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:19:\\\"chainCatchCallbacks\\\";N;s:3:\\\"job\\\";N;}\",\"batchId\":null},\"createdAt\":1783722570,\"delay\":null}', 0, NULL, 1783722570, 1783722570),
(9, 'default', '{\"uuid\":\"53b27fff-57a9-467b-9e7f-3056345aa990\",\"displayName\":\"App\\\\Mail\\\\LoginOtpMail\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"failOnTimeout\":false,\"backoff\":null,\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"Illuminate\\\\Mail\\\\SendQueuedMailable\",\"command\":\"O:34:\\\"Illuminate\\\\Mail\\\\SendQueuedMailable\\\":17:{s:8:\\\"mailable\\\";O:21:\\\"App\\\\Mail\\\\LoginOtpMail\\\":3:{s:3:\\\"otp\\\";s:6:\\\"452796\\\";s:2:\\\"to\\\";a:1:{i:0;a:2:{s:4:\\\"name\\\";N;s:7:\\\"address\\\";s:20:\\\"sulkerkiwe@gmail.com\\\";}}s:6:\\\"mailer\\\";s:4:\\\"smtp\\\";}s:5:\\\"tries\\\";N;s:7:\\\"timeout\\\";N;s:13:\\\"maxExceptions\\\";N;s:17:\\\"shouldBeEncrypted\\\";b:0;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:12:\\\"messageGroup\\\";N;s:12:\\\"deduplicator\\\";N;s:5:\\\"delay\\\";N;s:11:\\\"afterCommit\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:19:\\\"chainCatchCallbacks\\\";N;s:3:\\\"job\\\";N;}\",\"batchId\":null},\"createdAt\":1783722655,\"delay\":null}', 0, NULL, 1783722655, 1783722655);

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_05_13_113659_create_roles_table', 1),
(5, '2026_05_13_114015_add_role_id_to_users_table', 1),
(6, '2026_05_13_122407_add_display_id_to_users_table', 1),
(7, '2026_07_05_234158_add_avatar_to_users_table', 1),
(8, '2026_07_06_005437_create_categories_table', 1),
(9, '2026_07_06_005439_create_products_table', 1),
(10, '2026_07_06_014419_create_category_product_table', 1),
(11, '2026_07_09_150016_create_transactions_table', 2),
(12, '2026_07_09_150017_create_transaction_items_table', 2),
(13, '2026_07_09_192632_add_cost_and_profit_to_tables', 3),
(14, '2026_07_10_044521_create_attendances_table', 4),
(15, '2026_07_31_161032_add_deleted_at_to_users_table', 5),
(16, '2026_08_03_130134_create_permission_tables', 6),
(17, '2026_08_03_133752_add_warehouse_columns_to_products_table', 7),
(18, '2026_08_03_134033_create_stock_transfers_table', 7),
(19, '2026_08_05_015336_create_activity_logs_table', 8);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1),
(2, 'App\\Models\\User', 6),
(3, 'App\\Models\\User', 6);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sku` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(15,2) NOT NULL,
  `cost_price` decimal(15,2) NOT NULL DEFAULT '0.00' COMMENT 'Harga beli/modal',
  `stock` int NOT NULL DEFAULT '0',
  `warehouse_stock` int NOT NULL DEFAULT '0',
  `warehouse_unit` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `store_unit` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `conversion_rate` int NOT NULL DEFAULT '1',
  `image_path` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `sku`, `price`, `cost_price`, `stock`, `warehouse_stock`, `warehouse_unit`, `store_unit`, `conversion_rate`, `image_path`, `created_at`, `updated_at`) VALUES
(47, 'MI ayam', 'SKU-ZTXQZ223', '2500.00', '0.00', 169, 46, NULL, NULL, 40, NULL, '2026-08-03 07:17:28', '2026-08-04 19:23:03'),
(48, 'Samyang Carbonara', 'SKU-BZJE393', '22000.00', '0.00', 0, 37, 'Dus', 'Pcs', 24, NULL, '2026-08-04 20:13:15', '2026-08-05 03:45:53'),
(49, 'Indomie Soto Mie', 'SKU-ZIPA949', '2900.00', '0.00', 150, 30, 'Dus', 'Pcs', 15, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(50, 'Bihunku Ayam Bawang', 'SKU-G3WA716', '3500.00', '0.00', 40, 7, 'Dus', 'Pcs', 22, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(51, 'Lemonilo Mie Goreng', 'SKU-XB74538', '6500.00', '0.00', 30, 48, 'Dus', 'Pcs', 23, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(52, 'ABC Sambal Asli 135ml', 'SKU-CMDY436', '7000.00', '0.00', 25, 37, 'Dus', 'Pcs', 14, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(53, 'Kecap Bango 220ml', 'SKU-HTAY542', '12500.00', '0.00', 50, 6, 'Dus', 'Pcs', 18, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(54, 'Nescafe Original 240ml', 'SKU-6TO7094', '7500.00', '0.00', 45, 24, 'Dus', 'Pcs', 18, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(55, 'Ultra Milk Coklat 250ml', 'SKU-TQVJ512', '6000.00', '0.00', 80, 7, 'Dus', 'Pcs', 23, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(56, 'Mizone Active 500ml', 'SKU-TCK7886', '5500.00', '0.00', 60, 38, 'Dus', 'Pcs', 13, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(57, 'Kopiko 78c Coffee Latte', 'SKU-BFVB357', '7000.00', '0.00', 35, 34, 'Dus', 'Pcs', 23, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(58, 'Le Minerale 600ml', 'SKU-QMLX801', '3500.00', '0.00', 120, 21, 'Dus', 'Pcs', 18, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(59, 'Yakult (Isi 5)', 'SKU-A3X3966', '10500.00', '0.00', 40, 34, 'Dus', 'Pcs', 12, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(60, 'SunSilk Soft & Smooth 170ml', 'SKU-EWU1676', '23000.00', '0.00', 20, 15, 'Dus', 'Pcs', 23, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(61, 'Rexona Men Roll On 45ml', 'SKU-F0KJ685', '17500.00', '0.00', 30, 17, 'Dus', 'Pcs', 13, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(62, 'Gatsby Styling Pomade', 'SKU-HN0P871', '28000.00', '0.00', 0, 20, 'Dus', 'Pcs', 24, NULL, '2026-08-04 20:13:15', '2026-08-05 03:47:42'),
(63, 'Nuvo Sabun Batang Merah', 'SKU-7MJI458', '4500.00', '0.00', 80, 8, 'Dus', 'Pcs', 20, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(64, 'Head & Shoulders Menthol 160ml', 'SKU-TKHJ793', '25500.00', '0.00', 25, 6, 'Dus', 'Pcs', 24, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(65, 'Doritos Nacho Cheese', 'SKU-SQII436', '12000.00', '0.00', 45, 47, 'Dus', 'Pcs', 20, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(66, 'Pringles Original 107g', 'SKU-11Q0268', '21000.00', '0.00', 20, 40, 'Dus', 'Pcs', 18, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(67, 'Yupi Gummy Bears', 'SKU-SUUX418', '4000.00', '0.00', 90, 32, 'Dus', 'Pcs', 23, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(68, 'Chupa Chups Lolly', 'SKU-KWVS334', '1500.00', '0.00', 150, 27, 'Dus', 'Pcs', 24, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(69, 'Biskuat Cokelat', 'SKU-FYRH561', '2500.00', '0.00', 100, 5, 'Dus', 'Pcs', 22, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(70, 'Sunlight Jeruk Nipis 755ml', 'SKU-AVBM951', '17500.00', '0.00', 35, 29, 'Dus', 'Pcs', 14, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(71, 'Baygon Aerosol 600ml', 'SKU-ONKQ881', '35000.00', '0.00', 33, 28, 'Dus', 'Pcs', 13, NULL, '2026-08-04 20:13:15', '2026-08-05 03:50:38'),
(72, 'Rinso Anti Noda 770g', 'SKU-EP7S574', '23000.00', '0.00', 25, 5, 'Dus', 'Pcs', 13, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(73, 'Super Pel Pembersih Lantai 770ml', 'SKU-R283337', '14500.00', '0.00', 30, 30, 'Dus', 'Pcs', 15, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(74, 'Makaroni BonCabe Level 15', 'SKU-GLYI056', '9500.00', '0.00', 40, 16, 'Dus', 'Pcs', 16, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15'),
(75, 'Milo Cereal Combo Pack', 'SKU-WBDQ990', '12500.00', '0.00', 25, 38, 'Dus', 'Pcs', 13, NULL, '2026-08-04 20:13:15', '2026-08-04 20:13:15');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'web', '2026-08-03 06:04:44', '2026-08-03 06:22:26'),
(2, 'Kasir', 'web', '2026-08-03 06:04:44', '2026-08-03 06:04:44'),
(3, 'Inventaris', 'web', '2026-08-03 06:04:44', '2026-08-03 06:04:44');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint UNSIGNED NOT NULL,
  `role_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('4XWZ6URpeZD4klK71KbLVtxFOacK1mqlSVhuDpX8', 6, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoic0xLS0dheVRqcUh2VTF2dld6RGo5bWdtYTZpMzA2b2FXeTNlNThqZCI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6NjtzOjk6Il9wcmV2aW91cyI7YToyOntzOjM6InVybCI7czozMjoiaHR0cDovL2Nhc2hpZXJfdG9rbzcudGVzdC9wcm9kdWsiO3M6NToicm91dGUiO3M6MTI6InByb2R1ay5pbmRleCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1789574138),
('5kyTbdJGyM5ap0kwqIwPOKqlLDmCxRUSAZVTxuVz', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiczVTVmdkNnBSQ2tJbVdrcEZDOTRoM2N4RkliRnA2Vkk1Z1ptQ0MyYiI7czozOiJ1cmwiO2E6MDp7fXM6OToiX3ByZXZpb3VzIjthOjI6e3M6MzoidXJsIjtzOjMxOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvZGFzaGJvYXJkIjtzOjU6InJvdXRlIjtzOjk6ImRhc2hib2FyZCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7fQ==', 1789574138),
('XYFv1eGoXPpMBe3n7NES1vNBQftD1z3SbN9iB2B1', 6, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiMm1tVTd4Smg2Qm5rUzVGWklZNTVPdEVMQkVzZ0hUTTJ5ak9xSGVwWCI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6NjtzOjk6Il9wcmV2aW91cyI7YToyOntzOjM6InVybCI7czozMjoiaHR0cDovL2Nhc2hpZXJfdG9rbzcudGVzdC9wcm9kdWsiO3M6NToicm91dGUiO3M6MTI6InByb2R1ay5pbmRleCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1789479391),
('zhdrCV3EQRyTFuL9XczbHlBZloXxXUQOuQOdTcR0', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiczBHNUROdnFGZWFuTXkzS2VLOElEQlFUeklnNUZxY2FWTnFrdlZZaSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTtzOjk6Il9wcmV2aW91cyI7YToyOntzOjM6InVybCI7czozMToiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2Rhc2hib2FyZCI7czo1OiJyb3V0ZSI7czo5OiJkYXNoYm9hcmQiO319', 1789480288);

-- --------------------------------------------------------

--
-- Table structure for table `stock_transfers`
--

CREATE TABLE `stock_transfers` (
  `id` bigint UNSIGNED NOT NULL,
  `product_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `qty_deducted` int NOT NULL,
  `qty_added` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `stock_transfers`
--

INSERT INTO `stock_transfers` (`id`, `product_id`, `user_id`, `qty_deducted`, `qty_added`, `created_at`, `updated_at`) VALUES
(1, 47, 1, 3, 120, '2026-08-03 07:18:17', '2026-08-03 07:18:17'),
(2, 47, 1, 1, 40, '2026-08-04 19:05:57', '2026-08-04 19:05:57'),
(3, 47, 1, 3, 120, '2026-07-06 03:22:34', '2026-07-06 03:22:34'),
(4, 47, 1, 2, 80, '2026-07-06 02:12:34', '2026-07-06 02:12:34'),
(5, 47, 1, 2, 80, '2026-07-07 05:15:34', '2026-07-07 05:15:34'),
(6, 47, 1, 2, 80, '2026-07-09 03:28:34', '2026-07-09 03:28:34'),
(7, 47, 1, 3, 120, '2026-07-09 03:46:34', '2026-07-09 03:46:34'),
(8, 47, 1, 3, 120, '2026-07-10 05:48:34', '2026-07-10 05:48:34'),
(9, 47, 1, 1, 40, '2026-07-12 03:24:34', '2026-07-12 03:24:34'),
(10, 47, 1, 2, 80, '2026-07-12 03:22:34', '2026-07-12 03:22:34'),
(11, 47, 1, 1, 40, '2026-07-13 03:36:34', '2026-07-13 03:36:34'),
(12, 47, 1, 1, 40, '2026-07-13 01:09:34', '2026-07-13 01:09:34'),
(13, 47, 1, 3, 120, '2026-07-14 04:33:34', '2026-07-14 04:33:34'),
(14, 47, 1, 1, 40, '2026-07-17 03:59:34', '2026-07-17 03:59:34'),
(15, 47, 1, 1, 40, '2026-07-17 02:15:34', '2026-07-17 02:15:34'),
(16, 47, 1, 2, 80, '2026-07-18 01:13:34', '2026-07-18 01:13:34'),
(17, 47, 1, 2, 80, '2026-07-19 02:11:34', '2026-07-19 02:11:34'),
(18, 47, 1, 2, 80, '2026-07-20 04:52:34', '2026-07-20 04:52:34'),
(19, 47, 1, 1, 40, '2026-07-20 03:30:34', '2026-07-20 03:30:34'),
(20, 47, 1, 2, 80, '2026-07-21 05:06:34', '2026-07-21 05:06:34'),
(21, 47, 1, 1, 40, '2026-07-21 04:39:34', '2026-07-21 04:39:34'),
(22, 47, 1, 3, 120, '2026-07-23 01:58:34', '2026-07-23 01:58:34'),
(23, 47, 1, 1, 40, '2026-07-23 05:17:34', '2026-07-23 05:17:34'),
(24, 47, 1, 3, 120, '2026-07-25 01:10:34', '2026-07-25 01:10:34'),
(25, 47, 1, 1, 40, '2026-07-25 05:44:34', '2026-07-25 05:44:34'),
(26, 47, 1, 2, 80, '2026-07-26 05:32:34', '2026-07-26 05:32:34'),
(27, 47, 1, 2, 80, '2026-07-26 01:36:34', '2026-07-26 01:36:34'),
(28, 47, 1, 2, 80, '2026-07-27 02:40:34', '2026-07-27 02:40:34'),
(29, 47, 1, 3, 120, '2026-07-28 05:29:34', '2026-07-28 05:29:34'),
(30, 47, 1, 2, 80, '2026-07-29 02:21:34', '2026-07-29 02:21:34'),
(31, 47, 1, 1, 40, '2026-07-30 02:59:34', '2026-07-30 02:59:34'),
(32, 47, 1, 1, 40, '2026-08-01 04:43:34', '2026-08-01 04:43:34'),
(33, 47, 1, 3, 120, '2026-08-02 04:42:34', '2026-08-02 04:42:34'),
(34, 47, 1, 2, 80, '2026-08-02 01:23:34', '2026-08-02 01:23:34'),
(35, 47, 1, 3, 120, '2026-08-04 02:31:34', '2026-08-04 02:31:34'),
(36, 47, 1, 3, 120, '2026-08-05 03:08:34', '2026-08-05 03:08:34'),
(37, 71, 1, 4, 52, '2026-08-05 03:50:05', '2026-08-05 03:50:05');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` bigint UNSIGNED NOT NULL,
  `invoice_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `total_amount` decimal(12,2) NOT NULL,
  `cash_given` decimal(12,2) DEFAULT NULL,
  `change_amount` decimal(12,2) DEFAULT NULL,
  `payment_method` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'cash',
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'completed',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `invoice_number`, `user_id`, `total_amount`, `cash_given`, `change_amount`, `payment_method`, `status`, `created_at`, `updated_at`) VALUES
(1, 'INV-20260708-3724', 1, '7200.00', '50000.00', '42800.00', 'cash', 'completed', '2026-07-07 21:10:29', '2026-07-09 21:08:40'),
(2, 'INV-20260708-4212', 1, '7200.00', '50000.00', '42800.00', 'cash', 'completed', '2026-07-07 21:10:29', '2026-07-09 21:08:40'),
(3, 'INV-20260708-2421', 1, '12400.00', '50000.00', '37600.00', 'cash', 'completed', '2026-07-07 21:10:29', '2026-07-09 21:08:40'),
(4, 'INV-20260708-2346', 1, '13600.00', '50000.00', '36400.00', 'cash', 'completed', '2026-07-07 21:10:29', '2026-07-09 21:08:40'),
(5, 'INV-20260709-5114', 1, '8400.00', '100000.00', '91600.00', 'cash', 'completed', '2026-07-08 21:10:29', '2026-07-09 21:08:40'),
(6, 'INV-20260709-3652', 1, '5200.00', '100000.00', '94800.00', 'cash', 'completed', '2026-07-08 21:10:29', '2026-07-09 21:08:40'),
(7, 'INV-20260709-6783', 1, '5200.00', '100000.00', '94800.00', 'cash', 'completed', '2026-07-08 21:10:29', '2026-07-09 21:08:40'),
(17, 'INV-20260714-4Y1DF', 1, '2000.00', '2000.00', '0.00', 'cash', 'completed', '2026-07-13 17:11:49', '2026-07-13 17:11:49'),
(18, 'INV-20260714-1NTQ1', 1, '2000.00', '2000.00', '0.00', 'cash', 'completed', '2026-07-13 17:54:39', '2026-07-13 17:54:39'),
(19, 'INV-20260714-5VPGE', 1, '14000.00', '20000.00', '6000.00', 'cash', 'completed', '2026-07-13 20:23:00', '2026-07-13 20:23:00'),
(20, 'INV-20260714-8LNTM', 1, '10500.00', '20000.00', '9500.00', 'cash', 'completed', '2026-07-14 09:26:23', '2026-07-14 09:26:23'),
(21, 'INV-20260803-1YBUY', 6, '3500.00', '3500.00', '0.00', 'cash', 'completed', '2026-08-03 06:24:17', '2026-08-03 06:24:17'),
(22, 'INV-20260805-CQLMX', 1, '2500.00', '2500.00', '0.00', 'cash', 'completed', '2026-08-04 19:23:03', '2026-08-04 19:23:03'),
(46, 'INV-20260706-IU2MF', 1, '2500.00', '52235.00', '0.00', 'cash', 'completed', '2026-07-06 01:58:38', '2026-07-06 01:58:38'),
(47, 'INV-20260706-C6AVK', 1, '7500.00', '30722.00', '0.00', 'cash', 'completed', '2026-07-06 03:03:15', '2026-07-06 03:03:15'),
(48, 'INV-20260706-T4FKD', 1, '7500.00', '17471.00', '0.00', 'cash', 'completed', '2026-07-06 06:54:08', '2026-07-06 06:54:08'),
(49, 'INV-20260706-E7BDV', 6, '5000.00', '39965.00', '0.00', 'cash', 'completed', '2026-07-06 09:19:12', '2026-07-06 09:19:12'),
(50, 'INV-20260706-UT67W', 6, '2500.00', '8313.00', '0.00', 'cash', 'completed', '2026-07-06 02:41:48', '2026-07-06 02:41:48'),
(51, 'INV-20260706-7QZOA', 6, '7500.00', '35165.00', '0.00', 'cash', 'completed', '2026-07-06 10:57:54', '2026-07-06 10:57:54'),
(52, 'INV-20260706-L4RZL', 6, '7500.00', '24215.00', '0.00', 'cash', 'completed', '2026-07-06 02:50:31', '2026-07-06 02:50:31'),
(53, 'INV-20260706-Z5WNE', 6, '7500.00', '39981.00', '0.00', 'cash', 'completed', '2026-07-06 09:09:54', '2026-07-06 09:09:54'),
(54, 'INV-20260706-BZBT4', 6, '7500.00', '38948.00', '0.00', 'cash', 'completed', '2026-07-06 11:53:38', '2026-07-06 11:53:38'),
(55, 'INV-20260706-EONQM', 6, '2500.00', '36780.00', '0.00', 'cash', 'completed', '2026-07-06 06:07:36', '2026-07-06 06:07:36'),
(56, 'INV-20260706-VYCB2', 1, '7500.00', '48594.00', '0.00', 'cash', 'completed', '2026-07-06 09:38:02', '2026-07-06 09:38:02'),
(57, 'INV-20260706-YDZRR', 6, '5000.00', '38002.00', '0.00', 'cash', 'completed', '2026-07-06 08:39:20', '2026-07-06 08:39:20'),
(58, 'INV-20260706-MFHY2', 6, '5000.00', '34156.00', '0.00', 'cash', 'completed', '2026-07-06 12:37:13', '2026-07-06 12:37:13'),
(59, 'INV-20260707-PKVJZ', 6, '5000.00', '44131.00', '0.00', 'cash', 'completed', '2026-07-07 13:51:41', '2026-07-07 13:51:41'),
(60, 'INV-20260707-SA967', 6, '5000.00', '5968.00', '0.00', 'cash', 'completed', '2026-07-07 03:13:18', '2026-07-07 03:13:18'),
(61, 'INV-20260707-1LUZJ', 6, '2500.00', '31562.00', '0.00', 'cash', 'completed', '2026-07-07 02:38:28', '2026-07-07 02:38:28'),
(62, 'INV-20260707-ORAHL', 1, '7500.00', '13365.00', '0.00', 'cash', 'completed', '2026-07-07 04:23:02', '2026-07-07 04:23:02'),
(63, 'INV-20260707-G0WI5', 6, '2500.00', '31112.00', '0.00', 'cash', 'completed', '2026-07-07 05:34:35', '2026-07-07 05:34:35'),
(64, 'INV-20260707-BTXN4', 6, '7500.00', '45893.00', '0.00', 'cash', 'completed', '2026-07-07 03:49:58', '2026-07-07 03:49:58'),
(65, 'INV-20260707-S97PY', 6, '5000.00', '30782.00', '0.00', 'cash', 'completed', '2026-07-07 13:59:36', '2026-07-07 13:59:36'),
(66, 'INV-20260707-DBSDK', 6, '7500.00', '13241.00', '0.00', 'cash', 'completed', '2026-07-07 03:53:00', '2026-07-07 03:53:00'),
(67, 'INV-20260707-MPW90', 6, '5000.00', '51140.00', '0.00', 'cash', 'completed', '2026-07-07 06:05:36', '2026-07-07 06:05:36'),
(68, 'INV-20260707-NG2SQ', 6, '5000.00', '14581.00', '0.00', 'cash', 'completed', '2026-07-07 10:53:23', '2026-07-07 10:53:23'),
(69, 'INV-20260707-CKHWQ', 1, '7500.00', '17874.00', '0.00', 'cash', 'completed', '2026-07-07 04:18:57', '2026-07-07 04:18:57'),
(70, 'INV-20260707-CARCP', 1, '2500.00', '28802.00', '0.00', 'cash', 'completed', '2026-07-07 04:26:21', '2026-07-07 04:26:21'),
(71, 'INV-20260708-TTI7Q', 6, '7500.00', '57386.00', '0.00', 'cash', 'completed', '2026-07-08 12:23:18', '2026-07-08 12:23:18'),
(72, 'INV-20260708-TDRVK', 1, '2500.00', '39644.00', '0.00', 'cash', 'completed', '2026-07-08 06:53:22', '2026-07-08 06:53:22'),
(73, 'INV-20260708-8P5UZ', 6, '7500.00', '17465.00', '0.00', 'cash', 'completed', '2026-07-08 14:07:10', '2026-07-08 14:07:10'),
(74, 'INV-20260708-4PRHX', 6, '7500.00', '49658.00', '0.00', 'cash', 'completed', '2026-07-08 07:02:22', '2026-07-08 07:02:22'),
(75, 'INV-20260708-2AK8X', 1, '5000.00', '42693.00', '0.00', 'cash', 'completed', '2026-07-08 05:48:10', '2026-07-08 05:48:10'),
(76, 'INV-20260708-U3XHG', 1, '2500.00', '47031.00', '0.00', 'cash', 'completed', '2026-07-08 13:52:13', '2026-07-08 13:52:13'),
(77, 'INV-20260709-KGZUI', 6, '2500.00', '11873.00', '0.00', 'cash', 'completed', '2026-07-09 14:33:23', '2026-07-09 14:33:23'),
(78, 'INV-20260709-YOJTJ', 1, '2500.00', '4011.00', '0.00', 'cash', 'completed', '2026-07-09 06:35:36', '2026-07-09 06:35:36'),
(79, 'INV-20260709-FTIA5', 1, '7500.00', '18753.00', '0.00', 'cash', 'completed', '2026-07-09 03:21:44', '2026-07-09 03:21:44'),
(80, 'INV-20260709-UJKCY', 6, '2500.00', '8530.00', '0.00', 'cash', 'completed', '2026-07-09 07:26:25', '2026-07-09 07:26:25'),
(81, 'INV-20260709-5292X', 6, '2500.00', '3211.00', '0.00', 'cash', 'completed', '2026-07-09 06:52:31', '2026-07-09 06:52:31'),
(82, 'INV-20260709-KV5RH', 6, '7500.00', '56257.00', '0.00', 'cash', 'completed', '2026-07-09 06:24:57', '2026-07-09 06:24:57'),
(83, 'INV-20260709-QUDT6', 6, '5000.00', '10332.00', '0.00', 'cash', 'completed', '2026-07-09 11:59:46', '2026-07-09 11:59:46'),
(84, 'INV-20260709-LM5RY', 6, '2500.00', '42492.00', '0.00', 'cash', 'completed', '2026-07-09 05:34:54', '2026-07-09 05:34:54'),
(85, 'INV-20260709-EFKXG', 6, '2500.00', '8707.00', '0.00', 'cash', 'completed', '2026-07-09 07:28:08', '2026-07-09 07:28:08'),
(86, 'INV-20260709-OBOA3', 6, '7500.00', '28819.00', '0.00', 'cash', 'completed', '2026-07-09 09:20:15', '2026-07-09 09:20:15'),
(87, 'INV-20260709-IVSEH', 1, '7500.00', '13664.00', '0.00', 'cash', 'completed', '2026-07-09 13:35:14', '2026-07-09 13:35:14'),
(88, 'INV-20260709-KLA3H', 1, '7500.00', '44290.00', '0.00', 'cash', 'completed', '2026-07-09 11:45:17', '2026-07-09 11:45:17'),
(89, 'INV-20260709-ND8PM', 1, '7500.00', '27648.00', '0.00', 'cash', 'completed', '2026-07-09 01:05:21', '2026-07-09 01:05:21'),
(90, 'INV-20260710-FBML7', 6, '5000.00', '6519.00', '0.00', 'cash', 'completed', '2026-07-10 14:13:05', '2026-07-10 14:13:05'),
(91, 'INV-20260710-GDHVL', 6, '5000.00', '41492.00', '0.00', 'cash', 'completed', '2026-07-10 02:36:44', '2026-07-10 02:36:44'),
(92, 'INV-20260710-5OARW', 1, '5000.00', '24713.00', '0.00', 'cash', 'completed', '2026-07-10 08:40:05', '2026-07-10 08:40:05'),
(93, 'INV-20260710-4TEKN', 6, '7500.00', '41301.00', '0.00', 'cash', 'completed', '2026-07-10 14:29:21', '2026-07-10 14:29:21'),
(94, 'INV-20260710-ES6QL', 1, '7500.00', '47644.00', '0.00', 'cash', 'completed', '2026-07-10 11:31:37', '2026-07-10 11:31:37'),
(95, 'INV-20260710-BU55C', 6, '7500.00', '11054.00', '0.00', 'cash', 'completed', '2026-07-10 09:58:27', '2026-07-10 09:58:27'),
(96, 'INV-20260710-TY3A1', 6, '2500.00', '28806.00', '0.00', 'cash', 'completed', '2026-07-10 05:04:24', '2026-07-10 05:04:24'),
(97, 'INV-20260710-SXBVR', 6, '2500.00', '47242.00', '0.00', 'cash', 'completed', '2026-07-10 12:12:43', '2026-07-10 12:12:43'),
(98, 'INV-20260710-ZZLA7', 6, '5000.00', '14582.00', '0.00', 'cash', 'completed', '2026-07-10 11:28:24', '2026-07-10 11:28:24'),
(99, 'INV-20260710-PNNP5', 6, '5000.00', '32075.00', '0.00', 'cash', 'completed', '2026-07-10 08:57:13', '2026-07-10 08:57:13'),
(100, 'INV-20260710-6YMIS', 1, '2500.00', '15370.00', '0.00', 'cash', 'completed', '2026-07-10 05:14:14', '2026-07-10 05:14:14'),
(101, 'INV-20260710-CXZWG', 1, '5000.00', '21074.00', '0.00', 'cash', 'completed', '2026-07-10 02:32:27', '2026-07-10 02:32:27'),
(102, 'INV-20260710-LYP5H', 6, '5000.00', '8814.00', '0.00', 'cash', 'completed', '2026-07-10 08:16:00', '2026-07-10 08:16:00'),
(103, 'INV-20260710-1HTZR', 1, '5000.00', '25217.00', '0.00', 'cash', 'completed', '2026-07-10 04:27:53', '2026-07-10 04:27:53'),
(104, 'INV-20260710-UKJW5', 1, '5000.00', '28836.00', '0.00', 'cash', 'completed', '2026-07-10 12:13:10', '2026-07-10 12:13:10'),
(105, 'INV-20260711-EZPDL', 6, '5000.00', '42910.00', '0.00', 'cash', 'completed', '2026-07-11 06:23:56', '2026-07-11 06:23:56'),
(106, 'INV-20260711-XB16H', 1, '5000.00', '14530.00', '0.00', 'cash', 'completed', '2026-07-11 10:00:47', '2026-07-11 10:00:47'),
(107, 'INV-20260711-OTBXS', 6, '7500.00', '43170.00', '0.00', 'cash', 'completed', '2026-07-11 02:09:33', '2026-07-11 02:09:33'),
(108, 'INV-20260711-ZCA2L', 6, '7500.00', '48268.00', '0.00', 'cash', 'completed', '2026-07-11 09:39:46', '2026-07-11 09:39:46'),
(109, 'INV-20260711-SL6LP', 1, '7500.00', '28963.00', '0.00', 'cash', 'completed', '2026-07-11 05:17:48', '2026-07-11 05:17:48'),
(110, 'INV-20260711-MZYVQ', 6, '2500.00', '27266.00', '0.00', 'cash', 'completed', '2026-07-11 01:51:00', '2026-07-11 01:51:00'),
(111, 'INV-20260711-JHWLH', 6, '5000.00', '45571.00', '0.00', 'cash', 'completed', '2026-07-11 13:37:36', '2026-07-11 13:37:36'),
(112, 'INV-20260711-NKWSJ', 6, '5000.00', '50144.00', '0.00', 'cash', 'completed', '2026-07-11 06:09:56', '2026-07-11 06:09:56'),
(113, 'INV-20260711-ZIVBF', 6, '5000.00', '20885.00', '0.00', 'cash', 'completed', '2026-07-11 03:39:19', '2026-07-11 03:39:19'),
(114, 'INV-20260711-LQBA9', 6, '7500.00', '57166.00', '0.00', 'cash', 'completed', '2026-07-11 04:13:32', '2026-07-11 04:13:32'),
(115, 'INV-20260711-P8QMT', 6, '5000.00', '18690.00', '0.00', 'cash', 'completed', '2026-07-11 12:06:59', '2026-07-11 12:06:59'),
(116, 'INV-20260711-RHCXE', 6, '5000.00', '5239.00', '0.00', 'cash', 'completed', '2026-07-11 04:17:33', '2026-07-11 04:17:33'),
(117, 'INV-20260712-WWDFE', 1, '5000.00', '35723.00', '0.00', 'cash', 'completed', '2026-07-12 04:08:27', '2026-07-12 04:08:27'),
(118, 'INV-20260712-MIZWF', 6, '2500.00', '19670.00', '0.00', 'cash', 'completed', '2026-07-12 04:51:37', '2026-07-12 04:51:37'),
(119, 'INV-20260712-3WQPZ', 1, '7500.00', '48641.00', '0.00', 'cash', 'completed', '2026-07-12 03:53:58', '2026-07-12 03:53:58'),
(120, 'INV-20260712-OSHTB', 6, '2500.00', '10510.00', '0.00', 'cash', 'completed', '2026-07-12 09:31:48', '2026-07-12 09:31:48'),
(121, 'INV-20260712-JECON', 6, '7500.00', '12246.00', '0.00', 'cash', 'completed', '2026-07-12 06:19:02', '2026-07-12 06:19:02'),
(122, 'INV-20260713-POJGX', 6, '2500.00', '7544.00', '0.00', 'cash', 'completed', '2026-07-13 03:34:21', '2026-07-13 03:34:21'),
(123, 'INV-20260713-K7FKZ', 6, '2500.00', '43698.00', '0.00', 'cash', 'completed', '2026-07-13 13:51:10', '2026-07-13 13:51:10'),
(124, 'INV-20260713-BXYQI', 1, '2500.00', '40544.00', '0.00', 'cash', 'completed', '2026-07-13 08:49:02', '2026-07-13 08:49:02'),
(125, 'INV-20260713-FEYWG', 1, '7500.00', '11126.00', '0.00', 'cash', 'completed', '2026-07-13 08:02:09', '2026-07-13 08:02:09'),
(126, 'INV-20260713-8LOPQ', 1, '2500.00', '36820.00', '0.00', 'cash', 'completed', '2026-07-13 03:00:22', '2026-07-13 03:00:22'),
(127, 'INV-20260713-FHH7P', 6, '7500.00', '32500.00', '0.00', 'cash', 'completed', '2026-07-13 03:19:35', '2026-07-13 03:19:35'),
(128, 'INV-20260713-FIXKQ', 6, '2500.00', '14680.00', '0.00', 'cash', 'completed', '2026-07-13 11:24:53', '2026-07-13 11:24:53'),
(129, 'INV-20260713-EZR6Y', 1, '2500.00', '18843.00', '0.00', 'cash', 'completed', '2026-07-13 01:40:08', '2026-07-13 01:40:08'),
(130, 'INV-20260714-BZR02', 1, '5000.00', '24415.00', '0.00', 'cash', 'completed', '2026-07-14 09:47:28', '2026-07-14 09:47:28'),
(131, 'INV-20260714-IRS1W', 6, '2500.00', '30054.00', '0.00', 'cash', 'completed', '2026-07-14 09:05:57', '2026-07-14 09:05:57'),
(132, 'INV-20260714-5PQ56', 6, '2500.00', '32139.00', '0.00', 'cash', 'completed', '2026-07-14 13:34:28', '2026-07-14 13:34:28'),
(133, 'INV-20260714-FYO3O', 1, '5000.00', '8505.00', '0.00', 'cash', 'completed', '2026-07-14 02:08:55', '2026-07-14 02:08:55'),
(134, 'INV-20260714-SXW99', 6, '7500.00', '15888.00', '0.00', 'cash', 'completed', '2026-07-14 09:22:44', '2026-07-14 09:22:44'),
(135, 'INV-20260714-UN2S7', 6, '7500.00', '16495.00', '0.00', 'cash', 'completed', '2026-07-14 08:05:08', '2026-07-14 08:05:08'),
(136, 'INV-20260714-4RURI', 6, '5000.00', '21571.00', '0.00', 'cash', 'completed', '2026-07-14 02:44:48', '2026-07-14 02:44:48'),
(137, 'INV-20260715-WAKBT', 6, '5000.00', '19718.00', '0.00', 'cash', 'completed', '2026-07-15 09:58:57', '2026-07-15 09:58:57'),
(138, 'INV-20260715-RT117', 6, '7500.00', '53582.00', '0.00', 'cash', 'completed', '2026-07-15 04:23:33', '2026-07-15 04:23:33'),
(139, 'INV-20260715-ATGAZ', 6, '5000.00', '50349.00', '0.00', 'cash', 'completed', '2026-07-15 07:59:44', '2026-07-15 07:59:44'),
(140, 'INV-20260715-FX4VL', 1, '5000.00', '10347.00', '0.00', 'cash', 'completed', '2026-07-15 09:18:54', '2026-07-15 09:18:54'),
(141, 'INV-20260715-Q4P3M', 6, '2500.00', '12644.00', '0.00', 'cash', 'completed', '2026-07-15 12:38:33', '2026-07-15 12:38:33'),
(142, 'INV-20260715-OMJTP', 6, '2500.00', '5643.00', '0.00', 'cash', 'completed', '2026-07-15 07:53:57', '2026-07-15 07:53:57'),
(143, 'INV-20260715-KXSAX', 6, '7500.00', '13174.00', '0.00', 'cash', 'completed', '2026-07-15 09:30:16', '2026-07-15 09:30:16'),
(144, 'INV-20260715-YSEJZ', 6, '2500.00', '4610.00', '0.00', 'cash', 'completed', '2026-07-15 13:25:48', '2026-07-15 13:25:48'),
(145, 'INV-20260715-CQ1PI', 1, '2500.00', '39254.00', '0.00', 'cash', 'completed', '2026-07-15 03:49:53', '2026-07-15 03:49:53'),
(146, 'INV-20260715-ZKHIH', 6, '5000.00', '51572.00', '0.00', 'cash', 'completed', '2026-07-15 08:00:44', '2026-07-15 08:00:44'),
(147, 'INV-20260715-UALRG', 6, '5000.00', '41192.00', '0.00', 'cash', 'completed', '2026-07-15 01:32:12', '2026-07-15 01:32:12'),
(148, 'INV-20260715-FOUL9', 6, '2500.00', '8350.00', '0.00', 'cash', 'completed', '2026-07-15 03:59:22', '2026-07-15 03:59:22'),
(149, 'INV-20260716-E6U4I', 6, '2500.00', '37445.00', '0.00', 'cash', 'completed', '2026-07-16 03:19:15', '2026-07-16 03:19:15'),
(150, 'INV-20260716-S1ITS', 6, '5000.00', '40568.00', '0.00', 'cash', 'completed', '2026-07-16 08:23:11', '2026-07-16 08:23:11'),
(151, 'INV-20260716-2I2SK', 6, '5000.00', '48209.00', '0.00', 'cash', 'completed', '2026-07-16 12:07:00', '2026-07-16 12:07:00'),
(152, 'INV-20260716-ZOS9A', 6, '5000.00', '8410.00', '0.00', 'cash', 'completed', '2026-07-16 06:26:49', '2026-07-16 06:26:49'),
(153, 'INV-20260716-9M74K', 6, '7500.00', '42693.00', '0.00', 'cash', 'completed', '2026-07-16 12:08:56', '2026-07-16 12:08:56'),
(154, 'INV-20260716-LUFM2', 1, '5000.00', '46224.00', '0.00', 'cash', 'completed', '2026-07-16 08:17:09', '2026-07-16 08:17:09'),
(155, 'INV-20260716-PGP5O', 1, '2500.00', '7924.00', '0.00', 'cash', 'completed', '2026-07-16 11:23:57', '2026-07-16 11:23:57'),
(156, 'INV-20260716-NUNIY', 6, '7500.00', '33159.00', '0.00', 'cash', 'completed', '2026-07-16 03:26:23', '2026-07-16 03:26:23'),
(157, 'INV-20260716-RHC17', 6, '5000.00', '37009.00', '0.00', 'cash', 'completed', '2026-07-16 13:42:36', '2026-07-16 13:42:36'),
(158, 'INV-20260716-H8BSD', 6, '7500.00', '51631.00', '0.00', 'cash', 'completed', '2026-07-16 07:26:44', '2026-07-16 07:26:44'),
(159, 'INV-20260716-EELQL', 1, '5000.00', '42783.00', '0.00', 'cash', 'completed', '2026-07-16 11:51:45', '2026-07-16 11:51:45'),
(160, 'INV-20260716-L55LC', 1, '2500.00', '41269.00', '0.00', 'cash', 'completed', '2026-07-16 02:33:54', '2026-07-16 02:33:54'),
(161, 'INV-20260716-UOPDQ', 6, '7500.00', '43035.00', '0.00', 'cash', 'completed', '2026-07-16 02:42:25', '2026-07-16 02:42:25'),
(162, 'INV-20260716-45IML', 6, '5000.00', '52484.00', '0.00', 'cash', 'completed', '2026-07-16 09:50:50', '2026-07-16 09:50:50'),
(163, 'INV-20260717-PUMNL', 6, '7500.00', '9700.00', '0.00', 'cash', 'completed', '2026-07-17 06:56:55', '2026-07-17 06:56:55'),
(164, 'INV-20260717-W4HKK', 6, '7500.00', '39867.00', '0.00', 'cash', 'completed', '2026-07-17 10:35:16', '2026-07-17 10:35:16'),
(165, 'INV-20260717-YUDZZ', 1, '7500.00', '56936.00', '0.00', 'cash', 'completed', '2026-07-17 08:13:29', '2026-07-17 08:13:29'),
(166, 'INV-20260717-66V5I', 6, '2500.00', '34935.00', '0.00', 'cash', 'completed', '2026-07-17 12:49:36', '2026-07-17 12:49:36'),
(167, 'INV-20260717-TXFLT', 1, '2500.00', '3758.00', '0.00', 'cash', 'completed', '2026-07-17 03:32:41', '2026-07-17 03:32:41'),
(168, 'INV-20260718-MR2KF', 6, '2500.00', '43429.00', '0.00', 'cash', 'completed', '2026-07-18 06:52:10', '2026-07-18 06:52:10'),
(169, 'INV-20260718-3FAYG', 6, '2500.00', '30547.00', '0.00', 'cash', 'completed', '2026-07-18 09:01:45', '2026-07-18 09:01:45'),
(170, 'INV-20260718-TXGES', 6, '7500.00', '13746.00', '0.00', 'cash', 'completed', '2026-07-18 03:05:14', '2026-07-18 03:05:14'),
(171, 'INV-20260718-ILJVU', 6, '5000.00', '8548.00', '0.00', 'cash', 'completed', '2026-07-18 02:36:27', '2026-07-18 02:36:27'),
(172, 'INV-20260718-EWYVF', 6, '2500.00', '39838.00', '0.00', 'cash', 'completed', '2026-07-18 08:42:24', '2026-07-18 08:42:24'),
(173, 'INV-20260718-ARU1O', 6, '2500.00', '27822.00', '0.00', 'cash', 'completed', '2026-07-18 09:39:02', '2026-07-18 09:39:02'),
(174, 'INV-20260718-INCFX', 1, '7500.00', '49491.00', '0.00', 'cash', 'completed', '2026-07-18 06:30:41', '2026-07-18 06:30:41'),
(175, 'INV-20260718-JPO08', 6, '7500.00', '51293.00', '0.00', 'cash', 'completed', '2026-07-18 04:42:47', '2026-07-18 04:42:47'),
(176, 'INV-20260718-AL7YY', 6, '7500.00', '44454.00', '0.00', 'cash', 'completed', '2026-07-18 05:18:47', '2026-07-18 05:18:47'),
(177, 'INV-20260718-LCK0G', 6, '5000.00', '52986.00', '0.00', 'cash', 'completed', '2026-07-18 07:56:02', '2026-07-18 07:56:02'),
(178, 'INV-20260718-GPU1N', 1, '5000.00', '22279.00', '0.00', 'cash', 'completed', '2026-07-18 13:49:12', '2026-07-18 13:49:12'),
(179, 'INV-20260718-SRFNV', 6, '7500.00', '31071.00', '0.00', 'cash', 'completed', '2026-07-18 02:40:26', '2026-07-18 02:40:26'),
(180, 'INV-20260719-JDYD7', 1, '7500.00', '49432.00', '0.00', 'cash', 'completed', '2026-07-19 10:08:42', '2026-07-19 10:08:42'),
(181, 'INV-20260719-IOML7', 6, '5000.00', '18401.00', '0.00', 'cash', 'completed', '2026-07-19 02:23:04', '2026-07-19 02:23:04'),
(182, 'INV-20260719-AQHCJ', 6, '2500.00', '3384.00', '0.00', 'cash', 'completed', '2026-07-19 03:31:16', '2026-07-19 03:31:16'),
(183, 'INV-20260719-L59Z5', 6, '5000.00', '19947.00', '0.00', 'cash', 'completed', '2026-07-19 05:25:10', '2026-07-19 05:25:10'),
(184, 'INV-20260719-LGJVH', 1, '5000.00', '19616.00', '0.00', 'cash', 'completed', '2026-07-19 04:26:39', '2026-07-19 04:26:39'),
(185, 'INV-20260719-6YKKO', 6, '5000.00', '30696.00', '0.00', 'cash', 'completed', '2026-07-19 08:15:12', '2026-07-19 08:15:12'),
(186, 'INV-20260719-R4ZGN', 6, '5000.00', '25748.00', '0.00', 'cash', 'completed', '2026-07-19 11:01:18', '2026-07-19 11:01:18'),
(187, 'INV-20260719-INC0T', 1, '2500.00', '9681.00', '0.00', 'cash', 'completed', '2026-07-19 06:52:36', '2026-07-19 06:52:36'),
(188, 'INV-20260719-FPIUL', 6, '2500.00', '47908.00', '0.00', 'cash', 'completed', '2026-07-19 04:25:56', '2026-07-19 04:25:56'),
(189, 'INV-20260719-OJUZH', 6, '5000.00', '7853.00', '0.00', 'cash', 'completed', '2026-07-19 05:58:36', '2026-07-19 05:58:36'),
(190, 'INV-20260720-FOO7P', 6, '7500.00', '49327.00', '0.00', 'cash', 'completed', '2026-07-20 11:08:11', '2026-07-20 11:08:11'),
(191, 'INV-20260720-W9X9T', 6, '2500.00', '29136.00', '0.00', 'cash', 'completed', '2026-07-20 03:14:12', '2026-07-20 03:14:12'),
(192, 'INV-20260720-KEQLV', 1, '2500.00', '9193.00', '0.00', 'cash', 'completed', '2026-07-20 03:09:19', '2026-07-20 03:09:19'),
(193, 'INV-20260720-LFYL8', 6, '2500.00', '35384.00', '0.00', 'cash', 'completed', '2026-07-20 13:47:46', '2026-07-20 13:47:46'),
(194, 'INV-20260720-QHY91', 6, '2500.00', '6170.00', '0.00', 'cash', 'completed', '2026-07-20 06:33:11', '2026-07-20 06:33:11'),
(195, 'INV-20260720-KXZJX', 6, '5000.00', '52323.00', '0.00', 'cash', 'completed', '2026-07-20 14:26:37', '2026-07-20 14:26:37'),
(196, 'INV-20260720-PFN6P', 6, '5000.00', '35393.00', '0.00', 'cash', 'completed', '2026-07-20 11:43:25', '2026-07-20 11:43:25'),
(197, 'INV-20260720-GRU3T', 1, '2500.00', '41829.00', '0.00', 'cash', 'completed', '2026-07-20 11:03:52', '2026-07-20 11:03:52'),
(198, 'INV-20260720-RHRMG', 1, '2500.00', '33669.00', '0.00', 'cash', 'completed', '2026-07-20 02:15:46', '2026-07-20 02:15:46'),
(199, 'INV-20260720-2MV3A', 6, '5000.00', '15151.00', '0.00', 'cash', 'completed', '2026-07-20 01:02:20', '2026-07-20 01:02:20'),
(200, 'INV-20260720-147WY', 6, '7500.00', '44946.00', '0.00', 'cash', 'completed', '2026-07-20 09:08:02', '2026-07-20 09:08:02'),
(201, 'INV-20260720-ZMGBF', 6, '2500.00', '18199.00', '0.00', 'cash', 'completed', '2026-07-20 12:27:50', '2026-07-20 12:27:50'),
(202, 'INV-20260720-LV5RL', 6, '2500.00', '4552.00', '0.00', 'cash', 'completed', '2026-07-20 03:14:12', '2026-07-20 03:14:12'),
(203, 'INV-20260720-JDEOR', 6, '7500.00', '17549.00', '0.00', 'cash', 'completed', '2026-07-20 02:04:52', '2026-07-20 02:04:52'),
(204, 'INV-20260721-S8DIV', 1, '2500.00', '33589.00', '0.00', 'cash', 'completed', '2026-07-21 01:02:12', '2026-07-21 01:02:12'),
(205, 'INV-20260721-LA6OR', 6, '7500.00', '33256.00', '0.00', 'cash', 'completed', '2026-07-21 03:41:20', '2026-07-21 03:41:20'),
(206, 'INV-20260721-MZQ0X', 6, '2500.00', '5170.00', '0.00', 'cash', 'completed', '2026-07-21 10:49:59', '2026-07-21 10:49:59'),
(207, 'INV-20260721-ZWNJL', 6, '5000.00', '50128.00', '0.00', 'cash', 'completed', '2026-07-21 06:52:36', '2026-07-21 06:52:36'),
(208, 'INV-20260721-HXXBP', 6, '7500.00', '57079.00', '0.00', 'cash', 'completed', '2026-07-21 14:42:00', '2026-07-21 14:42:00'),
(209, 'INV-20260722-QSJU5', 6, '7500.00', '54525.00', '0.00', 'cash', 'completed', '2026-07-22 09:51:01', '2026-07-22 09:51:01'),
(210, 'INV-20260722-FQHGX', 6, '5000.00', '11501.00', '0.00', 'cash', 'completed', '2026-07-22 13:16:18', '2026-07-22 13:16:18'),
(211, 'INV-20260722-DCOTL', 6, '2500.00', '50168.00', '0.00', 'cash', 'completed', '2026-07-22 09:38:08', '2026-07-22 09:38:08'),
(212, 'INV-20260722-4Y6WX', 6, '5000.00', '11489.00', '0.00', 'cash', 'completed', '2026-07-22 01:47:20', '2026-07-22 01:47:20'),
(213, 'INV-20260722-7ENNP', 6, '7500.00', '12549.00', '0.00', 'cash', 'completed', '2026-07-22 12:52:19', '2026-07-22 12:52:19'),
(214, 'INV-20260722-Q1XFY', 1, '5000.00', '23450.00', '0.00', 'cash', 'completed', '2026-07-22 08:59:44', '2026-07-22 08:59:44'),
(215, 'INV-20260722-0IUQT', 6, '7500.00', '13871.00', '0.00', 'cash', 'completed', '2026-07-22 03:32:41', '2026-07-22 03:32:41'),
(216, 'INV-20260723-FK6P4', 6, '5000.00', '29918.00', '0.00', 'cash', 'completed', '2026-07-23 12:10:29', '2026-07-23 12:10:29'),
(217, 'INV-20260723-JKTQB', 6, '7500.00', '20600.00', '0.00', 'cash', 'completed', '2026-07-23 13:28:24', '2026-07-23 13:28:24'),
(218, 'INV-20260723-YRUUU', 6, '7500.00', '22929.00', '0.00', 'cash', 'completed', '2026-07-23 13:42:35', '2026-07-23 13:42:35'),
(219, 'INV-20260723-MBYKX', 6, '2500.00', '24037.00', '0.00', 'cash', 'completed', '2026-07-23 14:38:09', '2026-07-23 14:38:09'),
(220, 'INV-20260723-SQAHT', 1, '7500.00', '13561.00', '0.00', 'cash', 'completed', '2026-07-23 08:20:08', '2026-07-23 08:20:08'),
(221, 'INV-20260723-1XBJB', 6, '2500.00', '25792.00', '0.00', 'cash', 'completed', '2026-07-23 13:09:47', '2026-07-23 13:09:47'),
(222, 'INV-20260723-4UHOQ', 6, '5000.00', '35939.00', '0.00', 'cash', 'completed', '2026-07-23 11:47:07', '2026-07-23 11:47:07'),
(223, 'INV-20260723-IRQBE', 1, '7500.00', '35496.00', '0.00', 'cash', 'completed', '2026-07-23 01:05:42', '2026-07-23 01:05:42'),
(224, 'INV-20260724-3GMWS', 1, '5000.00', '8616.00', '0.00', 'cash', 'completed', '2026-07-24 06:59:46', '2026-07-24 06:59:46'),
(225, 'INV-20260724-RPJFD', 6, '2500.00', '33010.00', '0.00', 'cash', 'completed', '2026-07-24 05:35:33', '2026-07-24 05:35:33'),
(226, 'INV-20260724-UC0TQ', 6, '5000.00', '8676.00', '0.00', 'cash', 'completed', '2026-07-24 05:40:37', '2026-07-24 05:40:37'),
(227, 'INV-20260724-6XQDH', 6, '5000.00', '54511.00', '0.00', 'cash', 'completed', '2026-07-24 07:09:39', '2026-07-24 07:09:39'),
(228, 'INV-20260724-Z1GKS', 6, '2500.00', '29971.00', '0.00', 'cash', 'completed', '2026-07-24 02:58:52', '2026-07-24 02:58:52'),
(229, 'INV-20260724-JO6CI', 6, '5000.00', '51591.00', '0.00', 'cash', 'completed', '2026-07-24 04:46:29', '2026-07-24 04:46:29'),
(230, 'INV-20260724-BEEJI', 6, '5000.00', '45223.00', '0.00', 'cash', 'completed', '2026-07-24 11:20:55', '2026-07-24 11:20:55'),
(231, 'INV-20260724-QVPOA', 1, '7500.00', '41799.00', '0.00', 'cash', 'completed', '2026-07-24 09:31:23', '2026-07-24 09:31:23'),
(232, 'INV-20260724-W4D3B', 1, '5000.00', '54794.00', '0.00', 'cash', 'completed', '2026-07-24 04:05:59', '2026-07-24 04:05:59'),
(233, 'INV-20260724-SJMRT', 6, '5000.00', '32716.00', '0.00', 'cash', 'completed', '2026-07-24 14:24:38', '2026-07-24 14:24:38'),
(234, 'INV-20260725-F9XH1', 6, '7500.00', '15757.00', '0.00', 'cash', 'completed', '2026-07-25 09:42:08', '2026-07-25 09:42:08'),
(235, 'INV-20260725-F8UUH', 6, '5000.00', '50021.00', '0.00', 'cash', 'completed', '2026-07-25 11:08:05', '2026-07-25 11:08:05'),
(236, 'INV-20260725-FFGPW', 6, '5000.00', '11800.00', '0.00', 'cash', 'completed', '2026-07-25 01:37:33', '2026-07-25 01:37:33'),
(237, 'INV-20260725-TUMSG', 1, '5000.00', '12925.00', '0.00', 'cash', 'completed', '2026-07-25 14:13:22', '2026-07-25 14:13:22'),
(238, 'INV-20260725-FESY8', 6, '7500.00', '52798.00', '0.00', 'cash', 'completed', '2026-07-25 08:18:49', '2026-07-25 08:18:49'),
(239, 'INV-20260725-KBIGM', 6, '2500.00', '48571.00', '0.00', 'cash', 'completed', '2026-07-25 11:48:39', '2026-07-25 11:48:39'),
(240, 'INV-20260725-JYGTS', 1, '5000.00', '25740.00', '0.00', 'cash', 'completed', '2026-07-25 05:39:47', '2026-07-25 05:39:47'),
(241, 'INV-20260726-C9P7Y', 1, '5000.00', '54320.00', '0.00', 'cash', 'completed', '2026-07-26 01:40:58', '2026-07-26 01:40:58'),
(242, 'INV-20260726-85DZY', 6, '7500.00', '18354.00', '0.00', 'cash', 'completed', '2026-07-26 07:27:46', '2026-07-26 07:27:46'),
(243, 'INV-20260726-CAQUN', 6, '5000.00', '26224.00', '0.00', 'cash', 'completed', '2026-07-26 11:16:25', '2026-07-26 11:16:25'),
(244, 'INV-20260726-MECNJ', 6, '7500.00', '39122.00', '0.00', 'cash', 'completed', '2026-07-26 10:55:02', '2026-07-26 10:55:02'),
(245, 'INV-20260726-NE0DV', 1, '2500.00', '31411.00', '0.00', 'cash', 'completed', '2026-07-26 11:18:50', '2026-07-26 11:18:50'),
(246, 'INV-20260726-PNQSH', 1, '7500.00', '48073.00', '0.00', 'cash', 'completed', '2026-07-26 06:35:59', '2026-07-26 06:35:59'),
(247, 'INV-20260726-S0MFX', 6, '2500.00', '23785.00', '0.00', 'cash', 'completed', '2026-07-26 10:29:54', '2026-07-26 10:29:54'),
(248, 'INV-20260726-O219Z', 1, '7500.00', '54652.00', '0.00', 'cash', 'completed', '2026-07-26 04:00:14', '2026-07-26 04:00:14'),
(249, 'INV-20260726-1US1X', 1, '5000.00', '32852.00', '0.00', 'cash', 'completed', '2026-07-26 14:36:02', '2026-07-26 14:36:02'),
(250, 'INV-20260726-Z8IYI', 1, '7500.00', '48096.00', '0.00', 'cash', 'completed', '2026-07-26 13:47:21', '2026-07-26 13:47:21'),
(251, 'INV-20260727-IL6EA', 6, '5000.00', '48796.00', '0.00', 'cash', 'completed', '2026-07-27 01:56:38', '2026-07-27 01:56:38'),
(252, 'INV-20260727-KDFJ5', 1, '7500.00', '11262.00', '0.00', 'cash', 'completed', '2026-07-27 05:16:32', '2026-07-27 05:16:32'),
(253, 'INV-20260727-DVLV6', 6, '7500.00', '50248.00', '0.00', 'cash', 'completed', '2026-07-27 10:10:41', '2026-07-27 10:10:41'),
(254, 'INV-20260727-81YRQ', 1, '7500.00', '47445.00', '0.00', 'cash', 'completed', '2026-07-27 03:47:37', '2026-07-27 03:47:37'),
(255, 'INV-20260727-RVFAZ', 1, '5000.00', '44308.00', '0.00', 'cash', 'completed', '2026-07-27 07:35:43', '2026-07-27 07:35:43'),
(256, 'INV-20260727-PCE6E', 1, '5000.00', '45816.00', '0.00', 'cash', 'completed', '2026-07-27 14:26:48', '2026-07-27 14:26:48'),
(257, 'INV-20260727-MQVTC', 6, '5000.00', '39553.00', '0.00', 'cash', 'completed', '2026-07-27 04:09:04', '2026-07-27 04:09:04'),
(258, 'INV-20260728-CCWOE', 1, '7500.00', '22894.00', '0.00', 'cash', 'completed', '2026-07-28 10:53:49', '2026-07-28 10:53:49'),
(259, 'INV-20260728-XJ7EI', 6, '7500.00', '51012.00', '0.00', 'cash', 'completed', '2026-07-28 02:44:55', '2026-07-28 02:44:55'),
(260, 'INV-20260728-VCAVD', 6, '5000.00', '41415.00', '0.00', 'cash', 'completed', '2026-07-28 06:35:38', '2026-07-28 06:35:38'),
(261, 'INV-20260728-MXIKY', 6, '7500.00', '24968.00', '0.00', 'cash', 'completed', '2026-07-28 11:08:22', '2026-07-28 11:08:22'),
(262, 'INV-20260728-TDVFL', 6, '5000.00', '30715.00', '0.00', 'cash', 'completed', '2026-07-28 06:34:08', '2026-07-28 06:34:08'),
(263, 'INV-20260728-4WFJQ', 6, '5000.00', '9790.00', '0.00', 'cash', 'completed', '2026-07-28 07:06:20', '2026-07-28 07:06:20'),
(264, 'INV-20260728-B4FOH', 1, '2500.00', '23934.00', '0.00', 'cash', 'completed', '2026-07-28 02:27:19', '2026-07-28 02:27:19'),
(265, 'INV-20260728-G6HSQ', 6, '2500.00', '15682.00', '0.00', 'cash', 'completed', '2026-07-28 11:03:26', '2026-07-28 11:03:26'),
(266, 'INV-20260728-JQ6FA', 6, '2500.00', '9669.00', '0.00', 'cash', 'completed', '2026-07-28 06:29:27', '2026-07-28 06:29:27'),
(267, 'INV-20260728-ESRL4', 1, '2500.00', '28324.00', '0.00', 'cash', 'completed', '2026-07-28 13:57:31', '2026-07-28 13:57:31'),
(268, 'INV-20260729-245AD', 1, '5000.00', '49302.00', '0.00', 'cash', 'completed', '2026-07-29 11:06:31', '2026-07-29 11:06:31'),
(269, 'INV-20260729-WKNGQ', 6, '5000.00', '7675.00', '0.00', 'cash', 'completed', '2026-07-29 08:17:55', '2026-07-29 08:17:55'),
(270, 'INV-20260729-EMVAZ', 6, '7500.00', '18808.00', '0.00', 'cash', 'completed', '2026-07-29 12:28:45', '2026-07-29 12:28:45'),
(271, 'INV-20260729-ZHVUL', 6, '2500.00', '12933.00', '0.00', 'cash', 'completed', '2026-07-29 12:21:05', '2026-07-29 12:21:05'),
(272, 'INV-20260729-A4EC0', 6, '5000.00', '37260.00', '0.00', 'cash', 'completed', '2026-07-29 12:46:02', '2026-07-29 12:46:02'),
(273, 'INV-20260729-OYKID', 6, '2500.00', '21105.00', '0.00', 'cash', 'completed', '2026-07-29 02:10:13', '2026-07-29 02:10:13'),
(274, 'INV-20260729-BEWWU', 6, '5000.00', '49774.00', '0.00', 'cash', 'completed', '2026-07-29 02:40:50', '2026-07-29 02:40:50'),
(275, 'INV-20260729-MCYXQ', 1, '7500.00', '52998.00', '0.00', 'cash', 'completed', '2026-07-29 12:12:39', '2026-07-29 12:12:39'),
(276, 'INV-20260729-DEUUD', 6, '7500.00', '49177.00', '0.00', 'cash', 'completed', '2026-07-29 14:02:12', '2026-07-29 14:02:12'),
(277, 'INV-20260729-XKFBG', 1, '5000.00', '20373.00', '0.00', 'cash', 'completed', '2026-07-29 02:58:44', '2026-07-29 02:58:44'),
(278, 'INV-20260729-8QL3R', 6, '5000.00', '24289.00', '0.00', 'cash', 'completed', '2026-07-29 14:23:03', '2026-07-29 14:23:03'),
(279, 'INV-20260730-UVZYK', 6, '2500.00', '30189.00', '0.00', 'cash', 'completed', '2026-07-30 07:32:37', '2026-07-30 07:32:37'),
(280, 'INV-20260730-OCWM6', 6, '2500.00', '23971.00', '0.00', 'cash', 'completed', '2026-07-30 02:24:38', '2026-07-30 02:24:38'),
(281, 'INV-20260730-ZDGJD', 6, '7500.00', '14390.00', '0.00', 'cash', 'completed', '2026-07-30 13:00:31', '2026-07-30 13:00:31'),
(282, 'INV-20260730-CZGSV', 1, '2500.00', '10650.00', '0.00', 'cash', 'completed', '2026-07-30 10:42:24', '2026-07-30 10:42:24'),
(283, 'INV-20260730-F2EKI', 6, '2500.00', '45989.00', '0.00', 'cash', 'completed', '2026-07-30 03:23:05', '2026-07-30 03:23:05'),
(284, 'INV-20260730-88JTH', 6, '2500.00', '16369.00', '0.00', 'cash', 'completed', '2026-07-30 11:05:33', '2026-07-30 11:05:33'),
(285, 'INV-20260730-MIWIH', 1, '7500.00', '49643.00', '0.00', 'cash', 'completed', '2026-07-30 13:32:27', '2026-07-30 13:32:27'),
(286, 'INV-20260730-EZQ3P', 6, '5000.00', '11810.00', '0.00', 'cash', 'completed', '2026-07-30 02:39:04', '2026-07-30 02:39:04'),
(287, 'INV-20260730-RFZ4M', 1, '7500.00', '34902.00', '0.00', 'cash', 'completed', '2026-07-30 02:40:04', '2026-07-30 02:40:04'),
(288, 'INV-20260730-04CAE', 6, '5000.00', '54519.00', '0.00', 'cash', 'completed', '2026-07-30 04:41:12', '2026-07-30 04:41:12'),
(289, 'INV-20260730-IFYRV', 1, '2500.00', '51622.00', '0.00', 'cash', 'completed', '2026-07-30 08:19:27', '2026-07-30 08:19:27'),
(290, 'INV-20260730-IPIG9', 6, '2500.00', '30620.00', '0.00', 'cash', 'completed', '2026-07-30 03:09:51', '2026-07-30 03:09:51'),
(291, 'INV-20260730-BNE3J', 6, '5000.00', '38688.00', '0.00', 'cash', 'completed', '2026-07-30 05:10:28', '2026-07-30 05:10:28'),
(292, 'INV-20260731-SQFVH', 1, '5000.00', '52654.00', '0.00', 'cash', 'completed', '2026-07-31 11:12:34', '2026-07-31 11:12:34'),
(293, 'INV-20260731-AD9RV', 1, '7500.00', '41655.00', '0.00', 'cash', 'completed', '2026-07-31 02:37:34', '2026-07-31 02:37:34'),
(294, 'INV-20260731-SSZ9F', 1, '7500.00', '25475.00', '0.00', 'cash', 'completed', '2026-07-31 09:00:48', '2026-07-31 09:00:48'),
(295, 'INV-20260731-65G8T', 6, '5000.00', '20646.00', '0.00', 'cash', 'completed', '2026-07-31 10:57:23', '2026-07-31 10:57:23'),
(296, 'INV-20260731-6VYO5', 1, '2500.00', '7308.00', '0.00', 'cash', 'completed', '2026-07-31 01:20:48', '2026-07-31 01:20:48'),
(297, 'INV-20260731-UHZE6', 6, '5000.00', '5819.00', '0.00', 'cash', 'completed', '2026-07-31 14:39:58', '2026-07-31 14:39:58'),
(298, 'INV-20260731-1IQBA', 6, '5000.00', '52265.00', '0.00', 'cash', 'completed', '2026-07-31 08:19:53', '2026-07-31 08:19:53'),
(299, 'INV-20260801-PUXDW', 6, '7500.00', '21314.00', '0.00', 'cash', 'completed', '2026-08-01 01:48:34', '2026-08-01 01:48:34'),
(300, 'INV-20260801-NABEN', 1, '7500.00', '20341.00', '0.00', 'cash', 'completed', '2026-08-01 03:18:16', '2026-08-01 03:18:16'),
(301, 'INV-20260801-R3LMQ', 6, '2500.00', '44383.00', '0.00', 'cash', 'completed', '2026-08-01 02:34:05', '2026-08-01 02:34:05'),
(302, 'INV-20260801-QDIWL', 1, '2500.00', '48987.00', '0.00', 'cash', 'completed', '2026-08-01 06:20:20', '2026-08-01 06:20:20'),
(303, 'INV-20260801-BHMRR', 6, '2500.00', '5350.00', '0.00', 'cash', 'completed', '2026-08-01 03:25:48', '2026-08-01 03:25:48'),
(304, 'INV-20260802-JDJXT', 6, '5000.00', '39743.00', '0.00', 'cash', 'completed', '2026-08-02 07:19:27', '2026-08-02 07:19:27'),
(305, 'INV-20260802-ZUMBF', 6, '5000.00', '33654.00', '0.00', 'cash', 'completed', '2026-08-02 05:31:04', '2026-08-02 05:31:04'),
(306, 'INV-20260802-6TVRC', 6, '2500.00', '25464.00', '0.00', 'cash', 'completed', '2026-08-02 05:42:29', '2026-08-02 05:42:29'),
(307, 'INV-20260802-DQ0T6', 6, '7500.00', '50404.00', '0.00', 'cash', 'completed', '2026-08-02 02:32:59', '2026-08-02 02:32:59'),
(308, 'INV-20260802-OUVLN', 1, '7500.00', '12732.00', '0.00', 'cash', 'completed', '2026-08-02 06:45:00', '2026-08-02 06:45:00'),
(309, 'INV-20260802-O7MRU', 1, '2500.00', '10046.00', '0.00', 'cash', 'completed', '2026-08-02 05:36:26', '2026-08-02 05:36:26'),
(310, 'INV-20260802-IQ4VS', 6, '5000.00', '21814.00', '0.00', 'cash', 'completed', '2026-08-02 12:27:04', '2026-08-02 12:27:04'),
(311, 'INV-20260802-J4JGV', 6, '7500.00', '54373.00', '0.00', 'cash', 'completed', '2026-08-02 12:34:48', '2026-08-02 12:34:48'),
(312, 'INV-20260803-0LMBB', 6, '7500.00', '51470.00', '0.00', 'cash', 'completed', '2026-08-03 07:41:47', '2026-08-03 07:41:47'),
(313, 'INV-20260803-S1SGF', 6, '2500.00', '28692.00', '0.00', 'cash', 'completed', '2026-08-03 03:14:35', '2026-08-03 03:14:35'),
(314, 'INV-20260803-BUQCH', 1, '2500.00', '44031.00', '0.00', 'cash', 'completed', '2026-08-03 04:29:23', '2026-08-03 04:29:23'),
(315, 'INV-20260803-CGITX', 1, '2500.00', '23124.00', '0.00', 'cash', 'completed', '2026-08-03 02:06:38', '2026-08-03 02:06:38'),
(316, 'INV-20260803-VQ7AS', 1, '7500.00', '22637.00', '0.00', 'cash', 'completed', '2026-08-03 13:45:54', '2026-08-03 13:45:54'),
(317, 'INV-20260803-ZFOWT', 1, '2500.00', '39762.00', '0.00', 'cash', 'completed', '2026-08-03 10:17:57', '2026-08-03 10:17:57'),
(318, 'INV-20260803-YZD6S', 6, '5000.00', '25340.00', '0.00', 'cash', 'completed', '2026-08-03 09:22:18', '2026-08-03 09:22:18'),
(319, 'INV-20260803-SDP45', 6, '7500.00', '13688.00', '0.00', 'cash', 'completed', '2026-08-03 11:28:14', '2026-08-03 11:28:14'),
(320, 'INV-20260803-IKNIA', 6, '2500.00', '34418.00', '0.00', 'cash', 'completed', '2026-08-03 02:36:54', '2026-08-03 02:36:54'),
(321, 'INV-20260804-P3UYR', 6, '7500.00', '50537.00', '0.00', 'cash', 'completed', '2026-08-04 14:23:50', '2026-08-04 14:23:50'),
(322, 'INV-20260804-F8G45', 6, '5000.00', '8056.00', '0.00', 'cash', 'completed', '2026-08-04 07:07:16', '2026-08-04 07:07:16'),
(323, 'INV-20260804-RVE7R', 1, '5000.00', '11607.00', '0.00', 'cash', 'completed', '2026-08-04 14:41:51', '2026-08-04 14:41:51'),
(324, 'INV-20260804-BEOKJ', 6, '2500.00', '16714.00', '0.00', 'cash', 'completed', '2026-08-04 08:13:22', '2026-08-04 08:13:22'),
(325, 'INV-20260804-W4EC8', 6, '7500.00', '25617.00', '0.00', 'cash', 'completed', '2026-08-04 01:04:59', '2026-08-04 01:04:59'),
(326, 'INV-20260804-BESTQ', 6, '7500.00', '13817.00', '0.00', 'cash', 'completed', '2026-08-04 01:31:56', '2026-08-04 01:31:56'),
(327, 'INV-20260804-CNOUH', 6, '5000.00', '31707.00', '0.00', 'cash', 'completed', '2026-08-04 04:31:23', '2026-08-04 04:31:23'),
(328, 'INV-20260805-MRXAY', 6, '2500.00', '25362.00', '0.00', 'cash', 'completed', '2026-08-05 02:56:29', '2026-08-05 02:56:29'),
(329, 'INV-20260805-ZMXSA', 6, '2500.00', '5783.00', '0.00', 'cash', 'completed', '2026-08-05 12:41:45', '2026-08-05 12:41:45'),
(330, 'INV-20260805-JTGLI', 1, '2500.00', '17957.00', '0.00', 'cash', 'completed', '2026-08-05 06:53:19', '2026-08-05 06:53:19'),
(331, 'INV-20260805-3HNTV', 6, '7500.00', '27093.00', '0.00', 'cash', 'completed', '2026-08-05 11:06:49', '2026-08-05 11:06:49'),
(332, 'INV-20260805-LFFIU', 1, '2500.00', '26715.00', '0.00', 'cash', 'completed', '2026-08-05 02:24:42', '2026-08-05 02:24:42'),
(333, 'INV-20260805-5YO4X', 6, '2500.00', '48493.00', '0.00', 'cash', 'completed', '2026-08-05 07:50:52', '2026-08-05 07:50:52'),
(334, 'INV-20260805-ZM9YK', 6, '2500.00', '8884.00', '0.00', 'cash', 'completed', '2026-08-05 06:49:28', '2026-08-05 06:49:28'),
(335, 'INV-20260805-AM85Q', 6, '2500.00', '16291.00', '0.00', 'cash', 'completed', '2026-08-05 01:39:40', '2026-08-05 01:39:40'),
(336, 'INV-20260805-YBILR', 6, '7500.00', '41594.00', '0.00', 'cash', 'completed', '2026-08-05 12:55:37', '2026-08-05 12:55:37'),
(338, 'INV-20260805-7VBEI', 1, '44000.00', '44000.00', '0.00', 'cash', 'completed', '2026-08-05 03:45:53', '2026-08-05 03:45:53'),
(339, 'INV-20260805-RFCOS', 1, '420000.00', '420000.00', '0.00', 'cash', 'completed', '2026-08-05 03:47:42', '2026-08-05 03:47:42'),
(340, 'INV-20260805-NVGM7', 1, '70000.00', '70000.00', '0.00', 'cash', 'completed', '2026-08-05 03:48:27', '2026-08-05 03:48:27'),
(341, 'INV-20260805-WKGAM', 1, '665000.00', '750000.00', '85000.00', 'cash', 'completed', '2026-08-05 03:50:38', '2026-08-05 03:50:38');

-- --------------------------------------------------------

--
-- Table structure for table `transaction_items`
--

CREATE TABLE `transaction_items` (
  `id` bigint UNSIGNED NOT NULL,
  `transaction_id` bigint UNSIGNED NOT NULL,
  `product_id` bigint UNSIGNED DEFAULT NULL,
  `product_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(12,2) NOT NULL,
  `cost_price` decimal(15,2) NOT NULL DEFAULT '0.00' COMMENT 'Harga modal saat transaksi',
  `quantity` int NOT NULL,
  `subtotal` decimal(12,2) NOT NULL,
  `profit` decimal(15,2) NOT NULL DEFAULT '0.00' COMMENT 'Keuntungan (subtotal - (cost_price * qty))',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transaction_items`
--

INSERT INTO `transaction_items` (`id`, `transaction_id`, `product_id`, `product_name`, `price`, `cost_price`, `quantity`, `subtotal`, `profit`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, 'Mie Sedap-Korean Spicy Soup', '3200.00', '0.00', 1, '3200.00', '3200.00', '2026-07-09 21:08:40', '2026-07-09 21:08:40'),
(2, 1, NULL, 'Mi Ayam', '2000.00', '0.00', 2, '4000.00', '4000.00', '2026-07-09 21:08:40', '2026-07-09 21:08:40'),
(3, 2, NULL, 'Mie Sedap-Korean Spicy Soup', '3200.00', '0.00', 1, '3200.00', '3200.00', '2026-07-09 21:08:40', '2026-07-09 21:08:40'),
(4, 2, NULL, 'Mi Ayam', '2000.00', '0.00', 2, '4000.00', '4000.00', '2026-07-09 21:08:40', '2026-07-09 21:08:40'),
(5, 3, NULL, 'Mie Sedap-Korean Spicy Soup', '3200.00', '0.00', 2, '6400.00', '6400.00', '2026-07-09 21:08:40', '2026-07-09 21:08:40'),
(6, 3, NULL, 'Mi Ayam', '2000.00', '0.00', 3, '6000.00', '6000.00', '2026-07-09 21:08:40', '2026-07-09 21:08:40'),
(7, 4, NULL, 'Mie Sedap-Korean Spicy Soup', '3200.00', '0.00', 3, '9600.00', '9600.00', '2026-07-09 21:08:40', '2026-07-09 21:08:40'),
(8, 4, NULL, 'Mi Ayam', '2000.00', '0.00', 2, '4000.00', '4000.00', '2026-07-09 21:08:40', '2026-07-09 21:08:40'),
(9, 5, NULL, 'Mie Sedap-Korean Spicy Soup', '3200.00', '0.00', 2, '6400.00', '6400.00', '2026-07-09 21:08:40', '2026-07-09 21:08:40'),
(10, 5, NULL, 'Mi Ayam', '2000.00', '0.00', 1, '2000.00', '2000.00', '2026-07-09 21:08:40', '2026-07-09 21:08:40'),
(11, 6, NULL, 'Mie Sedap-Korean Spicy Soup', '3200.00', '0.00', 1, '3200.00', '3200.00', '2026-07-09 21:08:40', '2026-07-09 21:08:40'),
(12, 6, NULL, 'Mi Ayam', '2000.00', '0.00', 1, '2000.00', '2000.00', '2026-07-09 21:08:40', '2026-07-09 21:08:40'),
(13, 7, NULL, 'Mie Sedap-Korean Spicy Soup', '3200.00', '0.00', 1, '3200.00', '3200.00', '2026-07-09 21:08:40', '2026-07-09 21:08:40'),
(14, 7, NULL, 'Mi Ayam', '2000.00', '0.00', 1, '2000.00', '2000.00', '2026-07-09 21:08:40', '2026-07-09 21:08:40'),
(25, 17, NULL, 'Mi Ayam', '2000.00', '0.00', 1, '2000.00', '2000.00', '2026-07-13 17:11:49', '2026-07-13 17:11:49'),
(26, 18, NULL, 'Mi Ayam', '2000.00', '0.00', 1, '2000.00', '2000.00', '2026-07-13 17:54:39', '2026-07-13 17:54:39'),
(27, 19, NULL, 'Milku rasa Mani', '3500.00', '0.00', 4, '14000.00', '14000.00', '2026-07-13 20:23:00', '2026-07-13 20:23:00'),
(28, 20, NULL, 'Milku rasa Mani', '3500.00', '0.00', 3, '10500.00', '10500.00', '2026-07-14 09:26:23', '2026-07-14 09:26:23'),
(29, 21, NULL, 'Milku', '3500.00', '0.00', 1, '3500.00', '3500.00', '2026-08-03 06:24:17', '2026-08-03 06:24:17'),
(30, 22, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-08-04 19:23:03', '2026-08-04 19:23:03'),
(54, 46, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-06 01:58:38', '2026-07-06 01:58:38'),
(55, 47, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-06 03:03:15', '2026-07-06 03:03:15'),
(56, 48, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-06 06:54:08', '2026-07-06 06:54:08'),
(57, 49, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-06 09:19:12', '2026-07-06 09:19:12'),
(58, 50, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-06 02:41:48', '2026-07-06 02:41:48'),
(59, 51, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-06 10:57:54', '2026-07-06 10:57:54'),
(60, 52, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-06 02:50:31', '2026-07-06 02:50:31'),
(61, 53, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-06 09:09:54', '2026-07-06 09:09:54'),
(62, 54, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-06 11:53:38', '2026-07-06 11:53:38'),
(63, 55, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-06 06:07:36', '2026-07-06 06:07:36'),
(64, 56, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-06 09:38:02', '2026-07-06 09:38:02'),
(65, 57, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-06 08:39:20', '2026-07-06 08:39:20'),
(66, 58, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-06 12:37:13', '2026-07-06 12:37:13'),
(67, 59, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-07 13:51:41', '2026-07-07 13:51:41'),
(68, 60, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-07 03:13:18', '2026-07-07 03:13:18'),
(69, 61, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-07 02:38:28', '2026-07-07 02:38:28'),
(70, 62, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-07 04:23:02', '2026-07-07 04:23:02'),
(71, 63, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-07 05:34:35', '2026-07-07 05:34:35'),
(72, 64, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-07 03:49:58', '2026-07-07 03:49:58'),
(73, 65, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-07 13:59:36', '2026-07-07 13:59:36'),
(74, 66, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-07 03:53:00', '2026-07-07 03:53:00'),
(75, 67, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-07 06:05:36', '2026-07-07 06:05:36'),
(76, 68, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-07 10:53:23', '2026-07-07 10:53:23'),
(77, 69, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-07 04:18:57', '2026-07-07 04:18:57'),
(78, 70, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-07 04:26:21', '2026-07-07 04:26:21'),
(79, 71, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-08 12:23:18', '2026-07-08 12:23:18'),
(80, 72, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-08 06:53:22', '2026-07-08 06:53:22'),
(81, 73, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-08 14:07:10', '2026-07-08 14:07:10'),
(82, 74, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-08 07:02:22', '2026-07-08 07:02:22'),
(83, 75, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-08 05:48:10', '2026-07-08 05:48:10'),
(84, 76, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-08 13:52:13', '2026-07-08 13:52:13'),
(85, 77, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-09 14:33:23', '2026-07-09 14:33:23'),
(86, 78, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-09 06:35:36', '2026-07-09 06:35:36'),
(87, 79, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-09 03:21:44', '2026-07-09 03:21:44'),
(88, 80, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-09 07:26:25', '2026-07-09 07:26:25'),
(89, 81, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-09 06:52:31', '2026-07-09 06:52:31'),
(90, 82, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-09 06:24:57', '2026-07-09 06:24:57'),
(91, 83, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-09 11:59:46', '2026-07-09 11:59:46'),
(92, 84, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-09 05:34:54', '2026-07-09 05:34:54'),
(93, 85, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-09 07:28:08', '2026-07-09 07:28:08'),
(94, 86, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-09 09:20:15', '2026-07-09 09:20:15'),
(95, 87, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-09 13:35:14', '2026-07-09 13:35:14'),
(96, 88, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-09 11:45:17', '2026-07-09 11:45:17'),
(97, 89, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-09 01:05:21', '2026-07-09 01:05:21'),
(98, 90, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-10 14:13:05', '2026-07-10 14:13:05'),
(99, 91, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-10 02:36:44', '2026-07-10 02:36:44'),
(100, 92, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-10 08:40:05', '2026-07-10 08:40:05'),
(101, 93, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-10 14:29:21', '2026-07-10 14:29:21'),
(102, 94, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-10 11:31:37', '2026-07-10 11:31:37'),
(103, 95, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-10 09:58:27', '2026-07-10 09:58:27'),
(104, 96, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-10 05:04:24', '2026-07-10 05:04:24'),
(105, 97, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-10 12:12:43', '2026-07-10 12:12:43'),
(106, 98, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-10 11:28:24', '2026-07-10 11:28:24'),
(107, 99, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-10 08:57:13', '2026-07-10 08:57:13'),
(108, 100, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-10 05:14:14', '2026-07-10 05:14:14'),
(109, 101, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-10 02:32:27', '2026-07-10 02:32:27'),
(110, 102, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-10 08:16:00', '2026-07-10 08:16:00'),
(111, 103, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-10 04:27:53', '2026-07-10 04:27:53'),
(112, 104, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-10 12:13:10', '2026-07-10 12:13:10'),
(113, 105, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-11 06:23:56', '2026-07-11 06:23:56'),
(114, 106, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-11 10:00:47', '2026-07-11 10:00:47'),
(115, 107, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-11 02:09:33', '2026-07-11 02:09:33'),
(116, 108, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-11 09:39:46', '2026-07-11 09:39:46'),
(117, 109, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-11 05:17:48', '2026-07-11 05:17:48'),
(118, 110, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-11 01:51:00', '2026-07-11 01:51:00'),
(119, 111, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-11 13:37:36', '2026-07-11 13:37:36'),
(120, 112, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-11 06:09:56', '2026-07-11 06:09:56'),
(121, 113, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-11 03:39:19', '2026-07-11 03:39:19'),
(122, 114, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-11 04:13:32', '2026-07-11 04:13:32'),
(123, 115, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-11 12:06:59', '2026-07-11 12:06:59'),
(124, 116, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-11 04:17:33', '2026-07-11 04:17:33'),
(125, 117, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-12 04:08:27', '2026-07-12 04:08:27'),
(126, 118, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-12 04:51:37', '2026-07-12 04:51:37'),
(127, 119, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-12 03:53:58', '2026-07-12 03:53:58'),
(128, 120, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-12 09:31:48', '2026-07-12 09:31:48'),
(129, 121, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-12 06:19:02', '2026-07-12 06:19:02'),
(130, 122, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-13 03:34:21', '2026-07-13 03:34:21'),
(131, 123, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-13 13:51:10', '2026-07-13 13:51:10'),
(132, 124, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-13 08:49:02', '2026-07-13 08:49:02'),
(133, 125, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-13 08:02:09', '2026-07-13 08:02:09'),
(134, 126, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-13 03:00:22', '2026-07-13 03:00:22'),
(135, 127, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-13 03:19:35', '2026-07-13 03:19:35'),
(136, 128, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-13 11:24:53', '2026-07-13 11:24:53'),
(137, 129, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-13 01:40:08', '2026-07-13 01:40:08'),
(138, 130, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-14 09:47:28', '2026-07-14 09:47:28'),
(139, 131, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-14 09:05:57', '2026-07-14 09:05:57'),
(140, 132, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-14 13:34:28', '2026-07-14 13:34:28'),
(141, 133, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-14 02:08:55', '2026-07-14 02:08:55'),
(142, 134, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-14 09:22:44', '2026-07-14 09:22:44'),
(143, 135, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-14 08:05:08', '2026-07-14 08:05:08'),
(144, 136, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-14 02:44:48', '2026-07-14 02:44:48'),
(145, 137, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-15 09:58:57', '2026-07-15 09:58:57'),
(146, 138, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-15 04:23:33', '2026-07-15 04:23:33'),
(147, 139, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-15 07:59:44', '2026-07-15 07:59:44'),
(148, 140, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-15 09:18:54', '2026-07-15 09:18:54'),
(149, 141, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-15 12:38:33', '2026-07-15 12:38:33'),
(150, 142, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-15 07:53:57', '2026-07-15 07:53:57'),
(151, 143, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-15 09:30:16', '2026-07-15 09:30:16'),
(152, 144, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-15 13:25:48', '2026-07-15 13:25:48'),
(153, 145, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-15 03:49:53', '2026-07-15 03:49:53'),
(154, 146, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-15 08:00:44', '2026-07-15 08:00:44'),
(155, 147, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-15 01:32:12', '2026-07-15 01:32:12'),
(156, 148, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-15 03:59:22', '2026-07-15 03:59:22'),
(157, 149, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-16 03:19:15', '2026-07-16 03:19:15'),
(158, 150, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-16 08:23:11', '2026-07-16 08:23:11'),
(159, 151, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-16 12:07:00', '2026-07-16 12:07:00'),
(160, 152, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-16 06:26:49', '2026-07-16 06:26:49'),
(161, 153, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-16 12:08:56', '2026-07-16 12:08:56'),
(162, 154, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-16 08:17:09', '2026-07-16 08:17:09'),
(163, 155, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-16 11:23:57', '2026-07-16 11:23:57'),
(164, 156, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-16 03:26:23', '2026-07-16 03:26:23'),
(165, 157, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-16 13:42:36', '2026-07-16 13:42:36'),
(166, 158, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-16 07:26:44', '2026-07-16 07:26:44'),
(167, 159, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-16 11:51:45', '2026-07-16 11:51:45'),
(168, 160, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-16 02:33:54', '2026-07-16 02:33:54'),
(169, 161, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-16 02:42:25', '2026-07-16 02:42:25'),
(170, 162, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-16 09:50:50', '2026-07-16 09:50:50'),
(171, 163, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-17 06:56:55', '2026-07-17 06:56:55'),
(172, 164, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-17 10:35:16', '2026-07-17 10:35:16'),
(173, 165, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-17 08:13:29', '2026-07-17 08:13:29'),
(174, 166, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-17 12:49:36', '2026-07-17 12:49:36'),
(175, 167, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-17 03:32:41', '2026-07-17 03:32:41'),
(176, 168, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-18 06:52:10', '2026-07-18 06:52:10'),
(177, 169, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-18 09:01:45', '2026-07-18 09:01:45'),
(178, 170, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-18 03:05:14', '2026-07-18 03:05:14'),
(179, 171, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-18 02:36:27', '2026-07-18 02:36:27'),
(180, 172, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-18 08:42:24', '2026-07-18 08:42:24'),
(181, 173, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-18 09:39:02', '2026-07-18 09:39:02'),
(182, 174, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-18 06:30:41', '2026-07-18 06:30:41'),
(183, 175, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-18 04:42:47', '2026-07-18 04:42:47'),
(184, 176, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-18 05:18:47', '2026-07-18 05:18:47'),
(185, 177, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-18 07:56:02', '2026-07-18 07:56:02'),
(186, 178, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-18 13:49:12', '2026-07-18 13:49:12'),
(187, 179, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-18 02:40:26', '2026-07-18 02:40:26'),
(188, 180, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-19 10:08:42', '2026-07-19 10:08:42'),
(189, 181, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-19 02:23:04', '2026-07-19 02:23:04'),
(190, 182, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-19 03:31:16', '2026-07-19 03:31:16'),
(191, 183, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-19 05:25:10', '2026-07-19 05:25:10'),
(192, 184, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-19 04:26:39', '2026-07-19 04:26:39'),
(193, 185, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-19 08:15:12', '2026-07-19 08:15:12'),
(194, 186, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-19 11:01:18', '2026-07-19 11:01:18'),
(195, 187, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-19 06:52:36', '2026-07-19 06:52:36'),
(196, 188, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-19 04:25:56', '2026-07-19 04:25:56'),
(197, 189, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-19 05:58:36', '2026-07-19 05:58:36'),
(198, 190, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-20 11:08:11', '2026-07-20 11:08:11'),
(199, 191, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-20 03:14:12', '2026-07-20 03:14:12'),
(200, 192, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-20 03:09:19', '2026-07-20 03:09:19'),
(201, 193, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-20 13:47:46', '2026-07-20 13:47:46'),
(202, 194, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-20 06:33:11', '2026-07-20 06:33:11'),
(203, 195, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-20 14:26:37', '2026-07-20 14:26:37'),
(204, 196, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-20 11:43:25', '2026-07-20 11:43:25'),
(205, 197, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-20 11:03:52', '2026-07-20 11:03:52'),
(206, 198, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-20 02:15:46', '2026-07-20 02:15:46'),
(207, 199, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-20 01:02:20', '2026-07-20 01:02:20'),
(208, 200, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-20 09:08:02', '2026-07-20 09:08:02'),
(209, 201, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-20 12:27:50', '2026-07-20 12:27:50'),
(210, 202, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-20 03:14:12', '2026-07-20 03:14:12'),
(211, 203, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-20 02:04:52', '2026-07-20 02:04:52'),
(212, 204, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-21 01:02:12', '2026-07-21 01:02:12'),
(213, 205, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-21 03:41:20', '2026-07-21 03:41:20'),
(214, 206, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-21 10:49:59', '2026-07-21 10:49:59'),
(215, 207, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-21 06:52:36', '2026-07-21 06:52:36'),
(216, 208, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-21 14:42:00', '2026-07-21 14:42:00'),
(217, 209, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-22 09:51:01', '2026-07-22 09:51:01'),
(218, 210, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-22 13:16:18', '2026-07-22 13:16:18'),
(219, 211, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-22 09:38:08', '2026-07-22 09:38:08'),
(220, 212, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-22 01:47:20', '2026-07-22 01:47:20'),
(221, 213, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-22 12:52:19', '2026-07-22 12:52:19'),
(222, 214, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-22 08:59:44', '2026-07-22 08:59:44'),
(223, 215, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-22 03:32:41', '2026-07-22 03:32:41'),
(224, 216, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-23 12:10:29', '2026-07-23 12:10:29'),
(225, 217, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-23 13:28:24', '2026-07-23 13:28:24'),
(226, 218, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-23 13:42:35', '2026-07-23 13:42:35'),
(227, 219, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-23 14:38:09', '2026-07-23 14:38:09'),
(228, 220, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-23 08:20:08', '2026-07-23 08:20:08'),
(229, 221, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-23 13:09:47', '2026-07-23 13:09:47'),
(230, 222, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-23 11:47:07', '2026-07-23 11:47:07'),
(231, 223, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-23 01:05:42', '2026-07-23 01:05:42'),
(232, 224, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-24 06:59:46', '2026-07-24 06:59:46'),
(233, 225, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-24 05:35:33', '2026-07-24 05:35:33'),
(234, 226, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-24 05:40:37', '2026-07-24 05:40:37'),
(235, 227, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-24 07:09:39', '2026-07-24 07:09:39'),
(236, 228, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-24 02:58:52', '2026-07-24 02:58:52'),
(237, 229, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-24 04:46:29', '2026-07-24 04:46:29'),
(238, 230, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-24 11:20:55', '2026-07-24 11:20:55'),
(239, 231, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-24 09:31:23', '2026-07-24 09:31:23'),
(240, 232, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-24 04:05:59', '2026-07-24 04:05:59'),
(241, 233, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-24 14:24:38', '2026-07-24 14:24:38'),
(242, 234, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-25 09:42:08', '2026-07-25 09:42:08'),
(243, 235, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-25 11:08:05', '2026-07-25 11:08:05'),
(244, 236, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-25 01:37:33', '2026-07-25 01:37:33'),
(245, 237, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-25 14:13:22', '2026-07-25 14:13:22'),
(246, 238, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-25 08:18:49', '2026-07-25 08:18:49'),
(247, 239, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-25 11:48:39', '2026-07-25 11:48:39'),
(248, 240, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-25 05:39:47', '2026-07-25 05:39:47'),
(249, 241, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-26 01:40:58', '2026-07-26 01:40:58'),
(250, 242, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-26 07:27:46', '2026-07-26 07:27:46'),
(251, 243, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-26 11:16:25', '2026-07-26 11:16:25'),
(252, 244, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-26 10:55:02', '2026-07-26 10:55:02'),
(253, 245, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-26 11:18:50', '2026-07-26 11:18:50'),
(254, 246, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-26 06:35:59', '2026-07-26 06:35:59'),
(255, 247, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-26 10:29:54', '2026-07-26 10:29:54'),
(256, 248, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-26 04:00:14', '2026-07-26 04:00:14'),
(257, 249, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-26 14:36:02', '2026-07-26 14:36:02'),
(258, 250, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-26 13:47:21', '2026-07-26 13:47:21'),
(259, 251, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-27 01:56:38', '2026-07-27 01:56:38'),
(260, 252, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-27 05:16:32', '2026-07-27 05:16:32'),
(261, 253, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-27 10:10:41', '2026-07-27 10:10:41'),
(262, 254, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-27 03:47:37', '2026-07-27 03:47:37'),
(263, 255, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-27 07:35:43', '2026-07-27 07:35:43'),
(264, 256, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-27 14:26:48', '2026-07-27 14:26:48'),
(265, 257, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-27 04:09:04', '2026-07-27 04:09:04'),
(266, 258, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-28 10:53:49', '2026-07-28 10:53:49'),
(267, 259, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-28 02:44:55', '2026-07-28 02:44:55'),
(268, 260, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-28 06:35:38', '2026-07-28 06:35:38'),
(269, 261, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-28 11:08:22', '2026-07-28 11:08:22'),
(270, 262, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-28 06:34:08', '2026-07-28 06:34:08'),
(271, 263, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-28 07:06:20', '2026-07-28 07:06:20'),
(272, 264, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-28 02:27:19', '2026-07-28 02:27:19'),
(273, 265, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-28 11:03:26', '2026-07-28 11:03:26'),
(274, 266, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-28 06:29:27', '2026-07-28 06:29:27'),
(275, 267, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-28 13:57:31', '2026-07-28 13:57:31'),
(276, 268, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-29 11:06:31', '2026-07-29 11:06:31'),
(277, 269, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-29 08:17:55', '2026-07-29 08:17:55'),
(278, 270, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-29 12:28:45', '2026-07-29 12:28:45'),
(279, 271, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-29 12:21:05', '2026-07-29 12:21:05'),
(280, 272, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-29 12:46:02', '2026-07-29 12:46:02'),
(281, 273, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-29 02:10:13', '2026-07-29 02:10:13'),
(282, 274, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-29 02:40:50', '2026-07-29 02:40:50'),
(283, 275, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-29 12:12:39', '2026-07-29 12:12:39'),
(284, 276, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-29 14:02:12', '2026-07-29 14:02:12'),
(285, 277, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-29 02:58:44', '2026-07-29 02:58:44'),
(286, 278, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-29 14:23:03', '2026-07-29 14:23:03'),
(287, 279, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-30 07:32:37', '2026-07-30 07:32:37'),
(288, 280, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-30 02:24:38', '2026-07-30 02:24:38'),
(289, 281, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-30 13:00:31', '2026-07-30 13:00:31'),
(290, 282, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-30 10:42:24', '2026-07-30 10:42:24'),
(291, 283, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-30 03:23:05', '2026-07-30 03:23:05'),
(292, 284, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-30 11:05:33', '2026-07-30 11:05:33'),
(293, 285, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-30 13:32:27', '2026-07-30 13:32:27'),
(294, 286, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-30 02:39:04', '2026-07-30 02:39:04'),
(295, 287, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-30 02:40:04', '2026-07-30 02:40:04'),
(296, 288, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-30 04:41:12', '2026-07-30 04:41:12'),
(297, 289, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-30 08:19:27', '2026-07-30 08:19:27'),
(298, 290, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-30 03:09:51', '2026-07-30 03:09:51'),
(299, 291, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-30 05:10:28', '2026-07-30 05:10:28'),
(300, 292, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-31 11:12:34', '2026-07-31 11:12:34'),
(301, 293, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-31 02:37:34', '2026-07-31 02:37:34'),
(302, 294, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-07-31 09:00:48', '2026-07-31 09:00:48'),
(303, 295, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-31 10:57:23', '2026-07-31 10:57:23'),
(304, 296, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-07-31 01:20:48', '2026-07-31 01:20:48'),
(305, 297, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-31 14:39:58', '2026-07-31 14:39:58'),
(306, 298, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-07-31 08:19:53', '2026-07-31 08:19:53'),
(307, 299, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-08-01 01:48:34', '2026-08-01 01:48:34'),
(308, 300, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-08-01 03:18:16', '2026-08-01 03:18:16'),
(309, 301, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-08-01 02:34:05', '2026-08-01 02:34:05'),
(310, 302, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-08-01 06:20:20', '2026-08-01 06:20:20'),
(311, 303, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-08-01 03:25:48', '2026-08-01 03:25:48'),
(312, 304, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-08-02 07:19:27', '2026-08-02 07:19:27'),
(313, 305, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-08-02 05:31:04', '2026-08-02 05:31:04'),
(314, 306, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-08-02 05:42:29', '2026-08-02 05:42:29'),
(315, 307, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-08-02 02:32:59', '2026-08-02 02:32:59'),
(316, 308, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-08-02 06:45:00', '2026-08-02 06:45:00'),
(317, 309, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-08-02 05:36:26', '2026-08-02 05:36:26'),
(318, 310, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-08-02 12:27:04', '2026-08-02 12:27:04'),
(319, 311, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-08-02 12:34:48', '2026-08-02 12:34:48'),
(320, 312, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-08-03 07:41:47', '2026-08-03 07:41:47'),
(321, 313, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-08-03 03:14:35', '2026-08-03 03:14:35'),
(322, 314, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-08-03 04:29:23', '2026-08-03 04:29:23'),
(323, 315, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-08-03 02:06:38', '2026-08-03 02:06:38'),
(324, 316, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-08-03 13:45:54', '2026-08-03 13:45:54'),
(325, 317, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-08-03 10:17:57', '2026-08-03 10:17:57'),
(326, 318, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-08-03 09:22:18', '2026-08-03 09:22:18'),
(327, 319, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-08-03 11:28:14', '2026-08-03 11:28:14'),
(328, 320, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-08-03 02:36:54', '2026-08-03 02:36:54'),
(329, 321, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-08-04 14:23:50', '2026-08-04 14:23:50'),
(330, 322, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-08-04 07:07:16', '2026-08-04 07:07:16'),
(331, 323, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-08-04 14:41:51', '2026-08-04 14:41:51'),
(332, 324, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-08-04 08:13:22', '2026-08-04 08:13:22'),
(333, 325, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-08-04 01:04:59', '2026-08-04 01:04:59'),
(334, 326, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-08-04 01:31:56', '2026-08-04 01:31:56'),
(335, 327, 47, 'MI ayam', '2500.00', '0.00', 2, '5000.00', '5000.00', '2026-08-04 04:31:23', '2026-08-04 04:31:23'),
(336, 328, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-08-05 02:56:29', '2026-08-05 02:56:29'),
(337, 329, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-08-05 12:41:45', '2026-08-05 12:41:45'),
(338, 330, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-08-05 06:53:19', '2026-08-05 06:53:19'),
(339, 331, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-08-05 11:06:49', '2026-08-05 11:06:49'),
(340, 332, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-08-05 02:24:42', '2026-08-05 02:24:42'),
(341, 333, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-08-05 07:50:52', '2026-08-05 07:50:52'),
(342, 334, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-08-05 06:49:28', '2026-08-05 06:49:28'),
(343, 335, 47, 'MI ayam', '2500.00', '0.00', 1, '2500.00', '2500.00', '2026-08-05 01:39:40', '2026-08-05 01:39:40'),
(344, 336, 47, 'MI ayam', '2500.00', '0.00', 3, '7500.00', '7500.00', '2026-08-05 12:55:37', '2026-08-05 12:55:37'),
(345, 338, 48, 'Samyang Carbonara', '22000.00', '0.00', 2, '44000.00', '44000.00', '2026-08-05 03:45:53', '2026-08-05 03:45:53'),
(346, 339, 62, 'Gatsby Styling Pomade', '28000.00', '0.00', 15, '420000.00', '420000.00', '2026-08-05 03:47:42', '2026-08-05 03:47:42'),
(347, 340, 71, 'Baygon Aerosol 600ml', '35000.00', '0.00', 2, '70000.00', '70000.00', '2026-08-05 03:48:27', '2026-08-05 03:48:27'),
(348, 341, 71, 'Baygon Aerosol 600ml', '35000.00', '0.00', 19, '665000.00', '665000.00', '2026-08-05 03:50:38', '2026-08-05 03:50:38');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `display_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `display_id`, `name`, `email`, `avatar`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'USR-9033989', 'Naafiri', 'sulkerkiwe@gmail.com', '/storage/avatars/saNDlo822NCyGHatCLtHhmIBjSZneQkBtq0NfSxE.jpg', '2026-07-05 18:54:01', '$2y$12$OJttGpZpZx2fU9sx/W3kSOjYo2jQovn1PXRwltxAnKcyOiXLOBtfa', 'HwHMh6rVGdqSxFRmlRc5QZFizlEdLs5QwZiMTPstMuwRuMClSybMbEEQnI1c', '2026-07-05 18:45:28', '2026-09-15 13:07:09', NULL),
(6, 'USR-6181735', 'Agus', 'sungutlelew@gmail.com', NULL, NULL, '$2y$12$BEWP/E9V3EVJhpIXQu0Hr.VzCjplzHqnnPcjdhVoNyGMz2.8tIB1S', 'kkTq9nw0SrnnEO6VVbhe8CMY41aKcyd7J2KNQUMedIdXV6FpIj6t2LZ24Vhi', '2026-08-03 06:11:26', '2026-09-15 13:05:29', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity_logs`
--
ALTER TABLE `activity_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `activity_logs_user_id_foreign` (`user_id`);

--
-- Indexes for table `attendances`
--
ALTER TABLE `attendances`
  ADD PRIMARY KEY (`id`),
  ADD KEY `attendances_user_id_foreign` (`user_id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_expiration_index` (`expiration`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_locks_expiration_index` (`expiration`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category_product`
--
ALTER TABLE `category_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_product_category_id_foreign` (`category_id`),
  ADD KEY `category_product_product_id_foreign` (`product_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `products_sku_unique` (`sku`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `stock_transfers`
--
ALTER TABLE `stock_transfers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `stock_transfers_product_id_foreign` (`product_id`),
  ADD KEY `stock_transfers_user_id_foreign` (`user_id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `transactions_invoice_number_unique` (`invoice_number`),
  ADD KEY `transactions_user_id_foreign` (`user_id`);

--
-- Indexes for table `transaction_items`
--
ALTER TABLE `transaction_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transaction_items_transaction_id_foreign` (`transaction_id`),
  ADD KEY `transaction_items_product_id_foreign` (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_display_id_unique` (`display_id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity_logs`
--
ALTER TABLE `activity_logs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `attendances`
--
ALTER TABLE `attendances`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `category_product`
--
ALTER TABLE `category_product`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `stock_transfers`
--
ALTER TABLE `stock_transfers`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=342;

--
-- AUTO_INCREMENT for table `transaction_items`
--
ALTER TABLE `transaction_items`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=349;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activity_logs`
--
ALTER TABLE `activity_logs`
  ADD CONSTRAINT `activity_logs_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `attendances`
--
ALTER TABLE `attendances`
  ADD CONSTRAINT `attendances_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `category_product`
--
ALTER TABLE `category_product`
  ADD CONSTRAINT `category_product_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `category_product_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `stock_transfers`
--
ALTER TABLE `stock_transfers`
  ADD CONSTRAINT `stock_transfers_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `stock_transfers_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `transaction_items`
--
ALTER TABLE `transaction_items`
  ADD CONSTRAINT `transaction_items_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `transaction_items_transaction_id_foreign` FOREIGN KEY (`transaction_id`) REFERENCES `transactions` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

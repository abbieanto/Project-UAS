-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 05 Des 2022 pada 03.39
-- Versi server: 10.4.18-MariaDB
-- Versi PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bioskop_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `snack`
--

CREATE TABLE `snack` (
  `nama_snack` varchar(25) NOT NULL,
  `jumlah` int(25) DEFAULT NULL,
  `harga` int(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `snack`
--

INSERT INTO `snack` (`nama_snack`, `jumlah`, `harga`) VALUES
('Chicken Nugget', 1, 30000),
('Fish n Chip', 1, 45000),
('French Fries', 2, 50000),
('Green Tea', 2, 44000),
('Lemon Tea', 1, 22000),
('Popcorn(L)', 1, 45000),
('Popcorn(M)', 2, 60000),
('Soft Drink', 3, 75000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tiket1`
--

CREATE TABLE `tiket1` (
  `nama_film` varchar(30) CHARACTER SET latin1 DEFAULT NULL,
  `tiket_id` varchar(30) NOT NULL,
  `jumlah` int(30) DEFAULT NULL,
  `harga_tiket` int(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tiket1`
--

INSERT INTO `tiket1` (`nama_film`, `tiket_id`, `jumlah`, `harga_tiket`) VALUES
('iron man', '001', 1, 45000),
('Avenger', '002', 5, 200000),
('avatar', '003', 1, 45000),
('mission impossible', '004', 3, 135000),
('harry potter', '005', 2, 90000);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `snack`
--
ALTER TABLE `snack`
  ADD PRIMARY KEY (`nama_snack`);

--
-- Indeks untuk tabel `tiket1`
--
ALTER TABLE `tiket1`
  ADD PRIMARY KEY (`tiket_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

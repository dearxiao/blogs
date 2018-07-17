<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Qo$^bU4rA<x)_2I.0X(;b!1YDJbzo :k_):2E1`!#Unk>ON))T?1a3lo_q^CsO8H');
define('SECURE_AUTH_KEY',  ',&_+xXiRMzlJg84=N)H1vVP&ronH-TMUs2r`bSwA1CWHh><PF})bi1B5Z#r;)|Za');
define('LOGGED_IN_KEY',    ')nM-fdgs(O>,*C4B[<EBW;`.d1~4A*a^,5+a/VV$ 7a6#Ew5P]*D!A=i}Hzb1y]<');
define('NONCE_KEY',        'SM]6@:?drclEqgUHCOk:kW,c.;?MpOnHP<&ZsEGdC*8,(k`M420K(Nr?=jF/I{1U');
define('AUTH_SALT',        'e*WR~6z9Z@Pp3kzDGhcAG5NY^Ra)=vxil!b!#VnL/.Y|abu!dW(4z&V]k+I7).+.');
define('SECURE_AUTH_SALT', ';@W|2JZ-pN$KiD^j6$if<UJ]kQOex{IdcgX_q bl[Ogsxx;!u?-tIe9RFX~=*pA]');
define('LOGGED_IN_SALT',   'H~^ /a0!g*y*dfpqK}AtI)MLrX.GT2LRDW=!;KrNS[JR8S%RecO():8@YP{A%7Wm');
define('NONCE_SALT',       '59/bCF8W-sp&,BXlrAwbA .f&s{=u(`H/__Tx@Bh_-e+F@M2:-)aEKX4v<UeiQE<');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

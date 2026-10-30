---
title: "Solved, Error CodeIgniter 3 dengan HMVC di PHP 7"
date: "2020-09-15"
---

[CodeIgniter](https://codeigniter.com) itu framework PHP yang ringan banget tapi tetap powerful, cocok buat developer yang butuh toolkit simpel dan rapi buat bikin aplikasi web yang fiturnya lengkap.

Kalau kamu pakai CodeIgniter 3 bareng Modular Extensions (HMVC) di PHP 7, kemungkinan kamu bakal ketemu error kayak gini:

> Message: strpos(): Non-string needles will be interpreted as strings in the future. Use an explicit chr() call to preserve the current behavior

Penyebabnya, kalau `controller_suffix` nggak diisi di config, nilai `$suffix` jadi kosong, padahal nilai itu langsung dioper ke `strpos()` sebagai "needle". PHP 7 nggak suka kalau needle-nya bukan string, makanya muncul peringatan di atas.

Solusinya gampang. Buka `application/third_party/MX/Router.php`, cari baris 239 yang isinya kayak gini:

```php
public function set_class($class)
{
  $suffix = $this->config->item('controller_suffix');
  if (strpos($class, $suffix) === FALSE)
  {
    $class .= $suffix;
  }
  parent::set_class($class);
}
```

Terus ubah jadi begini, cukup tambahin pengecekan `$suffix &&` sebelum `strpos()`:

```php
public function set_class($class)
{
  $suffix = $this->config->item('controller_suffix');
  if($suffix && strpos($class, $suffix) === FALSE)
  {
    $class .= $suffix;
  }
  parent::set_class($class);
}
```

Simpan, refresh, dan error-nya harusnya udah hilang.

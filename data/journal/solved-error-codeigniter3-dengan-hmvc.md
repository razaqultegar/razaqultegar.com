---
title: Solved, Error CodeIgniter 3 dengan HMVC
description: CodeIgniter adalah kerangka kerja PHP yang kuat dengan footprint yang sangat kecil, dibangun untuk pengembang yang membutuhkan toolkit sederhana dan elegan untuk membuat aplikasi web berfitur lengkap.
slug: solved-error-codeigniter3-dengan-hmvc
date: 09 November 2020
---

[CodeIgniter](https://codeigniter.com) adalah kerangka kerja PHP yang kuat dengan footprint yang sangat kecil, dibangun untuk pengembang yang membutuhkan toolkit sederhana dan elegan untuk membuat aplikasi web berfitur lengkap.

Jika Anda menggunakan Codeigniter 3 dengan Modular Extensions/HMVC pada PHP versi 7, Anda mungkin melihat kesalahan berikut:

> Message: strpos(): Non-string needles will be interpreted as strings in the future. Use an explicit chr() call to preserve the current behavior

Cukup ubah baris ke 239 di `application/third_party/MX/Router.php`:

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

menjadi seperti ini:

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

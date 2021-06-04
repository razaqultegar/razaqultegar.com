---
title: Solved, iReport tidak berfungsi pada mode JAR
description: Masalah inti Kode di atas adalah kode standar untuk memanggil iReport di Java Netbeans, ada banyak situs tutorial yang menyarankan kode itu.
slug: solved-ireport-tidak-berfungsi-pada-mode-jar
date: August 13, 2019
---

## Inti Permasalahan

```java
try{
    String namaFile ="src/Laporan/reportco.jasper";
    HashMap parameter = new HashMap();
    File report_file = new File (namaFile);
    JasperReport jasperReport = (JasperReport) JRLoader.loadObject(report_file);
    JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport,parameter,con);
    JasperViewer.viewReport(jasperPrint,false);
    JasperViewer.setDefaultLookAndFeelDecorated(true);
}catch (JRException e){
    JOptionPane.showMessageDialog(null, e.getMessage());
}
```

Kode di atas adalah kode standar untuk memanggil iReport di Java Netbeans, ada banyak situs tutorial yang menyarankan kode itu. Namun, ada kesalahan yang menurut saya paling fatal di bagian `File report_file = new File (filename);`.

Ketika aplikasi dijalankan melalui Netbeans, skrip panggilan berfungsi dengan baik. Namun ketika aplikasi anda sudah diexectuble menjadi file Jar, script tersebut tidak berfungsi sama sekali dan muncul pesan error `java.io.FileNotFoundException` yang berarti file jasper Anda tidak ditemukan.

![Screenshot](/journal/solved-ireport-doesnt-work-on-jar-mode/screenshot.png)

## Troubleshooting

Untuk mengatasi masalah ini Anda harus mengganti bagian fatal sebagai berikut.

```java
try{
    // String namaFile ="src/Laporan/reportco.jasper";
    HashMap parameter = new HashMap();
    // File report_file = new File (namaFile);
    InputStream report_file = getClass().getResourceAsStream("/src/Laporan/reportco.jasper");
    JasperReport jasperReport = (JasperReport) JRLoader.loadObject(report_file);
    JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport,parameter,con);
    JasperViewer.viewReport(jasperPrint,false);
    JasperViewer.setDefaultLookAndFeelDecorated(true);
}catch (JRException e){
    JOptionPane.showMessageDialog(null, e.getMessage());
}
```

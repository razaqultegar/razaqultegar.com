---
title: 'Solved! iReport tidak berfungsi dimode JAR'
image: /medias/thumbnail-netbeans.png
imageHeight: 500px
imageSize: contain
date: 2019-08-13T00:00:00.000Z
path: /jurnal/solved-ireport-tidak-fungsi-di-mode-jar
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

Kode diatas merupakan kode standart untuk pemanggilan iReport di Java Netbeans, banyak sekali situs-situs tutorial yang menyarankan kode tersebut. Tapi, ada kesalahan yang menurut saya paling fatal disitu yakni ada di bagian `File report_file = new File (namaFile);`.

Ketika aplikasi/program di jalankan melalui Netbeans, script pemanggilan itu berfungsi dengan baik. Namun, ketika aplikasi/program kamu sudah diexectuble menjadi sebuah file Jar, script itu tidak berfungsi sama sekali dan muncul pesan error `java.io.FileNotFoundException` yang berarti file jasper kamu tidak ditemukan.

## Pemecahan Masalah

Untuk mengatasi permasalahan tersebut kamu harus mengganti bagian yang fatal itu menjadi seperti berikut.

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

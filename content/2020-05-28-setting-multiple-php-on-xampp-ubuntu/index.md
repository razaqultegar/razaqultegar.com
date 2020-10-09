---
thumbnail: thumbnail-ubuntu.png
title: 'Setting, Multiple PHP on XAMPP Ubuntu'
date: 2020-05-28T00:00:00.000Z
category:
    - ubuntu
slug: setting-multiple-php-on-xampp-ubuntu
layout: post
---

## The core problem

If you have installed XAMPP with PHP version 5.x, by default applications created using PHP version 7.x cannot be run / there is an error message. Because, there are significant differences in the two versions.

## Troubleshooting

To be able to install 2 XAMPP applications with different PHP versions on Ubuntu, the first step that must be done is to change the name of the default lampp folder.

1. Enter the `/opt` directory (where the XAMPP folder is located)

   ```bash
   cd /opt
   sudo mv lampp/lampp5
   # or
   sudo mv lampp/lampp7
   ```

1. Download XAMPP

   ```bash
   cd ~
   wget https://nchc.dl.sourceforge.net/project/xampp/XAMPP%20Linux/5.6.40/xampp-linux-x64-5.6.40-1-installer.run
   # or
   wget https://jaist.dl.sourceforge.net/project/xampp/XAMPP%20Linux/7.4.6/xampp-linux-x64-7.4.6-0-installer.run
   ```

1. Install XAMPP (Before performing the XAMPP installation process, make sure the first step has been done).

   ```bash
   sudo chmod +x xampp-linux-x64-5.6.40-1-installer.run
   sudo ./xampp-linux-x64-5.6.40-1-installer.run
   # or
   sudo chmod +x xampp-linux-x64-7.4.6-0-installer.run
   sudo ./xampp-linux-x64-7.4.6-0-installer.run
   ```
   
1. Configuration

   Running XAMPP PHP version 5.6

   ```bash
   sudo rm -rf /opt/lampp
   sudo ln -s /opt/lampp5/ lampp
   sudo /opt/lampp/lampp start
   ```

   Runs XAMPP PHP version 7.4

   ```bash
   sudo rm -rf /opt/lampp
   sudo ln -s /opt/lampp7/ lampp
   sudo /opt/lampp/lampp start
   ```
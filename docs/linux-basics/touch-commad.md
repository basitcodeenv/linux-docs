---
sidebar_position: 5
sidebar_label: Touch Command
slug: touch-command-usage-and-examples
---

# How to Use the Touch Linux Command + Examples

**VPS** &nbsp; May 19, 2022 &nbsp; Edward S. &nbsp; 4min Read

Touch command is a [Linux command](/tutorials/linux-commands) is mainly used to create empty files, and change timestamps of files or folders. The timestamp information of files consists of three attributes – access time, modification time, and change time.

[Download Complete Linux Commands Cheat Sheet](https://app.monstercampaigns.com/c/jg9u9k0by4lj9pvcjeso/)

This tutorial will explain the Linux touch command, its options, and usages while providing useful examples.

- [How to Use the Touch Linux Command + Examples](#how-to-use-the-touch-linux-command--examples)
  - [What is a Timestamp in Linux](#what-is-a-timestamp-in-linux)
  - [Linux Touch Command Syntax](#linux-touch-command-syntax)
    - [Create a File Using Touch](#create-a-file-using-touch)
    - [Create Multiple Files Using Touch](#create-multiple-files-using-touch)
    - [Change Access Time Using Touch](#change-access-time-using-touch)
    - [Change Modification Time Using Touch](#change-modification-time-using-touch)
    - [Change Access and Modification Time Using Touch](#change-access-and-modification-time-using-touch)
    - [Change Access Time without Creating a New File](#change-access-time-without-creating-a-new-file)
    - [Set Specific Access and Modification Time Using Touch](#set-specific-access-and-modification-time-using-touch)
    - [Change the Timestamp of a Symbolically Linked File](#change-the-timestamp-of-a-symbolically-linked-file)
    - [Set the Timestamp by Using Another File as Reference](#set-the-timestamp-by-using-another-file-as-reference)
    - [Specify Date and Time as a String Using Touch](#specify-date-and-time-as-a-string-using-touch)
  - [Conclusion](#conclusion)
      - [Learn More Linux Commands for File Management](#learn-more-linux-commands-for-file-management)

What is a Timestamp in Linux
----------------------------

In Linux, every file and folder has a timestamp associated with it that provides information about when a file’s content or its attributes were modified. There are three types of timestamps:

*   Access time (atime) – the last time a file was read
*   Modification time (mtime) – the last time a file’s content was modified. Like access time, it is also part of files status metadata
*   Changed time (ctime) – the last time metadata of a file was changed (e.g. permissions)

Since atime and mtime are part of a file’s status metadata, changing atime or mtime of a file results in ctime which automatically set to the current time. There is no way to set or change ctime manually. The Linux touch command is mainly used to manipulate the access and modification time of files by using various options as described below. Remember, before using the touch command you need to access your [VPS](https://www.hostinger.com/tutorials/what-is-vps-hosting) using [SSH](/tutorials/how-to-use-putty-ssh)!

Linux Touch Command Syntax
--------------------------

The syntax of the touch command is:

``` bash
touch [options] [file_name]
```

The following section lists the usages of the Linux touch command by including each options.

### Create a File Using Touch

The touch command without any options creates a new file. If the file exists, the touch command will update the access and modification to the current time without changing its content:

``` bash
touch file_name.txt
```

### Create Multiple Files Using Touch

It is also possible to create multiple files by using a single touch command. To do that, specify the names of the files with spaces between them. It woul look like this in the command line:

``` bash
touch file_name1.txt file_name2.txt file_name3.txt
```

You can auto generate file names using curl braces while creating multiple files like in the following example:

``` bash
touch file_name{1..3}.txt
```

The above touch command will create three files named **file\_name1.txt**, **file\_name2.txt,** and **file\_name3.txt**.

### Change Access Time Using Touch

To change the access time of a file to the current time, use the **a** option followed by the file name with touch command like in the following example:

``` bash
touch -a file_name.txt
```

### Change Modification Time Using Touch

The **m** option along with the touch command changes the modification time of a file to the current time:

``` bash
touch -m file_name1.txt
```

### Change Access and Modification Time Using Touch

To change both access time and modification time with a single command use the options **a** and **m** together:

``` bash
touch -am file_name1.txt
```

### Change Access Time without Creating a New File

In some situation, you want to change the access and modification time of an existing file to the current time without actually creating a new file. To do that use the **c** option followed by the file name with touch command.

``` bash
touch -c file_name.txt
```

### Set Specific Access and Modification Time Using Touch

It is also possible to set access and modification time of a file to a particular date by using **t** option followed by datetime. It would look like this:

``` bash
touch -t 201903081047.30 file_name.txt
```

The datetime format must be in **CCYYMMDDhhmm.ss** where:

*   MM – The month of the year \[01-12\]
*   DD – The day of the month \[01-31\]
*   hh – The hour of the day \[00-23\]
*   mm – The minute of the hour \[00-59\]
*   CC – The first two digits of the year
*   YY – The second two digits of the year
*   SS – The second of the minute \[00-59\]

### Change the Timestamp of a Symbolically Linked File

When you use a symbolically linked file name with the Linux touch command, the timestamp information for the original file i.e the file which is pointed by the link file gets modified. To change the access and modification time to the current time for a symbolically linked file, use the **h** option:

``` bash
touch -h symbolic_link_file
```

### Set the Timestamp by Using Another File as Reference

The Linux touch command can also set the access and modification time of a file by reading the timestamp information from another file. For example, the following touch command with the **r** option will scan the timestamp information from **reference.txt** and set these timestamp values to **file\_name.txt**. Here’s an example of the command:

``` bash
touch -r reference.txt file_name.txt
```

### Specify Date and Time as a String Using Touch

You can also specify date and time as a string by using the **d** option. The following Linux touch command example sets the date to 8th March and the time is automatically set to 00:00

``` bash
touch -d '8 Mar' file_name.txt
```

Instead of specifying the date as a string, you can specify the time as a string. In that case, the date will be set to the current date automatically:

``` bash
touch -d '20:10' file_name.txt
```

Conclusion
----------

This tutorial covers the usages of the Linux touch command by including the most common options. For any difficulties related to the Linux touch command, you can invoke its manual page in the terminal!

#### Learn More Linux Commands for File Management

[How to Remove Files and Directories](/tutorials/how-to-remove-files-and-folders-using-linux-command-line/)  
[How to Locate a File](/tutorials/how-to-use-find-and-locate-commands-in-linux/)  
[How to Compress a File with Tar Command](/tutorials/linux-tar-command-with-examples/)  
[How to Change File Ownership with Chown Command](/tutorials/linux-chown-command/)  
[How to Unzip Files in Linux](/tutorials/how-to-unzip-files-linux/)  
[How to Change FIle Permissions with Chmod Command](/tutorials/vps/change-linux-permissions-and-owners)  
[How to Rename a File](/tutorials/how-to-rename-files-in-linux/)  
[How to Check File Type](/tutorials/linux-file-command/)  
[How to Create a Symbolic Link (Symlink)](/tutorials/how-to-create-symbolic-links-in-linux/)

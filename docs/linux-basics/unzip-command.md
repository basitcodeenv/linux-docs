---
sidebar_position: 15
sidebar_label: Unzip Command
slug: unzip-command-usage-and-examples
---
# How to Use Unzip in Linux

**VPS** &nbsp; Apr 28, 2022 &nbsp; Edward S. &nbsp; 5min Read

Zipping and unzipping files eases a lot of complicated tasks like file transfer! In this tutorial, you’ll learn how to use unzip using [Linux commands](/linux-basics/commands) to improve your [VPS](/tutorials/what-is-vps-hosting) workflow!

[Download Complete Linux Cheat Sheet](https://app.monstercampaigns.com/c/jg9u9k0by4lj9pvcjeso/)

Zip is a commonly used compression function which is portable and easy to use. You can even unzip files in Windows, that were created in Linux!

Unzip is a utility that is not available on most Linux flavors by default, but can be easily installed. By creating **.zip** files you can match [.tar.gz](/tutorials/linux-tar-command-with-examples/) file compression!

*   [What Is Zip Used For?](#What_Is_Zip_Used_For "What Is Zip Used For?")
*   [Debian and Ubuntu Systems](#Debian_and_Ubuntu_Systems "Debian and Ubuntu Systems")
*   [Install Unzip on Linux CentOS and Fedora](#Install_Unzip_on_Linux_CentOS_and_Fedora "Install Unzip on Linux CentOS and Fedora")
*   [How to Use Zip and Unzip in Linux](#How_to_Use_Zip_and_Unzip_in_Linux "How to Use Zip and Unzip in Linux")

## What Is Zip Used For?

Below are a few scenarios in which you may choose to use zip files:

*   When you are frequently working between Windows and [Unix based](http://www.unix.org/what_is_unix.html) systems. Not only does this compress files but also is a file package utility. Works on multiple operating systems
*   To save bandwidth. If you have limited or restricted bandwidth, then zip can be used between two servers for file transfer
*   Transfers files quickly. Zip utility reduces file size, therefore reducing transfer time
*   Upload or download directories at a faster speed
*   Save disk space
*   Unzip password protected **.zip** files
*   Enjoy a good compression ratio

Remember, before taking advantage of Unzip on Linux, you’ll have to [SSH](/tutorials/how-to-use-putty-ssh) into your virtual private server.

## Debian and Ubuntu Systems

Installing unzip is easy! With Ubuntu and Debian use the command below to install unzip:

``` bash
sudo apt install unzip
```

Sit back and wait a minute, until the installation is finished.

To create zip files, you’ll also have to install zip. You can do this with the following command:

``` bash
sudo apt-get install zip
```

## Install Unzip on Linux CentOS and Fedora

This again is simple and can be done using below command:

``` bash
sudo yum install unzip
```

Once the installation is complete you can check the path with the following command:

``` bash
which unzip
```

After you execute the direction in the command line, you should get an output that looks like this:

``` bash
/usr/bin/unzip
```

You can also confirm everything is installed properly by using the command bellow. It will give a verbose with unzip utility details.

``` bash
unzip -v
```

## How to Use Zip and Unzip in Linux

Now that we know how to install the utility, we can start learning the basic uses of it:

### Create Zip Files in Linux

The basic syntax to create a **.zip** file is:

``` bash
zip options zipfile list\_Of\_files
```

To test this, we created two files – **ExampleFile.txt** and **ExampleFile1.txt**. We’ll compress them into **sampleZipFile.zip** with the following command:

``` bash
zip sampleZipFile.zip ExampleFile.txt ExampleFile1.txt
```

### Using Linux to Unzip a file

The unzip command can be used without any options. This will unzip all files to the current directory. One such example is as shown below:

``` bash
unzip sampleZipFile.zip
```

This by default will be unzipped in the current folder provided you have read-write access.

### Remove a File from a .zip File

Once a **.zip** file is created, you can remove or delete files in it. So, if you want to remove **ExampleFile.txt** from the existing **sampleZipFile.zip**, then you can use the following command:

``` bash
zip –d sampleZipFile.zip ExampleFile.txt
```

Once this command is executed, you can unzip the .zip file using:

``` bash
unzip sampleZipFile.zip
```

Over here you will find that ExampleFile.txt has been removed and can’t be seen on extraction.

### How to Update Zip Files

Once a **.zip** file is created, you can add a new file to an existing **.zip** file. Suppose a new file **ExampleFile2.txt** needs to be added to the already existing **sampleZipFile.zip**. You can do this with the command shown below:

``` bash
zip –u sampleZipFile.zip ExampleFile2.txt
```

Now if you extract **sampleZipFile.zip**, you will find the new file **ExampleFile2.txt** added to it.

### Move a File to a Zip

You can easily move specific files to an the zip file. That means that after adding the files, they will be deleted from their original directories. This is mostly used when you have large file or directory, but need to conserve disk space. This is done by adding the **\-m** option. A sample of this command would be:

``` bash
zip –m sampleZipFile.zip ExampleFile2.txt
```

### Recursive Use of Zip on Linux

The **\-r** option is used to recursively zip files. This option will compress all the files present within a folder. An example of such command is as shown below:

``` bash
zip –r sampleZipFile.zip MyDirectory
```

In the example, MyDirectory is a directory which has multiple files and sub-directories to be zipped.

### Exclude Files in a Zip

While creating a **.zip** file, you can exclude unwanted files. This is done by using the **\-x** option. Below is an example:

``` bash
zip -x sampleZipFile.zip ExampleFile.txt
```

Here **ExampleFile.txt** will not be added to the **sampleZipFile.zip**.

### Unzip to a Different Directory

In case you do not want to unzip to the current directory but want to specify a directory location, then this can also be done. Use the **\-d** option to provide a directory path in the unzip command. An example of such command is as shown below:

``` bash
unzip sampleZipFile.zip -d /usr/sampleZip/ExampleDir
```

### Use Linux Unzip with Multiple Zip Files

If you want to unzip multiple zip files existing within your current working directory then you can use a command as shown below:

``` bash
unzip ‘*.zip’
```

This command will unzip all the individual zip files.

### Suppress Output When Using Unzip in Linux

By default, when we use the unzip command, the command prints list of all the files that are getting extracted. A summary of the extraction process is printed. In case you want to suppress these messages, then you can use the **\-q** option. The command would be as shown below:

``` bash
unzip -q sampleZipFile.zip
```

### Exclude Files Using Unzip in Linux

In case you want to extract all files except for one, then you can use a similar command as shown below:

``` bash
unzip sampleZipFile.zip -x excludedFile.txt
```

Here the command will unzip all files except **excludedFile.txt**.

You can also prevent specific file types from getting extracted. One such example is as shown below:

``` bash
unzip sampleZipFile.zip -x "*.png/*"
```

The above command will exclude all **.png** files from being extracted.

### Using Unzip in Linux with Password Protected Files

A password protected **.zip** file can be decompressed using the -P option. A sample of such command is as shown below:

``` bash
unzip -P Password sampleZipFile.zip
```

In the above command, Password will be the password for the **.zip** file.

### Overriding Zip Files

When you unzip the same file again in the same location where the file was extracted, by default you will encounter a message asking whether you want to overwrite the current file, overwrite all files, skip extraction for the current file, skip extraction for all files or rename current file.

The options would be as shown below:

\[y\]es, \[n\]o, \[A\]ll, \[N\]one, \[r\]ename

You can override these files by using the **\-o** options. One such example is as shown below:

``` bash
unzip -o sampleZipFile.zip
```

Caution should be taken while executing this command since this will completely overwrite the existing copies. Any changes made in the earlier copy will be overwritten.

### Using Linux Unzip Without Overwriting Files

If you have unzipped a file and made some changes but you accidentally deleted a few files, then you can use this approach to restore it! Use the **\-n** option to skip the extraction in case a file already exists. So effectively only files which do not exist will be extracted. An example of such a command is:

``` bash
unzip -n sampleZipFile.zip
```

### How to List the Content of a Zip in Linux

The **\-l** option will list all the files within the **.zip** along with the timestamp and other basic details. An example of such command is:

``` bash
unzip -l sampleZipFile.zip
```

## Conclusion

That’s it, you’re introduced to all the essential functions of the zip and unzip Linux utilities. Start improving your file management right now!

#### Learn More Linux Commands for File Management

[How to Remove Files and Directories](/docs/linux-basics/rmdir-command-usage-and-examples)  
[How to Create an Empty File](/docs/linux-basics/touch-command-usage-and-examples)  
[How to Locate a File](/docs/linux-basics/find-command-usage-and-examples/)  
[How to Compress a File with Tar Command](/tutorials/linux-tar-command-with-examples/)  
[How to Change File Ownership with Chown Command](/docs/linux-basics/chown-command-usage-and-examples/)  
[How to Change FIle Permissions with Chmod Command](/docs/linux-basics/change-linux-permissions-and-owners/)  
[How to Rename a File](/docs/linux-basics/mv-command-usage-and-examples/)  
[How to Check File Type](/tutorials/linux-file-command/)  
[How to Create a Symbolic Link (Symlink)](/tutorials/how-to-create-symbolic-links-in-linux/)

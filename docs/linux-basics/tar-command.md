---
sidebar_position: 10
sidebar_label: Tar Command
slug: tar-command-usage-and-examples
---
# How to Use the Tar Command in Linux

**VPS** &nbsp; Apr 28, 2022 &nbsp; Edward S. &nbsp; 4min Read

Tar is one of the most widely used [Linux commands](/linux-basics/commands) for compression. There are great benefits in using tar, that’s why it’s loved by the pros. Here’s all you need to get you started.

Tar stands for Tape archive and is used to compress a collection of files and folders.

[Download Complete Linux Commands Cheat Sheet](https://app.monstercampaigns.com/c/jg9u9k0by4lj9pvcjeso/)

- [How to Use the Tar Command in Linux](#how-to-use-the-tar-command-in-linux)
  - [What Is Tar Command Used For](#what-is-tar-command-used-for)
  - [How to Use Tar in Linux](#how-to-use-tar-in-linux)
    - [Creating a .tar Archive File in Linux](#creating-a-tar-archive-file-in-linux)
    - [Creating a .tar.gz File in Linux](#creating-a-targz-file-in-linux)
    - [Creating a .tar.bz2 File in Linux](#creating-a-tarbz2-file-in-linux)
    - [How to Unzip .tar Files in Linux](#how-to-unzip-tar-files-in-linux)
    - [How to List the Contents of an Archive in Linux](#how-to-list-the-contents-of-an-archive-in-linux)
    - [How to Unzip a Single .tar File](#how-to-unzip-a-single-tar-file)
    - [How to Extract Multiple Files from .tar Archives](#how-to-extract-multiple-files-from-tar-archives)
    - [Extract multiple files with a pattern](#extract-multiple-files-with-a-pattern)
    - [How to Add Files to a .tar Archive](#how-to-add-files-to-a-tar-archive)
    - [How to Verify a .tar Archive in Linux](#how-to-verify-a-tar-archive-in-linux)
    - [How to Check Archive Size in Linux](#how-to-check-archive-size-in-linux)
  - [Conclusion](#conclusion)
      - [Learn More Linux Commands for File Management](#learn-more-linux-commands-for-file-management)

## What Is Tar Command Used For

In most cases, once the compression is done using tar results in a **.tar** file. Further compression is done using gzip which would result in a **.tar.gz** file.

With tar, you can compress and decompress files. Tar comes with multiple options though there are few which you may need to remember.

The advantages of tar:

*   Tar, when it comes to compression has a compression ratio of 50%, which means it compresses efficiently
*   Drastically reduces the size of packaged files and folders
*   Tar does not alter the features of files and directories. The permissions and other features remain intact while compressing
*   Tar is widely available across most common Linux versions. This is available on Android firmware as well as supported older Linux flavors.
*   Compresses and Decompresses fast
*   Easy to use

While this helps us understand tar’s benefits, one question to answer is under what scenario would you choose to use it?

*   If you are working on Linux based systems and require file compression
*   To transfer a huge collection of files and folders from one server to another
*   Take a backup of your website, data or anything else
*   To reduce the usage of space on your system, since compression will occupy less space
*   To upload and download folders

## How to Use Tar in Linux

Let’s learn what basic operations you can perform by using tar. Before we start, you’ll need to SSH into your VPS. Here’s a [guide](/tutorials/how-to-use-putty-ssh) to help you!

### Creating a .tar Archive File in Linux

You can create .tar compressions for a file as well as directories. An example of such an archive is:

``` bash
tar -cvf sampleArchive.tar /home/sampleArchive
```

Here **/home/**sampleArchive is the directory which needs to be compressed creating **sampleArchive.tar**.

The command uses **–**cvf options which stand for:

*   **c** – This creates a new .tar file
*   **v** – shows a verbose description of the compression progress
*   **f** – file name

### Creating a .tar.gz File in Linux

If you want better compression, then you can also use **.tar.gz**. An example of this is:

``` bash
tar -cvzf sampleArchive.tar.gz /home/sampleArchive
```

The additional option **z** represents gzip compression. Alternatively, you can create a **.tgz** file which is similar to **tar.gz**. An example of this is as shown below:

``` bash
tar -cvzf sampleArchive.tgz /home/sampleArchive
```

### Creating a .tar.bz2 File in Linux

The **.bz2** file provides more compression compared to gzip. However, this would take more time to compress and decompress. To create this, you need to use the **\-j** option. An example of the operation is:

``` bash
tar -cvjf sampleArchive.tar.bz2 /home/sampleArchive
```

This is similar to **.tar.tbz** or **.tar.tb2**. An example of this is as shown below:

``` bash
tar -cvjf sampleArchive.tar.tbz /home/sampleArchive
```

``` bash
tar -cvjf sampleArchive.tar.tb2 /home/sampleArchive
```

### How to Unzip .tar Files in Linux

The tar command can also be used to extract a file. The below command will extract files in the current directory:

``` bash
tar -xvf sampleArchive.tar
```

If you want to extract to a different directory then you can use the **\-C** option. One example is as shown below:

``` bash
tar -xvf sampleArchive.tar -C /home/ExtractedFiles/
```

A similar command can be used to uncompress **.tar.gz** files as shown below:

``` bash
tar -xvf sampleArchive.tar.gz
```

``` bash
tar -xvf sampleArchive.tar.gz -C /home/ExtractedFiles/
```

**.tar.bz2** or **.tar.tbz** or **.tar.tb2** files can be uncompressed similarly. It would require the following command in the command line:

``` bash
tar -xvf sampleArchive.tar.bz2
```

### How to List the Contents of an Archive in Linux

Once the archive is built, you can list the contents by using a command similar to the one below:

``` bash
tar -tvf sampleArchive.tar
```

This will display the complete list of files along with timestamps and permissions. Similarly, for **.tar.gz**, you can use a command like:

``` bash
tar -tvf sampleArchive.tar.gz
```

This would also work for **.tar.bz2** files as shown below:

``` bash
tar -tvf sampleArchive.tar.bz2
```

### How to Unzip a Single .tar File

Once an archive is created, you can extract a single file. One such example is as shown below:

``` bash
tar -xvf sampleArchive.tar example.sh
```

Here **example.sh** is a single file which will be extracted from sampleArchive.tar. Alternatively, you can also use the following command:

``` bash
tar --extract --file= sampleArchive.tar example.sh
```

To extract a single file from .tar.gz you can use a command similar to the one shown below:

``` bash
tar -zxvf sampleArchive.tar.gz example.sh
```

Or alternatively:

``` bash
tar --extract --file= sampleArchive.tar.gz example.sh
```

To extract a single file from .tar.bz2 you can use a command like this:

``` bash
tar -jxvf sampleArchive.tar.bz2 example.sh
```

Or alternatively one like this:

``` bash
tar --extract --file= sampleArchive.tar.bz2 example.sh
```

As you can see, the tar command has a lot of flexibility in its syntax.

### How to Extract Multiple Files from .tar Archives

In case you want to extract multiple files, use the below format of the command:

``` bash
tar -xvf sampleArchive.tar "file1" "file2"
```

For **.tar.gz** you can use:

``` bash
tar -zxvf sampleArchive.tar.gz "file1" "file2"
```

For **.tar.bz2** you can use:

``` bash
tar -jxvf sampleArchive.tar.bz2 "file1" "file2"
```

### Extract multiple files with a pattern

If you want to extract specific patterns of files like only **.jpg** from the archive, use **wildcards**. A sample of such command is as shown below:

``` bash
tar -xvf sampleArchive.tar --wildcards '\*.jpg'
```

For **.tar.gz** you can use:

``` bash
tar -zxvf sampleArchive.tar.gz --wildcards '\*.jpg'
```

For **.tar.bz2** you can use:

``` bash
tar -jxvf sampleArchive.tar.bz2 --wildcards '\*.jpg'
```

### How to Add Files to a .tar Archive

While you can extract specific files, you can also add files into an existing archive. To do this, we would use the **\-r** option which stands for append. Tar can add both files and directories.

Below is an example where we are adding example.jpg into the existing **sampleArchive.tar**.

``` bash
tar -rvf sampleArchive.tar example.jpg
```

We can also add a directory. In the example below, the image\_dir directory is added into sampleArchive.tar

``` bash
tar -rvf sampleArchive.tar image\_dir
```

You cannot add files or folder to **.tar.gz** or **.tar.bz2** files.

### How to Verify a .tar Archive in Linux

Using tar you can verify an archive. This is one of the ways you can do it:

``` bash
tar -tvf sampleArchive.tar
```

This cannot be applied on **.tar.gz** or **.tar.bz2** files.

### How to Check Archive Size in Linux

Once you create an archive you can check the size of it. This will be displayed in KB (Kilobytes).

Below are examples of such commands with different archive files:

``` bash
tar -czf - sampleArchive.tar | wc -c
```

``` bash
tar -czf - sampleArchive.tar.gz | wc -c
```

``` bash
tar -czf - sampleArchive.tar.bz2 | wc -c
```

## Conclusion

As you can see, tar is a truly powerful tool that every Linux enthusiast should know. You can further explore the manual pages for the tar command by executing the man tar command. We hope this article helped up your Linux game! See you in the next one.

#### Learn More Linux Commands for File Management

[How to Remove Files and Directories](/docs/linux-basics/rmdir-command-usage-and-examples)  
[How to Create an Empty File](/docs/linux-basics/touch-command-usage-and-examples)  
[How to Locate a File](/docs/linux-basics/find-command-usage-and-examples/)  
[How to Change File Ownership with Chown Command](/docs/linux-basics/chown-command-usage-and-examples/)  
[How to Unzip Files in Linux](/docs/linux-basics/unzip-command-usage-and-examples/)  
[How to Change File Permissions with Chmod Command](/docs/linux-basics/change-linux-permissions-and-owners/)  
[How to Rename a File](/docs/linux-basics/mv-command-usage-and-examples/)  
[How to Check File Type](/tutorials/linux-file-command/)  
[How to Create a Symbolic Link (Symlink)](/tutorials/how-to-create-symbolic-links-in-linux/)

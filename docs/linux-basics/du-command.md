---
sidebar_position: 9
sidebar_label: Du Command
slug: how-to-check-and-manage-disk-space-via-terminal
---

# How to Check Disk Space Usage in Linux

![How to Check Disk Space Usage in Linux](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2016/11/how-to-check-disk-space-usage-in-linux.png)

In this tutorial, we are going to show you how to use the **df** command to check disk space, and the **du** command to monitor disk usage in terminal. These are the two essential [Linux commands](/linux-basics/commands) that will help you manage your files more effectively.

[Download Complete Linux Commands Cheat Sheet](https://app.monstercampaigns.com/c/jg9u9k0by4lj9pvcjeso/)

- [How to Check Disk Space Usage in Linux](#how-to-check-disk-space-usage-in-linux)
  - [Analyzing the Hard Drive](#analyzing-the-hard-drive)
    - [Check Disk Space in Linux Using the df Command](#check-disk-space-in-linux-using-the-df-command)
    - [Check Disk Usage in Linux Using the du Command](#check-disk-usage-in-linux-using-the-du-command)
  - [Combining Commands and Cleaning Disk Space](#combining-commands-and-cleaning-disk-space)
    - [Sorting Files By Size](#sorting-files-by-size)
    - [Excluding by File Size](#excluding-by-file-size)
    - [Excluding File Types](#excluding-file-types)
  - [Conclusion](#conclusion)
      - [Discover Other Linux Commands for Server Management](#discover-other-linux-commands-for-server-management)

## Analyzing the Hard Drive

**df** and **du** commands have a slightly different purpose when analyzing a hard drive. In order to avoid confusion, we’ll explain them in separate sections. Let’s begin with the **df** command!

### Check Disk Space in Linux Using the df Command

**df**, which stands for **Disk Filesystem**, is used to check disk space. It will display available and used storage of file systems on your machine.

When executing this command, you will see the default columns: **Filesystem**, **Size**, **Used**, **Available**, **Use%**, and **Mounted On**. It should look something like this:

![The result of df command to check disk space in Linux.](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2017/03/df-output.png)

*   **FileSystem** — provides the name of the file system.
*   **Size** — gives us the total size of the specific file system.
*   **Used** — shows how much disk space is used in the particular file system.
*   **Available** — shows how much space is left in the file system.
*   **Use%** — displays the percentage of disk space that is used.
*   **Mounted On** — tells us the mount point of a particular file system.

By adding a certain option to the **df** command, you can check the disk space in Linux more precisely. These are the most popular options:

*   **df -h** — it will display the result in a **human-readable** format.
*   **df -m** — this command line is used to display information of file system usage in **MB**.
*   **df -k** — to display file system usage in **KB**.
*   **df -T** — this option will show the file system **type** (a new column will appear).
*   **df /home** — it allows you to view information about a specific file system in a readable format (in this case **/home** file system).
*   **df — help** — it lists down other useful options that you can use, complete with their descriptions.

### Check Disk Usage in Linux Using the du Command

Another important command is **du**, short for **Disk Usage**. It will show you details about the disk usage of files and directories on a Linux computer or server. With the **du** command, you need to specify which folder or file you want to check. The syntax is as follow:

``` bash 
du <options> <location of directory or file>
```

Let’s take a look at real-world use of the **du** command with the Desktop directory:

*   **du /home/user/Desktop** — this command line allows users to see into the disk usage of their Desktop folders and files (subdirectories are included as well).
*   **du -h /home/user/Desktop** — just like with **df**, the option **\-h** displays information in a **human-readable** format.
*   **du -sh /home/user/Desktop** — the **\-s**  option will give us the total size of a specified folder (Desktop in this case).
*   **du -m /home/user/Desktop** — the **\-m** option provides us with folder and file sizes in **Megabytes** (we can use **\-k** to see the information in **Kilobytes**).
*   **du -h — time /home/user/Desktop** — this informs the last modification date of the displayed folders and files.
*   **df –help** — it displays a list of available options and what they can be used for.

Combining Commands and Cleaning Disk Space
------------------------------------------

You can get more information done by combining **df** and **du** command with other arguments. By doing this, you will get a better idea of which files you can delete to free up disk space.

Just remember to start with **df** command to see which file system needs a cleanup the most. After that, you can proceed with these combinations.

### Sorting Files By Size

First, we gather files and folders on the Desktop in a readable format using the **du** command. Then, we pipe the result to the **sort** command together with the **\-rn** option. The script will sort all the files and folders from largest to smallest to check the disk space use in Linux. The combination should look like this:

``` bash 
du -h /home/user/Desktop | sort -rn
```

Remember that you shouldn’t necessarily delete files just because they are large. If you’re not cautious, you might delete essential files that would break your project.

### Excluding by File Size

Let’s say you want to see all files that are above a certain size. The most effective way to do that is by using the command below:

``` bash 
du -h /home/user/Desktop | grep '^\\s\*\[0-9\\.\]\\+G'
```

The [grep command](https://www.hostinger.com/docs/linux-basics/grep-command-usage-and-examples) allows us to search for files based on a specified pattern. In this example, the script will return with any files bigger than 1 GB. If you want to single out 1 MB+ data, you can replace **G** with **M**.

### Excluding File Types

The last combination is useful when you need to exclude a particular file format from the search results. For instance:

``` bash 
du -h /home/user/Desktop/ --exclude="*.txt"
```

The **–exclude=”.txt”** argument makes sure the **du** command will display all file formats except for **.txt** documents.

Conclusion
----------

**df** and **du** commands are file management tools that will check disk space in Linux and display all stored files on your machine. You are allowed to add certain options (like **\-h**, **\-m**, **\-k**, etc.) to refine the output based on your needs.

What’s great, users can get a more specific result by combining **du** and **df** with other commands, such as **sort**, **grep**, and **exclude**. Together, they will help you better understand how disk space is used on your server. Be sure to check out our article for more useful [Linux commands](https://www.hostinger.com/tutorials/ssh/basic-ssh-commands).

If you have any questions, feel free to comment down below!

#### Discover Other Linux Commands for Server Management

[How to Transfer Data With Curl Command](/tutorials/curl-command-with-examples-linux/)  
[How to Calculate Process Execution With Time Command](/tutorials/linux-time-command/)  
[How to Transfer Files Using Scp Command](/tutorials/using-scp-command-to-transfer-files/)  
[How to Monitor Changes With Watch Command](/tutorials/linux-watch-command/)  
[How to Shutdown and Restart the Server](/tutorials/linux-shutdown-command/)  
[How to Transfer and Synchronize Data With Rsync](/tutorials/how-to-use-rsync)

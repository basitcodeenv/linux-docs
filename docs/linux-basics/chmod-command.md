---
sidebar_position: 11
sidebar_label: Chmod Command
slug: change-linux-permissions-and-owners
---
# How to Change Permissions and Owners via Command Line

**VPS** &nbsp; Apr 28, 2022 &nbsp; Domantas G. &nbsp; 5min Read

In this tutorial, you will learn how to change permissions and owners using [Linux commands](/linux-basics/commands) **chmod** and **chown**. By doing so, you’ll have better management in team-based projects.

[Download Complete Linux Commands Cheat Sheet](https://app.monstercampaigns.com/c/jg9u9k0by4lj9pvcjeso/)

- [How to Change Permissions and Owners via Command Line](#how-to-change-permissions-and-owners-via-command-line)
  - [Why You Need to Change Permissions and Owners in Linux](#why-you-need-to-change-permissions-and-owners-in-linux)
  - [How to Change File and Folder Permissions](#how-to-change-file-and-folder-permissions)
    - [How to Use chmod Command](#how-to-use-chmod-command)
  - [Changing the Owners of Files and Folders](#changing-the-owners-of-files-and-folders)
  - [Using Options with chmod and chown Commands](#using-options-with-chmod-and-chown-commands)
  - [Conclusion](#conclusion)
      - [Learn More Linux Commands for File Management](#learn-more-linux-commands-for-file-management)

## Why You Need to Change Permissions and Owners in Linux

[Linux](https://www.linux.org/) is a multi-user operating system, so more than one person can work on the same computer at the same time. What’s great, the system can be accessed locally or remotely. That’s why developers often use this OS for group projects.

In such a large environment, we need to set file permissions and ownership, so only specific users can access our data. This way, we can protect sensitive information and prevent unwanted changes from happening.

Fortunately, thanks to **chmod** and **chown** commands, it is easy to edit permissions and owners in Linux. But before we begin to learn how to use them, make sure you have access to the command line. You can launch it by pressing **Ctrl + Alt + T**.

## How to Change File and Folder Permissions

We will be using the **chmod** command to change file and folder permissions in Linux. But first, you need to be aware that there are three types of users who can interact with a file:

*   **Owner** — the user who creates and owns a file or folder.
*   **Group** — all users who are members of the same group.
*   **Others** — all other users on the system who are neither the owner nor members of a group.

To see permissions and owners of a specific file, you can run this command:

``` bash
ls -1 [file name]
```

The result will look like this:

``` bash
-rwxrw–rw- 1 user user 0 Jan 19 12:59 myfile.txt
```

Let’s break the output down to see what each field means:

*   **“-rwxrw-rw-“** — this part of the line represents the file permissions. To understand it better, we have to divide it into four groups: (**–**), (**rwx**), (**rw-**), and (**rw-**).
    *   The first group indicates the file type. Our example shows a hyphen, which represents a regular file. If we are inspecting a directory, the hyphen will be replaced by **d**.
    *   The three characters after the file type represent the **owner’s file permissions**. In this example, we can see that the owner can read (**r**), write (**w**), and execute (**x**) the file.
    *   The next three characters are the **group’s file permissions**. We can conclude that the group can read (**r**) and write (**w**), but cannot execute the file. This is because the last character is a hyphen instead of the letter **x**.
    *   The last group is **others’ file permissions**. Based on our example, this type of user cannot execute the file, but they are allowed to read and write.
*   **1** – the number of hard links. A hard link is an additional name for an existing file.
*   **user user** – the owner and group owner of the file.
*   **0** – the size of the file in bytes.
*   **Jan 19 12:59** – the last modification date.
*   **myfile.txt** – the name of the file/folder.

### How to Use chmod Command

Let’s say someone in the group is getting bash: permission denied error and we want to change Linux file permissions from **\-rwxrw-rw-** to **\-rwx-r–r–**. Simply enter this line:

``` bash
chmod 744 [file name]
```

By executing this command, the owner can read, write, and execute the file (**rwx**). However, group and others are only allowed to read (**r–**).

At this point, you might wonder why we are using a three-digit number (744) after the chmod command.

The number determines the file permissions. **R****ead**, **write**, and **execute** are represented by a **numerical value:**

*   **r** (read) – **4**
*   **w** (write) – **2**
*   **x** (execute) – **1**

So if you want to give all permissions (**rwx**) to a user, we need to add **read (4), write (2),** and **execute (1).** Therefore, **rwx** is equal to 7.

Meanwhile, since group and others are only allowed to read the file, we give them **4**.

Remember, the owner’s permissions always come first, then followed by group and others. That’s why we enter **744.** 

:::tip Pro Tip

If you don’t want to give any permission to a user, enter **0** into the corresponding spot.

Here is a list of the most common file permissions:
:::

| **Value**    | **Numeric Value** | **Explanation**                                                           |
| :----------- | :---------------- | :------------------------------------------------------------------------ |
| `-rw-------` | 600               | Owner can read and write. Group and others have no permission.            |
| `-rw-r--r--` | 644               | Owner and read and write. Group and others have read only rights.         |
| `-rw-rw-rw-` | 666               | Owner, group and others can read and write.                               |
| `-rwx------` | 700               | Owner can read, write and execute. Group and others have no permission.   |
| `-rwx--x--x` | 711               | Owner can read, write and execute. Group and others can execute.          |
| `-rwxr-xr-x` | 755               | Owner can read, write and execute. Group and others can read and execute. |
| `-rwxrwxrwx` | 777               | Owner, group and others can read, write and execute.                      |



Common permissions for directories:

| **Value**    | **Numeric Value** | **Explanation**                                                               |
| :----------- | :---------------- | :---------------------------------------------------------------------------- |
| `drwx------` | 700               | Only owner can read and write to the directory                                |
| `drwxr-xr-x` | 755               | Owner, group and others can read the directory, but only the owner can write. |


## Changing the Owners of Files and Folders

To change the owner of a file and folder, we will be using the **chown** command. We have a detailed tutorial, if you’d like to learn more about [chown command](/docs/linux-basics/chown-command-usage-and-examples/), but this is the basic syntax:

``` bash
chown [owner/group owner] [file name]
```

Let’s say we have a file named “**myfile.txt.”** If we want to set the **owner** of the file to “**hostinger,”** we can use this command:

``` bash
chown hostinger myfile.txt
```

However, if we want to change the **group owner** of the file to “**clients,”** we’ll enter this line instead:

``` bash
chown :clients demo.txt
```

Notice that we use a colon **(:)** before “clients” to indicate that it is a group owner.

Now, to change both the owner and group owner at the same time, the syntax would be like this:

``` bash
chown hostinger:clients myfile.txt
```

The main rule is that the owner should come before the group owner, and they have to be separated by a colon.

## Using Options with chmod and chown Commands

**Option** is an additional command to change the output of a command.

One of the most popular options that you can combine with **chmod** and **chown** is **\-R** (Recursive). This Linux option allows you to edit permissions or owners of all files and subdirectories inside a specific directory.

If you want to use an option, you have to place it right after the **chmod**/**chown** command.

Take a look at this example:

``` bash
chown -R 755 /etc/myfiles
```

After you enter the above command, the owner can read, write, and execute all files and subdirectories inside the **/etc/myfiles** directory. The command also gives read and execute permissions to group and others.

**Important!** Be extra careful with this option. Improper use of the command may cause critical failure, and it requires a great deal of work to reverse the changes.

Aside from -R, the following options are often used with **chmod** and **chown** commands:

*   **\-f** or force. The command line will ignore any errors and apply the chmod and chown commands.
*   **\-v** (verbose) option gives you diagnostics of all files that are processed by the command.
*   **\-c** (changes) is similar to the **\-v** option. However, it will only provide information when changes were successfully made.

## Conclusion

In this tutorial, you have learned how to use **chmod** and **chown** commands to change permissions and owners in Linux. We also provided the basic syntax and several useful options that you can combine with either of these commands.

To learn more about Linux command line, you can read our article on [basic bash commands](/tutorials/ssh/basic-ssh-commands).

If you have any questions, feel free to comment below!

#### Learn More Linux Commands for File Management

[How to Remove Files and Directories](/docs/linux-basics/rmdir-command-usage-and-examples)  
[How to Create an Empty File](/docs/linux-basics/touch-command-usage-and-examples)  
[How to Locate a File](/docs/linux-basics/find-command-usage-and-examples/)  
[How to Compress a File with Tar Command](/tutorials/linux-tar-command-with-examples/)  
[How to Change File Ownership with Chown Command](/docs/linux-basics/chown-command-usage-and-examples/)  
[How to Unzip Files in Linux](/docs/linux-basics/unzip-command-usage-and-examples/)  
[How to Rename a File](/docs/linux-basics/mv-command-usage-and-examples/)  
[How to Check File Type](/tutorials/linux-file-command/)  
[How to Create a Symbolic Link (Symlink)](/tutorials/how-to-create-symbolic-links-in-linux/)

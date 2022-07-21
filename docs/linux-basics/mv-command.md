---
sidebar_position: 3
sidebar_label: Mv Command
slug: mv-command-usage-and-examples
---

# How to Rename Files in Linux

[Download Complete Linux Commands Cheat Sheet](https://app.monstercampaigns.com/c/jg9u9k0by4lj9pvcjeso/)

A command-line terminal is an essential tool for administrating Linux servers. It provides Linux users some of the best productivity tools while saving your machine’s resources.

To effectively use the potential of your OS, you will need to have strong knowledge of the fundamentals – simple [Linux commands](/tutorials/linux-commands), like renaming existing files and folders.  In this tutorial, you’ll learn how to rename folders in Linux.

- [How to Rename Files in Linux](#how-to-rename-files-in-linux)
  - [How to Rename Files in Linux with the mv Command](#how-to-rename-files-in-linux-with-the-mv-command)
  - [Rename File on Linux Using the mv Command](#rename-file-on-linux-using-the-mv-command)
    - [Rename Multiple Files With the mv Command](#rename-multiple-files-with-the-mv-command)
    - [Rename Files on Linux Using the Rename Command](#rename-files-on-linux-using-the-rename-command)
    - [Remove Rename Command](#remove-rename-command)
  - [Conclusion](#conclusion)
      - [Learn More Linux Commands for File Management](#learn-more-linux-commands-for-file-management)

How to Rename Files in Linux with the mv Command
------------------------------------------------

Shortened from “move,” the **mv** command is one of the easiest commands to use.  It can do two basic but essential tasks when handling files on Linux. One is moving files from one location to another, and the other is renaming one or more files through the terminal.

First, let’s see how renaming files with **mv** works on Linux.

To begin, we access our server through the command line using [SSH](https://www.ssh.com/ssh/protocol). If you are unsure about SSH and would like to learn more, here’s a helpful [tutorial](/tutorials/how-to-use-putty-ssh).

To access our server, type the following into your terminal:

ssh your-user@your-server

If we are using a local computer, instead of a server, then we will have to open the terminal from the main menu.

Afterward, it is important to know how the **mv** command works. To do this, we run the following:

``` bash
mv --help
```

As we can see in the previous image, the basic use of the **mv** command is as follows:

``` bash
mv [option] [SOURCE]...[DIRECTORY]
```

Here are some of the most popular **mv** options:

*   **\-f** – shows no message before overwriting a file.
*   **\-i** – displays warning messages before overwriting a file.
*   **\-u** – only move a file if it is new or if it does not exist in the destination.
*   **\-v** – show what the command does.

And the parameters are:

**\[SOURCE\]** – the source destination of the file

**\[DESTINATION\]** – the destination directory.

Rename File on Linux Using the mv Command
-----------------------------------------

If we want to rename a file, we can do it like this:

``` bash
mv oldnamefile1 newnamefile1
```

Assuming we are located in the directory, and there is a file called **file1.txt**, and we want to change the name to **file2.txt**. We will need to type the following:

``` bash
mv file1.txt file2.txt
```

As simple as that. However, if you are not in the directory, you will need to type a bit more. For example:

``` bash
cd /home/user/docs/files
mv file1.txt file2.txt
```

### Rename Multiple Files With the mv Command

The **mv** command can only rename one file, but it can be used with other commands to rename multiple files.

Let’s take the commands, **find**, **for,** or **while** loops and renaming multiple files.

For example, when trying to change all files in your current directory from **.txt** extension to **.pdf** extension, you will use the following command:

``` bash
for f in *txt; do
   mv -- "$f" "${f%.txt}.pdf"
done
```

This will create a loop (for) looking through the list of files with the extension **.txt**. It will then replace each **.txt** extension with **.pdf**. Finally, it will end the loop (done).

If you want more advanced features, you’ll need to use the rename command, we’re about to cover.

### Rename Files on Linux Using the Rename Command

With the **rename** command, you will have a bit more control. Many Linux configurations include it by default. But, if you don’t have it installed, you can do it in just a minute with a simple command.

In the case of **Debian, Ubuntu, Linux Mint,** and derivatives:

``` bash
sudo apt install rename
```

On the other hand, if you are using **CentOS 7** or **RHEL**:

``` bash
sudo yum install rename
```

And, if you are using **Arch Linux**:

``` bash
yay perl-rename ## or yaourt -S perl-rename
```

Now, we can start using the **rename** command. In general, the basic syntax of the rename command looks like this:

``` bash
rename 's/old-name/new-name/' files
```

It may seem complex at first, but it’s a lot simpler than it might seem.

In this example, we will create a new folder called **filetorename,** and using the touch command, we will create 5 files.

``` bash
mkdir filetorename
```

``` bash
cd filetorename
```

``` bash
touch file{1..5}.txt
```

``` bash
ls
```

With the last **ls** command, you can view the files that you created.

If we want to rename a single file called **file1.txt**, the sentence would be like this:

``` bash
rename ‘s/file1/newfile1/’ file1.txt
```

If we wanted to change the extension to all files, for example, to **.php**. We could do it this way:

``` bash
rename ‘s/.txt/.php/’ *.txt
```

``` bash
ls
```

We can also specify another directory where the files you want to rename are.

``` bash
rename ‘s/.txt/.php/’ FILE/PATH
```

We’d like to mention that rename uses a regular expression of [Perl](https://www.perl.org/), meaning this command has extensive possibilities.

Finally, it is a good idea to check all the command options. You can view them in the terminal by executing:

``` bash
rename –help
```

Some common examples of how to use the **rename** command are:

*   Convert filenames to uppercase:
    
    ``` bash
    rename 'y/a-z/A-Z/' *
    ```
    
*   Convert filenames to lowercase:
    
    ``` bash
    rename 'y/A-Z/a-z/' *
    ```
    
*   Replace spaces in filenames with underscores:
    
    ``` bash
    rename 'y/ /_/' *
    ```
    

### Remove Rename Command

If you no longer wish to have rename installed on your system, remove it using the software manager. Or from the terminal.

For **Debian, Ubuntu, Linux Mint** and derivatives:

``` bash
sudo apt remove rename
```

And for **CentOS** and **RHEL:**

``` bash
sudo yum remove rename
```

That’s it, rename is removed from your Linux machine.

Conclusion
----------

Renaming files in Linux using the terminal is a simple and practical task but sometimes very important. Knowing how to do it is something every server manager should know.

As we have seen, there are two commands that can do it. One is simpler than the other, but both accomplish the task.

We encourage you to continue researching these commands and improving the quality of your everyday workflow.

#### Learn More Linux Commands for File Management

[How to Remove Files and Directories](/tutorials/how-to-remove-files-and-folders-using-linux-command-line/)  
[How to Create an Empty File](/tutorials/linux-touch-command-with-useful-examples/)  
[How to Locate a File](/tutorials/how-to-use-find-and-locate-commands-in-linux/)  
[How to Compress a File with Tar Command](/tutorials/linux-tar-command-with-examples/)  
[How to Change File Ownership with Chown Command](/tutorials/linux-chown-command/)  
[How to Unzip Files in Linux](/tutorials/how-to-unzip-files-linux/)  
[How to Change FIle Permissions with Chmod Command](/tutorials/vps/change-linux-permissions-and-owners)  
[How to Check File Type](/tutorials/linux-file-command/)  
[How to Create a Symbolic Link (Symlink)](/tutorials/how-to-create-symbolic-links-in-linux/)

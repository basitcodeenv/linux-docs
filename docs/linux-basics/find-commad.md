---
sidebar_position: 6
slug: find-command-usage-and-examples
---
# Find Command

**VPS** &nbsp; Jun 30, 2022 &nbsp; Domantas G. &nbsp; 7min Read

## How to Use the Linux Locate Command to Find Any File

![How to Use the Linux Locate Command to Find Any File](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2017/05/how-to-use-find-and-locate-commands-in-linux.webp)

Do you want to know how to perform searches using [Linux commands](/tutorials/linux-commands)? Then you’ve come to the right place!

In this article, we’ll talk about the Linux **find** and **locate** commands, which will help you to look for any file on your machine.

[Download Complete Linux Commands Cheat Sheet](https://app.monstercampaigns.com/c/jg9u9k0by4lj9pvcjeso/)

*   [Why Use Find and Locate Commands in Linux?](#Why_Use_Find_and_Locate_Commands_in_Linux "Why Use Find and Locate Commands in Linux?")
*   [Using the Find Command in Linux](#Using_the_Find_Command_in_Linux "Using the Find Command in Linux")
    *   [The Basic Syntax](#The_Basic_Syntax "The Basic Syntax")
    *   [Ways to Utilize find Command](#Ways_to_Utilize_find_Command "Ways to Utilize find Command")
*   [Using Locate Command in Linux](#Using_Locate_Command_in_Linux "Using Locate Command in Linux")
    *   [How to Install locate Package](#How_to_Install_locate_Package "How to Install locate Package")
    *   [The Basic Syntax](#The_Basic_Syntax-2 "The Basic Syntax")
    *   [How to Use Linux Locate Command](#How_to_Use_Linux_Locate_Command "How to Use Linux Locate Command")

## Why Use Find and Locate Commands in Linux?

New Linux users often claim that they get confused about the location of their files on a server. This might be because most people are used to operating Windows or macOS, which have more clear-cut and user-friendly directory layouts.

While there is some truth to this, Linux gives users more options on how to search for files using certain commands. Besides searching based on common filters, you are also able to find files by user permissions, size, timestamps, and so on.

What’s great, once you understand the commands, searching for files on your Linux platform is strikingly easy.

To do that, we’ll utilize the **find** and **locate** commands in Linux.

An important thing to note is that we will be using Ubuntu VPS in this guide. That being said, the steps should also work for Debian, CentOS, or any other distribution of Linux. If you don’t know how to connect to VPS,  you can follow [this guide](/tutorials/how-to-use-putty-ssh) before proceeding further.

## Using the Find Command in Linux

First, let us explain the **find** command and how to use it.

### The Basic Syntax

The most popular command to find and filter files on Linux is **find**. The basic syntax is as follows:

``` bash
find <startingdirectory> <options> <search term>
```

It starts with the keyword **find**, which alerts Linux that whatever follows after will be used to find your file. The **<startingdirectory\>** argument is the origin point of where you want to start the search. It can be replaced with several arguments, including:

*   **/ (slash)** — search the whole system.
*   **. (dot)** — search from the folder you’re currently working on (current directory).
*   **~ (tilde)** — to search from your home folder.

#### Pro Tip

In order to find the current directory you are in, use the **pwd** command.

The second argument **<options\>** is dedicated to your file. This could be the file’s name, type, date of creation, etc. The third argument **<search term\>** is where you will specify the relevant search term.

### Ways to Utilize find Command

Let’s take a look at various options Linux provides its users:

#### Searching by Name

Of course, the most common method to look for a file is using its name. To run a simple search query using the name of the file, use the **find** command like this:

``` bash
find . -name my-file
```

We used the **\-name** option, and searched for a file called **my-file**. Note that we started the search in our current directory by using the **. (dot)** argument.

Keep in mind that the **\-name** argument looks for case-sensitive terms in Linux. If you know the name of the file, but are not sure about its case-sensitivity, use the following **find** command:

``` bash
find . -iname my-file
```

You can also search for all files without a certain keyword in their name. There are two ways to do this. The first method involves using the **–not** keyword in the following manner:

``` bash
find . -not -name my-file
```

Second, we can use the exclamation symbol (**!**). However, it has to be preceded by the escape identifier (\\) to let Linux know that this is the part of the **find** command.

``` bash
find . \! -name my-file
```

You can look for multiple files with a common format like **.txt** as well:

``` bash
find . -name “*.txt”
```

This will list down all the text files starting with the current folder.

Lastly, if you want to find a certain file by name and remove it, use the **-delete** argument after the file name:

``` bash
find . -name my-file -delete
```

#### Searching by Type

Linux allows users to list all information based on their types. There are several filters that you can use:

*   **d** – directory or folder
*   **f** – normal file
*   **l** – symbolic link
*   **c** – character devices
*   **b** – block devices

A simple example of using a file type can be seen below:

``` bash
find / -type d
```

This will list all of the current directories in your system since we searched from our root directory with the / (slash) symbol.

You can also combine the –**type** and **-name** options to narrow down your searches further:

``` bash
find / -type f -name my-file
```

This will look for files named **my-file**, excluding directories or links.

#### Searching by Time

If you want to search for files based on when they were accessed and modification time footprints. Linux keeps track of the files using these three timestamps.

*   **Access Time** (**\-atime**) – when the file was either read or written into.
*   **Modification Time** (**\-mtime**) – when the file was modified.
*   **Change Time** (**\-ctime**) – when the file’s meta-data was updated.

This option has to be used with a number that specifies how many days passed since the file was accessed, modified or changed:

``` bash
find / -atime 1
```

This command will show all files that were accessed a day ago starting from your current time.

We can narrow down our queries even more by adding **plus** (**+**) and **minus** (–) signs preceding the number of days. For instance:

``` bash
find / -mtime +2
```

It lists down all the files that have a modification time of more than two days ago.

To find all files whose meta-data was updated less than a day ago, run the following:

``` bash
find / -ctime -1
```

While not often used, there are some additional arguments that are also related to timed-searches. The **\-mmin** argument looks for modified files on a minute basis. It can be used like this:

``` bash
find / -mmin -1
```

Also, we have the **-newer** argument, which can be used to compare the age of two or more files and display the newer one.

``` bash
find / -newer my-file
```

What you’ll get are all of the files that are more recently modified than your file.

#### Searching by Size

Linux lets you search for files based on their sizes. The syntax for searching files by size is:

``` bash
find <startingdirectory> -size <size-magnitude> <size-unit>
```

You can specify the following size units:

*   **c** – bytes
*   **k** – kilobytes
*   **M** – megabytes
*   **G** – gigabytes
*   **b** – 512-byte chunks

A simple example of how to use the **find** command for file sizes is as follows:

``` bash
find / -size 10M
```

Here we search for all of the files in your system that are exactly 10 megabytes. Just like when searching based on time, you can filter your searches further using the plus and minus signs:

``` bash
find / -size +5G
```

It will display all the files that are more than five gigabytes in size.

#### Searching by Ownership

Linux gives you the ability to narrow down your searches based on file ownership. To find files of a certain owner, the following command should be executed:

``` bash
find / -user john
```

The script will return a list of all files that the user named **john** owns. Similar to usernames, we can also find files through group names:

``` bash
find / -group classroom
```

#### Searching by Permissions

Users can search for files based on file permissions using  **\-perm** option. For example:

``` bash
find / -perm 644
```

In Linux, **644** corresponds to read and write permission. That means this command will look for all the files that have only read and write permissions. You can play around with this option further:

``` bash
find / -perm -644
```

With an addition of a dash symbol, it will return with all the files that have at least 644 permission.

Feel free to [read more](http://linuxcommand.org/lc3_lts0090.php) on permissions and various codes corresponding to other Linux permissions.

#### Other Useful Options

There are other useful options that you should remember.

For example, to look for empty files and folders on your system, use the following:

``` bash
find / -empty
```

Similarly, to look for all the executables saved on your drive, utilize the **\-exec** option:

``` bash
find / -exec
```

To look for readable files, you can run the following command:

``` bash
find / -read
```

As you can see, there is a ton of options at hand for users to tailor their queries as they wish. Let us look at the other command which can be used to locate files in Linux.

## Using Locate Command in Linux

The **locate** command is a useful alternative, as it is faster than the **find** command when performing searches. That’s because the former only scans your Linux database instead of the whole system. Furthermore, the syntax is relatively easier to write.

### How to Install locate Package

By default, Linux does not come with the **locate** command pre-installed. To get the package, run the following commands one after another:

``` bash
sudo apt-get update
sudo apt-get install mlocate
```

### The Basic Syntax

You can now use the command to search for files using this syntax:

locate \[my-file\]

The vanilla **locate** command can sometimes return files that have been deleted, if the database wasn’t updated. The best solution is to manually update the database by running the following:

``` bash
sudo updatedb
```

### How to Use Linux Locate Command

We’ll share with you the most common applications of Linux **locate** command.

#### Search Exact File Name

The basic syntax only allows you to search for files that contain the search term. If you want to get the file with the exact name, you can use the **\-r** option and add dollar symbol (**$**) at the end of your search term, for example:

``` bash
locate -r my-file$
```

#### Count the Number of Files

In order to tell how many files appear on your search result, insert **\-c** after the locate command.

``` bash
locate -c my-file
```

Instead of listing all the files, it will give you the total number of them.

#### Ignore Case Sensitive

Use **\-i** on your linux **locate** command to ignore case sensitive files. For instance:

``` bash
locate -i my-file
```

All of the files with this name will be shown, regardless of any uppercase or lowercase symbols found.

#### Show Existing Files

Just like we’ve mentioned, Linux **locate** command can even show you a deleted file if you haven’t updated the database. Thankfully, you can get around this problem by using  **\-e** option, like this:

``` bash
locate -e my-file
```

By doing this, you will only get files that exist at the time you perform the **locate** command.

#### Disables Errors While Searching

**\-q** option will prevent any errors from showing up when the search is being processed. To do this, simply enter:

``` bash
locate -q my-file
```

#### Limit the Number of Search Results

If you want to limit the number of search results, **\-n \<number\>** will do the trick. However, remember that you need to put the option at the end of the command line. Take a look at this example:

``` bash
locate my-file n 10
```

The script will only display the first 10 files it discovers even when there are more.

## Conclusion

You can search for files on your server using the **find** and **locate** commands in Linux. These two powerful tools have their own advantages. Therefore, we encourage you to give both of them a go and see which one is more suitable for you. Here’s a short summary of what we talked about:

*   Use **find** to search for files based on name, type, time, size, ownership and permissions, in addition to some other useful options
*   Install and use Linux **locate** command to perform faster system-wide searches for files. It also allows you to filter out by name, case-sensitive, folder, and so on.

If you have any questions, feel free to ask in the comments!

#### Learn More Linux Commands for File Management

[How to Remove Files and Directories](/tutorials/how-to-remove-files-and-folders-using-linux-command-line/)  
[How to Create an Empty File](/tutorials/linux-touch-command-with-useful-examples/)  
[How to Compress a File with Tar Command](/tutorials/linux-tar-command-with-examples/)  
[How to Change File Ownership with Chown Command](/tutorials/linux-chown-command/)  
[How to Unzip Files in Linux](/tutorials/how-to-unzip-files-linux/)  
[How to Change FIle Permissions with Chmod Command](/tutorials/vps/change-linux-permissions-and-owners)  
[How to Rename a File](/tutorials/how-to-rename-files-in-linux/)  
[How to Check File Type](/tutorials/linux-file-command/)  
[How to Create a Symbolic Link (Symlink)](/tutorials/how-to-create-symbolic-links-in-linux/)
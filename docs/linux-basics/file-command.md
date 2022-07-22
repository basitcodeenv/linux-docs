---
sidebar_position: 16
sidebar_label: File Command
slug: file-command-usage-and-examples
---
# Linux File Command: What Does It Do and How to Use It

**VPS** &nbsp; Apr 28, 2022 &nbsp; Edward S. & Leonardus N. &nbsp; 5min Read

![Linux File Command: What Does It Do and How to Use It](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/03/linux-file-command.jpg)

Linux can be quite complicated as you need to use [Linux commands](/docs/linux-basics/commands) to manage the operating system. The file command is one of them.

The file command has a wide range of uses. In essence, it checks the file type and reports back in a simple format. The command also states the reason why a file can’t be read and reveals the true file type in case it has been renamed.

In this tutorial, you’ll learn the basics of using the file command and how it can empower your [VPS](/tutorials/what-is-vps-hosting) management and Linux operation.

- [Linux File Command: What Does It Do and How to Use It](#linux-file-command-what-does-it-do-and-how-to-use-it)
  - [What Exactly Does the Linux File Command Do?](#what-exactly-does-the-linux-file-command-do)
  - [Understanding Linux File Command Syntax](#understanding-linux-file-command-syntax)
  - [Ways to the Use the Linux File Command](#ways-to-the-use-the-linux-file-command)
    - [Check the File Type](#check-the-file-type)
    - [List the File Type of Multiple Files](#list-the-file-type-of-multiple-files)
    - [Determine the MIME File Type](#determine-the-mime-file-type)
    - [Read Special File Type](#read-special-file-type)
    - [Read Inside a Compressed File](#read-inside-a-compressed-file)
  - [Conclusion](#conclusion)
      - [Learn More Linux Commands for File Management](#learn-more-linux-commands-for-file-management)

## What Exactly Does the Linux File Command Do?

File names in [UNIX](https://www.opengroup.org/membership/forums/platform/unix) can be entirely independent of the file type. For example, a file named **example.zip** can actually be a text file instead of an archive as would be expected. In fact, files can have no extension at all.

This makes it tricky to determine the true file type. This is where the file command comes in handy. It reveals what type a file is – whether it’s an audio, open document spreadsheet, or text editor file.

The file command examines each [argument](https://www.javatpoint.com/linux-arguments) and conducts three sets of tests to determine the file type. The first that succeeds will trigger an output with the file type.

*   **Filesystem test –** this test examines the return from the [stat system call](https://linuxhint.com/stat-system-call-linux/). The program reviews if the file is empty or if it’s a special file type. It also looks for any known file types relevant to the system you are working on if they’re specified in the header file.
*   **Magic test –** every file has **magic numbers** attached at the beginning. They’re special values in fixed arrangements that correspond to different file types. The file command has a database containing all magic numbers located in a data file **/usr/share/misc/magic**. When the file command is run, the system compares the magic numbers of the specified file with it.
*   **Language test –** this test examines the character sets the file is written in, such as ASCII or UTF-8. The test looks for special sequences that appear anywhere in the first few lines. This test is less accurate than the previous two tests, so it’s performed last.

## Understanding Linux File Command Syntax

To use the file command on your VPS hosting, you’ll have to connect to it with an SSH client such as [PuTTY](/tutorials/how-to-use-putty-ssh).

Once you’re connected, you can use the file command on the terminal. Before you begin, however, you should understand the syntax of the command:

``` bash 
file [options] [file name]
```

*   **file** – instructs the terminal to execute the file command.
*   **\[options\]** – this is where you can add variables to the command.
*   **\[file name\]** – input the file you want to inspect.

The output of the file command displays the file type in a standard format. It may also provide other information, such as data stored in the compressed file, size, or the file version depending on the options you used.

To demonstrate the Linux file command, we’ll create a sample text file. The following command will work if you have the [Nano text editor](/tutorials/how-to-install-and-use-nano-text-editor) installed:

``` bash 
nano test.txt
```

The command line will open the new file in the Nano text editor. Write a few lines of text, then press **CTRL+X** and **Y** to exit and save the file.

Now let’s use the most basic form of the file command to check the **text.txt** file:

``` bash 
file test.txt
```

In the output, we’ll be able to see that it is a text file in the ASCII format.

![Output showing that it is a text file in the ASCII format.](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/01/test-txt-ascii.png)

## Ways to the Use the Linux File Command

The file command syntax doesn’t limit its use to just checking a file type. As you may have noticed, there’s the **\[options\]** section in the syntax where you can add extra variables. Including this option will enable you to perform different tasks with the file command

There are many options you can use with the Linux file command, but here is a quick overview of the most commonly used ones:

*   **\-b** – fetches a short description of the file type.
*   **file \*** – lists the types of all files in the directory.
*   **\-i** – shows the MIME file type.
*   **\-s** – used for special files.
*   **\-z** – looks inside compressed files.
*   **–help** – opens the manual for the file command. You’ll see more options and their uses.

We’ll now take a detailed look at each option and how to use it.

### Check the File Type

The file command in Linux is valuable as filenames in UNIX do not necessarily have a connection to their file type. For example, there may be a **test.zip** file which the user has renamed as **test.csv.** In this case, the following command can find out the true file type:

``` bash 
file test.csv
```

The output will define that the **test.csv** file is actually a **.zip** file:

![Output showing that the test.csv file is actually a .zip file.](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/01/test-txt-gzip.png)

This command outputs the file name and its type. If you only want to view the file type, use the **\-b** option in the terminal along with the file name:

``` bash 
file –b test.txt
```

The output only states **ASCII text** without the file name.

![The output stating only ASCII text without the file name.](https://lh3.googleusercontent.com/Pfgr9Wy9mJdEOezPka7fEDNi7wChLXM5QKnyMP8HSO21L_FKG7AXA_RhcgyzEwsJynSJx8lcgVx2ciwVzG-V_uorx8AJAKCHW09uOWCsUzgp9kXGcrqwtHkglLDEX8FUL491yJu5)

### List the File Type of Multiple Files

The file command can also work with multiple files available on the system, with the output for each file in a separate line. To do this, simply replace a variable with the wildcard **\***:

``` bash 
file *.txt
```

The output will contain the information on all **.txt** files in the current directory.

![Output showing information on all .txt files.](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/01/information-on-all-txt-files.png)

You can use this command to list all the files inside a directory by adding the directory name before the **\***. You don’t have to navigate to the directory in question.

For example, if you want to list all ASCII text files inside the **Test** directory, you can use the following command from root or any other directory:

``` bash 
file Test/*.txt
```

The output will look like this:


![Output showing all .txt files inside the Test directory.](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/01/test-txt-files.png)

### Determine the MIME File Type

The **–**i option is used to view the [MIME file type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types). MIME is a standard way of classifying file types on the internet and consists of two parts – types and subtypes.

The command will look like this:

``` bash 
file –i test.txt
```

Here’s the output for the above command:

![The output for the MIME file command type.](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/01/mime-file-type.png)

Notice that instead of declaring the file format as ASCII text, it defines the file as **text/plain** and **charset=us-ascii**.

### Read Special File Type

The file command is handy to analyze regular files. However, it can’t read block or character special files. If you use the file command on one of them, it will only tell you that it’s a block or character special file.

If we use the simple file command on **/dev/ploop19269**, a block special file, the output will look like this:

![Output stating block special after using the simple file command on /dev/ploop19269.](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/01/output-block-special.png)

To read these special files, use the **\-s** option:

``` bash 
file –s /dev/ploop19269
```

As you can see, the output is much more detailed. It indicates that **ploop19269** is a DOS/MBR boot sector.

![A much more detailed output after using the file command with the -s option.](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/01/more-detailed-output.png)

### Read Inside a Compressed File

There are two ways to read inside compressed files like **.zip** or **gzip** archives. The **\-z** option is used to find out information about the contents of compressed files along with the compression details. Using the option **\-Z** will only show the contents.

Here’s the command for reading full compressed file details:

``` bash 
file -z test.gz
```

Below is the output. Notice that it specifies that **test.gz** is a **.gzip** compressed file that contains **file.txt**.

![Output specifying that the test.gz file is a .gzip compressed file that contains file.txt.](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/01/gzip-compressed-data-was-test-txt-1.png)

Now let’s compare it to the **\-Z** option:

``` bash 
file -Z test.gz
```

This command will only print out the type of the file inside **test.gz** – ASCII text.


![Output only showing the file type inside the test.gz file. ](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/01/output-test-gz.png)

## Conclusion

The Linux file command helps users correctly identify files. This is especially useful as file names and extensions can be completely different from the actual file types on UNIX-like systems.

Be sure to use appropriate options and specify the correct file name when using the file command. The Linux terminal is case-sensitive, so be mindful of the uppercase and lowercase letters.

We hope this article has helped you learn more about different file types on your system and improve the development of your projects.

#### Learn More Linux Commands for File Management

[How to Remove Files and Directories](/tutorials/how-to-remove-files-and-folders-using-linux-command-line/)  
[How to Create an Empty File](/tutorials/linux-touch-command-with-useful-examples/)  
[How to Locate a File](/tutorials/how-to-use-find-and-locate-commands-in-linux/)  
[How to Compress a File with Tar Command](/tutorials/linux-tar-command-with-examples/)  
[How to Change File Ownership with Chown Command](/tutorials/linux-chown-command/)  
[How to Unzip Files in Linux](/tutorials/how-to-unzip-files-linux/)  
[How to Change FIle Permissions with Chmod Command](/tutorials/vps/change-linux-permissions-and-owners)  
[How to Rename a File](/tutorials/how-to-rename-files-in-linux/)  
[How to Create a Symbolic Link (Symlink)](/tutorials/how-to-create-symbolic-links-in-linux/)

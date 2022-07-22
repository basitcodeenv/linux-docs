---
sidebar_position: 9
sidebar_label: Tail Command
slug: tail-command-usage-and-examples
---
# Linux Tail Command: What It is and How to Use It

**VPS** &nbsp; Jul 08, 2022 &nbsp; Jordana A. &nbsp; 4min Read

![Linux Tail Command: What It is and How to Use It](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/03/how-to-use-tail-command.jpg)

Tail in Linux is a command-line utility that displays the last part of file content. You can also combine it with one or more [Linux commands](/linux-basics/commands) to produce standard output.

The basic functionality of the tail command makes monitoring log files and real-time updates of one or more files easier. Its usage will expand if combined with other commands ‒ including, but not limited to, sorting and deleting files based on specific criteria.

[Download Complete Linux Commands Cheat Sheet](https://app.monstercampaigns.com/c/jg9u9k0by4lj9pvcjeso/)

This article will cover how the tail command works and its real-life applications through practical examples. You will also learn how to use it with other commands for better file management.

- [Linux Tail Command: What It is and How to Use It](#linux-tail-command-what-it-is-and-how-to-use-it)
  - [What Is Tail Command?](#what-is-tail-command)
  - [Understanding Tail Command Syntax](#understanding-tail-command-syntax)
  - [How to Use Tail Command in Linux](#how-to-use-tail-command-in-linux)
    - [Specifying the Number of Lines for Tail Command](#specifying-the-number-of-lines-for-tail-command)
    - [Specifying the Number of Bytes](#specifying-the-number-of-bytes)
    - [Sorting With Tail Command](#sorting-with-tail-command)
    - [Monitoring a File for Changes](#monitoring-a-file-for-changes)
    - [Using Tail Command for Multiple Files](#using-tail-command-for-multiple-files)
  - [How to Use the Head Command Along with Tail](#how-to-use-the-head-command-along-with-tail)
  - [Conclusion](#conclusion)
      - [Learn More Linux Commands for Reading Files](#learn-more-linux-commands-for-reading-files)
  - [Tail Linux FAQ](#tail-linux-faq)
    - [**How Do You Grep Tail Command?**](#how-do-you-grep-tail-command)
    - [**How Do I Get Out of Tail Command in Linux?**](#how-do-i-get-out-of-tail-command-in-linux)

## What Is Tail Command?

A Linux tail command prints the last ten lines of specified files.

## Understanding Tail Command Syntax

The Linux tail command is part of the GNU Coreutils that adheres to the UNIX philosophy. Its primary purpose is to display the last part of a file via standard input. Users can customize the number of lines displayed by specifying the number in the syntax.

Here is what a basic tail command looks like:

``` bash
    tail [file_name]
```

This command can take several options, each serving different purposes. The following are some of the most popular command options along with their functions:

*   **\-c (–bytes)** ‒ outputs the last number of bytes of data.
*   **\-n (–lines)** ‒ limits the number of lines shown.
*   **\-f (–follow)** ‒ monitor files for changes.
*   **\-v (–verbose)** ‒ prints the file name before the data.
*   **\-q (–quiet, –silent)** ‒ omits the file name before printing the data.
*   **\-version** ‒ displays the tail version information.

**Important!** Keep in mind that the Linux command syntax is case-sensitive.

## How to Use Tail Command in Linux

Now that you know how the Linux tail command works, we’re going to explore its usage with several command options and their real-life applications.

### Specifying the Number of Lines for Tail Command

As mentioned above, the tail command will show the last ten lines of a file by default. To display a specified number of lines, you need to pair it with the **\-n** option.

``` bash
tail -n [number_of_lines] [file_name]
```

Here’s an example of how to use the lines command option to output the last two lines of a file:

``` bash
tail -n 2 mynote.txt
```

![Command line showing the last two lines of a file](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/03/lines.webp)

:::tip Pro Tip

Replacing the “-n \[number\_of\_lines\]” part with “-\[number\_of\_lines\]” will display the same result.
:::

### Specifying the Number of Bytes

Using the **\-c** option allows you to display the last number of bytes of the specified file. It’s helpful in targeting regular-sized files containing the [ASCII character set](https://www.asciitable.com/), where one character is equal to one byte.

``` bash
tail -c [number_of_bytes] [file_name]
```

The following example outputs the last 50 bytes of the **mynote.txt** file:

``` bash
tail -c 50 mynote.txt
```

![Command line showing the last 50 bytes of a text file](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/03/file-name-1.webp)

### Sorting With Tail Command

There are various combinations of commands with the tail command for sorting data depending on your needs.

For instance, pairing it with the list (ls) command and -t and -l options allows you to list files or directories with the oldest modification times. Use the -n option to specify the number of lines to be displayed.

``` bash
ls -tl | tail -n [number_of_lines]
```

![Command line showing files and directories](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/03/number-of-lines.webp)

Matching the tail command with the sort command and the -M option will sort the output from the ls command based on the month of creation in ascending order.

``` bash
ls -tl | sort -M | tail -n [number_of_lines]
```

![command line sorting the output in ascending order](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/03/list-files.webp)

To sort the output in reverse order, use the tail command with the -r option.

``` bash
tail -n [number_of_lines] [file_name] | sort -r
```

### Monitoring a File for Changes

The tail -f option lets you view the last ten lines of the file. This option is useful for tracking log files in real-time as this command will update when new data is added to the same file.

If the original file changes, the header will display which lines were altered.

``` bash
tail -f [file_name]
```

![Command line showing lines that were altered](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/03/file-names.webp)

### Using Tail Command for Multiple Files

The previous example has shown how to use the tail command for a single file. If you want to output data from multiple files at the same time, list all the file names in the command line as follows:

``` bash
tail [option] [file_name_1] [file_name_2] [file_name_3]
```

When executing a tail command, the header line will display each file name. This action applies when viewing multiple files. Use the -q option to enable the quiet mode, omitting this header.

``` bash
tail -q [file_name]
```

![Command line showing the quiet mode, omitting the header](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/03/quiet-mode.webp)

## How to Use the Head Command Along with Tail

Like the tail command, the Linux head command is also a member of the GNU core utilities package and writes the result in standard output. The only difference is that the head command prints the first lines of one or multiple files.

Combining head and tail commands allows you to output a specific section from a file. First, use the head command to extract the first lines from a file. Then pipe the data as input to the tail command, which displays the last lines from that particular section.

The following example shows how to use head and tail commands simultaneously to display the last ten lines of the first 20 lines from the mynote.txt text file:

``` bash
head -n 20 mynote.txt | tail -10
```

To extract a section starting from a specified line number, add a negative sign to the -n value. Here’s how to output lines starting from the fifth line:

``` bash
head -n -5 mynote.txt | tail -10
```

## Conclusion

The Linux tail command is a useful command-line utility that improves file management. Tail prints the last lines of file content from single or multiple text files, which is useful for monitoring log files and updates of files and directories.

You have learned how the tail command works and the different ways to use it. We have provided combinations of syntaxes and examples where it works with other Linux commands for various purposes.

We hope this article has helped you understand the use of the Linux tail command for file management on UNIX-based operating systems better. Good luck.

#### Learn More Linux Commands for Reading Files

[How to Read the Content of a File](/tutorials/linux-cat-command-tutorial-and-examples/)  
[How to Search Inside a Text File With Grep Command](/docs/linux-basics/grep-command-usage-and-examples)  
[How to Read a File With Sed Command](/tutorials/how-to-use-linux-sed-command-examples/)  
[How to Write and Display to File With Tee Command](/tutorials/linux-tee-command-with-examples/)

## Tail Linux FAQ

### **How Do You Grep Tail Command?**

Using grep with the tail command requires turning on the line buffering mode. Doing so allows the process to resume the search while reducing delay. This syntax extracts the last 10 lines of a file while turning on grep’s line buffering mode:  
  

``` bash
tail -f [file_name] | grep --line-buffered [pattern]
```

### **How Do I Get Out of Tail Command in Linux?**

To stop the tail command process and restore the terminal window, press Ctrl+C. While the SIGKILL termination signal also works in this scenario, we advise against using it. SIGINT handles the process more gracefully, allowing the system to end it in proper order, unlike SIGKILL.

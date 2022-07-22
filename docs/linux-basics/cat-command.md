---
sidebar_position: 2
sidebar_label: Cat Command
slug: cat-command-usage-and-examples
---
# Linux Cat Command: Usage and Examples

The cat command is one of the most useful [Linux commands](/linux-basics/commands) you can learn. It derives its name from the word concatenate and let you create, merge or print files in the standard output screen or to another file and much more.

[Download Complete Linux Commands Cheat Sheet](https://app.monstercampaigns.com/c/jg9u9k0by4lj9pvcjeso/)

It does not require you to install anything since it comes pre-installed with the coreutils package in any Debian or Red Hat based system.

In this tutorial, we will cover the common usages of the Linux cat command explaining its features.

- [Linux Cat Command: Usage and Examples](#linux-cat-command-usage-and-examples)
    - [Cat Command Syntax](#cat-command-syntax)
    - [Creating a File with the Cat Command](#creating-a-file-with-the-cat-command)
    - [Viewing the Content of a File with the Cat Command](#viewing-the-content-of-a-file-with-the-cat-command)
    - [Redirecting Content Using the Cat Command](#redirecting-content-using-the-cat-command)
    - [Concatenating Files with the Cat Command](#concatenating-files-with-the-cat-command)
    - [Highlighting Line Ends with the Cat Command](#highlighting-line-ends-with-the-cat-command)
    - [Display Line Numbers with the Cat Command](#display-line-numbers-with-the-cat-command)
    - [Displaying Non-Printable Characters with the Cat Command](#displaying-non-printable-characters-with-the-cat-command)
    - [Suppressing Empty Lines with the Cat Command](#suppressing-empty-lines-with-the-cat-command)
    - [Numbering Non-Empty Lines with the Cat Command](#numbering-non-empty-lines-with-the-cat-command)
    - [Displaying a File in Reverse Order With the Cat Command](#displaying-a-file-in-reverse-order-with-the-cat-command)
  - [Conclusion](#conclusion)
      - [Learn More Linux Commands for Reading Files](#learn-more-linux-commands-for-reading-files)

### Cat Command Syntax

Before we start exploring the article’s subject, we should log into the VPS using [SSH](/tutorials/how-to-use-putty-ssh), and quickly check the basic syntax. The command takes a filename as an argument along with options to specify particular operations.

``` bash
cat [OPTION] [FILE]
```

To find all the available options, just type cat **–help** from the terminal.

### Creating a File with the Cat Command

Using the cat command you can quickly create a file and put text into it. To do that, use the **\>** redirect operator to redirect the text in the file.

``` bash
cat > filename.txt
```

The file is created, and you can begin populating it with text. To add multiple lines of text just press **Enter** at the end of each line.  Once you’re done, hit **CTRL+D** to exit the file.

To verify that the file is indeed created by the command used above, just use the following ls command in the terminal:

``` bash
ls -l
```

### Viewing the Content of a File with the Cat Command

This is one of the most basic usages of the cat command. Without any options, the command will read the contents of a file and display them in the console.

```  bash
cat filename.txt
```

To prevent scrolling large files, you might want to add the option **| more** to output through the less or more display:

``` bash
cat filename.txt | more
```

You can also display the content of more than one file. For example, to display content of all text files, use the following command in the terminal:

``` bash
cat \*.txt
```

### Redirecting Content Using the Cat Command

Rather than displaying the contents of a file in the console you can redirect the output to another file using the option **\>**. The command line would look like this:

``` bash
cat source.txt > destination.txt
```

If the destination file does not exist then the command will create it, or overwrite an existing one by the same name.

To append the contents of the destination file, use the **\>>** option along with the cat command:

``` bash
cat source.txt >> destination.txt
```

### Concatenating Files with the Cat Command

This command also lets you concatenate multiple files into a single one. Basically it functions exactly like the redirection feature above, but with multiple source files.

``` bash
cat source1.txt source2.txt > destination.txt
```

Like earlier, the above command will create the destination file if it does not exist, or overwrite an existing one with the same name.

### Highlighting Line Ends with the Cat Command

The cat command can also mark line ends by displaying the **$** character at the end of each line. To use this feature, use the **\-E** option along with cat command:

``` bash
cat -E filename.txt
```

### Display Line Numbers with the Cat Command

With the cat command you can also display the contents of a file along with line numbers at the beginning of each one. To use this feature, use the **\-n** option with cat command:

``` bash
cat -n filename.txt
```

### Displaying Non-Printable Characters with the Cat Command

To display all non-printable characters use the **\-v** option along with cat command like in the following example:

``` bash
cat -v filename.txt
```

To display tab characters only, use **\-T**:

``` bash
cat -T filename.txt
```

The tab characters will be shown as **^I**

### Suppressing Empty Lines with the Cat Command

To suppress repeated empty lines, and safe space on your display you can use the **\-s** option. Keep in mind that this option will keep one blank line by removing the repeated empty lines only. The command would look like this:

``` bash
cat -s filename.txt
```

### Numbering Non-Empty Lines with the Cat Command

To display non-empty lines with line numbers printed before them use the **\-b** option. Remember the  **\-b** option will override the **\-n** option:

``` bash
cat -b filename.txt
```

### Displaying a File in Reverse Order With the Cat Command

To view the contents of a file in reverse order, starting with the last line and ending with the first, just use the **tac** command, which is just cat in reverse:

``` bash
tac filename.txt
```

Conclusion
----------

That’s it. You now know all the basic features and functions of the cat command. You will now have the basic understanding to put it to good use. For more information on the cat command, you can always invoke manual page of cat with the command **man cat !**.

We hope this article helped you better your Linux Terminal skills. See you in the next one!

#### Learn More Linux Commands for Reading Files

[How to Search Inside a Text File With Grep Command](/docs/linux-basics/grep-command-usage-and-examples)  
[How to Read the End of a File](/tutorials/how-to-use-tail-command/)  
[How to Read a File With Sed Command](/tutorials/how-to-use-linux-sed-command-examples/)  
[How to Write and Display to File With Tee Command](/tutorials/linux-tee-command-with-examples/)

---
sidebar_position: 7
sidebar_label: Grep Command
slug: grep-command-usage-and-examples
---
# How to Use Grep Command in Linux/Unix + Useful Examples

**VPS** &nbsp; Jul 01, 2022 &nbsp; Edward S. &nbsp; 5min Read


![How to Use Grep Command in Linux/Unix + Useful Examples](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/02/grep-command-in-linux-useful-examples.jpg)

Searching for files on a [VPS](/vps-hosting) might seem an easy task at first. However, it can quickly become overwhelming, especially if you have thousands of large log files to check or run a Linux operating system without a graphical interface.

That’s where the grep command comes in – it allows users to search for a string within the system easily.

In this tutorial, we will cover the basics of the grep command and provide some practical use-cases, from searching for multiple strings to performing the grep search recursively.

[Download Complete Linux Commands Cheat Sheet](https://app.monstercampaigns.com/c/jg9u9k0by4lj9pvcjeso/)

- [How to Use Grep Command in Linux/Unix + Useful Examples](#how-to-use-grep-command-in-linuxunix--useful-examples)
  - [Understanding the grep Command Syntax](#understanding-the-grep-command-syntax)
  - [Practical Examples of the grep Command Line](#practical-examples-of-the-grep-command-line)
    - [How to Search for a Word in a File](#how-to-search-for-a-word-in-a-file)
    - [How to Find a Keyword Match in Multiple Files](#how-to-find-a-keyword-match-in-multiple-files)
    - [How to Search for Multiple Keywords](#how-to-search-for-multiple-keywords)
    - [How to Find Matches That Start or End With Query](#how-to-find-matches-that-start-or-end-with-query)
    - [How to Display a Line Number with grep Command Search](#how-to-display-a-line-number-with-grep-command-search)
    - [How to Use Invert grep Search](#how-to-use-invert-grep-search)
    - [How to Perform the grep Search Recursively](#how-to-perform-the-grep-search-recursively)
    - [How to Export the grep Output to a File](#how-to-export-the-grep-output-to-a-file)
  - [Conclusion](#conclusion)
      - [Learn More Linux Commands for Reading Files](#learn-more-linux-commands-for-reading-files)

## Understanding the grep Command Syntax

Grep, or global regular expression print, is one of the most versatile and useful [Linux commands](https://www.hostinger.com/tutorials/linux-commands) available.

It works by searching for text and strings that users define in a given file. In other words, grep enables users to search files for a particular pattern or word and see any lines that contain it.

For example, system administrators who handle hundreds of services and configuration files use grep to search for specific lines within those files.

To start using the grep command, connect to the VPS [using SSH](https://www.hostinger.com/tutorials/how-to-use-putty-ssh).

``` bash
ssh your-username@your-server
```

Linux users can just open the terminal.

The grep basic syntax when searching for a single file looks like this:

``` bash
grep [options] pattern [FILE]
```

*   **grep** – the command instruction.
*   **\[options\]** – modifiers to the command.
*   **pattern** – the search query to be found.
*   **\[FILE\]** – the file in which the command will be searching.

A visual example would look like this:

![The basic syntax for the grep command. Users can specify flags, search string, and file names.](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/02/Grep-syntax.webp)

If you need more information about the command, check out the comprehensive documentation by executing the following command:

``` bash
grep --help
```

While the grep command offers a lot of options, the most important and commonly used flags are these:

*   **\-A** – print lines before the matched string.
*   **\-B** – print lines after the matched string.
*   **\-C** – print lines before and after the matched string.

**ABC** flags help you add some context to your searches. For example, when using grep in a configuration file, lines before or after your preferred string might provide more useful information about the search.

[![ABC regular expression pattern for the grep command](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/02/Grep-ABC-flags.webp)

In the command example above, we used the regular grep utility, which only showed the **Password** line. Then, we combined the **A1** flag to print out one additional line before the matched **Password** string. A similar process was done with **B1** and **C1** flags.

To customize your search even further, add the following flags:

*   **\-i** – case insensitive search. If users, for example, search for a string **car**, it will show the same results as **CAR**.
*   **\-w** – searches for full words only, ignoring your string if it’s a part of another word.
*   **\-c** – will show the number of matches with the searched pattern.
*   **\-r** – enables recursive search in the current directory.
*   **\-n** – search for lines and receive only the matched numbers of the text lines.
*   **\-v** – this option shows the lines that do not match the specified pattern.

Practical Examples of the grep Command Line
-------------------------------------------

Check out these useful examples of the grep command to understand it better.

### How to Search for a Word in a File

One popular use case for grep is searching for a particular word inside a text file.

To do so, just type the following command:

``` bash
grep query file
```

*   **query** – the word you’re looking for.
*   **file** – the file in which you’re looking for the query.

In our case, we’re looking for the word **VPS** in the sample file called **Hostinger.txt**:

grep VPS Hostinger.txt

The output highlights the lines that match this query:

![Searching for a word in a specified file with grep. Users only need to specify the search query and the file name.](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/02/Grep-search-for-a-query.webp)


### How to Find a Keyword Match in Multiple Files

If you need to search through several files, refer to this syntax:

``` bash
grep query file1 file2 file3
```

*   **query** – the word you’re looking for.
*   **file1, file2, file3** – files in which you’re looking for the query.

In our example, we are looking for the word **VPS** in these three files: **Hostinger.txt**, **VPS.txt**, **SharedHosting.txt**.

![Searching for keywords in multiple files. Matched lines highlight the search query and the matching files](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/02/Grep-query-in-multiple-files.webp)

It is also possible to search for all the files in a given directory by applying the following command.

``` bash
grep query *
```

### How to Search for Multiple Keywords

So far, we’ve covered grep commands for matching a single keyword. However, grep also supports multiple queries in a single command.

Here are four different ways to search for multiple keywords:

``` bash
grep 'query1\|query2' file
egrep 'query1|query2' file 
grep -e query1 -e query2 file
grep -E 'query1|query2' file
```

![Searching for multiple keywords at the same time. Grep displays and highlights the output data for the user.](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/02/Grep-multiple-query.webp)

Any of these commands work similarly – you can decide which one to use according to your preference.

### How to Find Matches That Start or End With Query

Grep searches can also look for strings starting or ending with a user-specified query. To match the start of a line, use the **^** regular expression.

``` bash
grep '^query2' file
```

On the other hand, to match the end of a line, use the **$** regular expression:

``` bash
grep '&query2' file grep
```

Users can also combine these two regular expressions and search for all the lines that contain both the start and end query.

``` bash
grep '^queryStart.*queryEnd$'
```

For example, we will be searching for the lines that start with **H** and end with **o**:

![A complex grep search that includes the use of special characters. The grep command lists out the lines that start and end with our specified characters.](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/02/Grep-start-and-end-string.webp)


As seen above, lines that have the **Hello** string match our search query.

### How to Display a Line Number with grep Command Search

Linux configuration files are usually lengthy, ranging from a few hundred to a few thousand lines. For this reason, it can be very hard to track lines position.

Luckily, grep can help. With the use of the **\-n** flag, users will be able to see line numbers as well as their search query.

![Grep search with the -n flag which shows the entire line and line number](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/02/Grep-line-numbers.webp)

In our case, we used grep to search for **line** string inside **the Grep.txt** file. The green numbers on the left display line numbers on our file.

### How to Use Invert grep Search

Users can invert the grep expression by using the **\-v** flag. This is very useful for printing out non-matching lines. The following example shows how the command displays output lines that are not matching the **VPS** search query.

![Inverted grep search. It takes exact matches and removes them from the output](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/02/Grep-inverted-1024x93.webp)

We have also combined the regular expressions and used the **-n** flag to see the matching line numbers.

### How to Perform the grep Search Recursively

Recursive grep is useful for searching between all the lines in sub-directories and files inside the current working directory. For this example, we have created a **Grep** directory with **VPS** and **SharedHosting** directories inside it and will look for the **VPS** query.

![Recursive grep search for the specified file](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/02/Grep-recursive.webp)


### How to Export the grep Output to a File

If you need to save the grep command output, you can do so in a separate file. The easiest way is by referring to the following command:

``` bash
grep query file > OutputFile.txt
```

Keep in mind that you do not need to create the file before, as running the above command will create it automatically. This is what it would look like in the command line:

![Printing out grep command pattern matches to a txt file](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/02/Grep-output-to-a-file.webp)

As seen from the example above, we have also used the **cat** to print out the contents of the newly created file.

## Conclusion

The grep command makes searching between hundreds of files and directories easy. With its vast collection of different flags, you will be able to find specific lines quickly.

In this tutorial, we’ve covered the syntax of the grep command and learned how to:

*   Search for a word in a file.
*   Find a keyword match in multiple files.
*   Search for multiple keywords.
*   Find matches that start or end with your query.
*   Display a line number.
*   Use inverted grep search.
*   Perform recursive search.
*   Export grep output contents to a file.

We’ve also provided some popular flags you can use when trying out the grep command. If you have any insights or questions, let us know in the comments section below.

#### Learn More Linux Commands for Reading Files

[How to Read the Content of a File](https://www.hostinger.com/tutorials/linux-cat-command-tutorial-and-examples/)  
[How to Read the End of a File](https://www.hostinger.com/tutorials/how-to-use-tail-command/)  
[How to Read a File With Sed Command](https://www.hostinger.com/tutorials/how-to-use-linux-sed-command-examples/)  
[How to Write and Display to File With Tee Command](https://www.hostinger.com/tutorials/linux-tee-command-with-examples/)

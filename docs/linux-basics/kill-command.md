---
sidebar_position: 13
sidebar_label: Kill Command
slug: kill-command-usage-and-examples
---
# How to Kill a Process in Linux

**VPS** &nbsp; Apr 28, 2022 &nbsp; Edward S. & Ignas E. &nbsp; 3min Read

![How to Kill a Process in Linux](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/03/how-to-kill-a-process-in-linux.jpg)

Tasks in Linux are called processes. Every process has a unique process ID. In this tutorial, we’ll show you how to terminate a process using [Linux commands](/linux-basics/commands), to improve your [VPS](/tutorials/what-is-vps-hosting) management skills.

[Download Complete Linux Commands Cheat Sheet](https://app.monstercampaigns.com/c/jg9u9k0by4lj9pvcjeso/)

- [How to Kill a Process in Linux](#how-to-kill-a-process-in-linux)
  - [What Is Kill Command Used For?](#what-is-kill-command-used-for)
  - [How to Show the Process ID in Linux](#how-to-show-the-process-id-in-linux)
  - [How to Show All Kill Command Signals](#how-to-show-all-kill-command-signals)
  - [How to Kill a Process in Linux Using the Terminal](#how-to-kill-a-process-in-linux-using-the-terminal)
    - [Using the Kill Command with a PID](#using-the-kill-command-with-a-pid)
    - [How to Kill Multiple Processes in Linux](#how-to-kill-multiple-processes-in-linux)
    - [How to Kill a Process in Linux Using the Pkill Command](#how-to-kill-a-process-in-linux-using-the-pkill-command)
    - [How to Kill a Process in Linux Using the Killall Command](#how-to-kill-a-process-in-linux-using-the-killall-command)
  - [Conclusion](#conclusion)
      - [Master Other Linux Commands](#master-other-linux-commands)

## What Is Kill Command Used For?

Sometimes, you might start a server or an application, forget about it, and need to shut it off. In such scenarios, we can use the kill command.

Below are a few examples where the kill command can be helpful:

*   To stop any automated process
*   To stop a process that has been started by accident
*   To stop a process that consumes a lot of memory
*   To force stop any process running in Linux
*   To stop a background process

Apart from stopping a process, the kill command can provide several features. Like, send a signal to a process. By default, this is taken as a TERM signal which will terminate the process.

## How to Show the Process ID in Linux

Kill commands lets you terminate a process by using a specific process ID, also known as a pid. To show a pid in Linux you can execute the following command:

``` bash
ps
```

This will list all the available processes with a pid. If you want to make your list more specific – add a [grep command](https://www.hostinger.com/docs/linux-basics/grep-command-usage-and-examples) like this:

``` bash
ps -ux | grep java
```

This will display all java processes running in the output.

## How to Show All Kill Command Signals

There are multiple signals available in Linux which can be used to interrupt, terminate, or pause processes. The command can be used as below:

``` bash
kill -l
```

This command will display a manual page entry of the different kill signals with their names and corresponding numbers. While there are multiple signals available, in most cases we would use SIGKILL (9) and SIGTERM (15).

## How to Kill a Process in Linux Using the Terminal

Now we’re ready to move on and learn all the different uses of the Kill Command. To follow along, access your virtual private server using [SSH](/tutorials/how-to-use-putty-ssh).

### Using the Kill Command with a PID

To kill a specific process with a **PID** use the following command:

``` bash
kill 63772
```

Here 63772 is the pid for a process we want to terminate. Since no signal is specified this will be **SIGTERM** signal. Sometimes, this may not work; in that case, you may have to kill a process forcefully.

In such cases, you can use the command format as shown below:

``` bash
kill [Signal_or_Option] pid
```

Below is a sample command to forcefully kill the process:

``` bash
kill SIGKILL 63772
```

Similarly, to kill using the shorter option you can use:

``` bash
kill -9 63772
```

Replace 63772 with the relevant pid for the process to be terminated.

### How to Kill Multiple Processes in Linux

With the same command, you can kill multiple processes. The syntax for this command would be:

``` bash
kill -9 pid1 pid2 pid3
```

Here’s an example showing how it would look in the real world:

``` bash
kill -9 63772 45116 23465
```

### How to Kill a Process in Linux Using the Pkill Command

Pkill is a flavor of the kill command where you can specify the process name or a pattern to find a process:

``` bash
pkill chrome
```

The above command will kill the chrome browser. You can also specify a partial name match in the command line such as:

``` bash
pkill chr
```

However, this command carries a risk of sometimes killing the wrong process, especially when there are multiple processes with the same name.

You can check the list by using the complete process name:

``` bash
pidof chrome
```

The above command can be used when you know the complete name of the process.

You can check for matching processes by using a partial name:

``` bash
pgrep -l chr
```

This command will list the process with the corresponding process ID.

### How to Kill a Process in Linux Using the Killall Command

The basic difference between killall and kill is that killall can terminate the process by name while the kill command uses the pid.

An example of such command is:

``` bash
killall chrome
```

This is similar to pkill. However, killall does an exact name match, while pkill can do a pattern match. This is one of the reasons, killall is safer compared to pkill.

One more difference is the root package to which these commands belong. In Linux, killall belongs to the psmisc package. On the other hand, commands such as ps, top, kill, pkill belong to procps package.

Another difference is that killall can be customized to terminate processes based on timestamps. In case you want to kill a process that has been running for less than 40 minutes, then you can use:

``` bash
killall -y 40m [Process_Name>]
```

You can similarly use the below options together with the killall command:

*   s – seconds
*   m – minutes
*   h – hours
*   d – days
*   w -weeks
*   M – months
*   y – years

## Conclusion

This covers the most important and useful kill commands. To further learn about this essential utility you can refer to the Linux manual. Good luck with your project, see you in the next tutorial!

#### Master Other Linux Commands

[How to Manage Sudo Users in Linux](/tutorials/sudo-and-the-sudoers-file/)  
[How to Test Connection With Ping Command](/tutorials/linux-ping-command-with-examples/)  
[How to Manage Processes in Linux](/tutorials/vps/how-to-manage-processes-in-linux-using-command-line)  
[How to Use Dig Command for DNS Lookup](/tutorials/how-to-use-the-dig-command-in-linux/)  
[How to List Services in Linux](/tutorials/manage-and-list-services-in-linux/)  
[How to Change User Passwords in Linux](/tutorials/how-to-change-password-in-linux/)

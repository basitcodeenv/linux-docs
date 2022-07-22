---
sidebar_position: 8
sidebar_label: Sudo Command
slug: sudo-command-usage-and-sudoers-file
---

# How to Use Sudo and the Sudoers File

**VPS** &nbsp; May 16, 2022 &nbsp; Edward S. &nbsp; 3min Read

The sudo command allows non root users to run other [Linux commands](/linux-basics/commands) that would normally require super user privileges, while the sudoers file instructs the system how to handle the sudo command. In this tutorial, we’ll show you all the sudo command basics and how to edit the sudoers file.

[Download Complete Linux Commands Cheat Sheet](https://app.monstercampaigns.com/c/jg9u9k0by4lj9pvcjeso/)

- [How to Use Sudo and the Sudoers File](#how-to-use-sudo-and-the-sudoers-file)
    - [Understanding Sudo](#understanding-sudo)
    - [The Sudoers File](#the-sudoers-file)
    - [Sudoers File Syntax](#sudoers-file-syntax)
    - [Editing the Sudoers File](#editing-the-sudoers-file)
    - [Use the Sudoers File to Grant Specific Privileges](#use-the-sudoers-file-to-grant-specific-privileges)
  - [Conclusion](#conclusion)
      - [Master Other Linux Commands](#master-other-linux-commands)

### Understanding Sudo

To show how sudo works, first access your [VPS](/tutorials/what-is-vps-hosting) through SSH. If you’re having trouble, check out the [PuTTY tutorial](/tutorials/how-to-use-putty-ssh).

By default, the root user does not need to use the sudo prefix. They already have all the possible privileges. Meanwhile, if a non-root user wants to add another user, they would need to add the sudo prefix to the useradd command, like this:

``` bash
sudo useradd edward
```

If the user doesn’t use the sudo prefix, they will receive a **Permission denied** output.

### The Sudoers File

The sudo command is configured through a file located in **/etc/** called **sudoers**.

Through the sudo command you provide administrative level privileges to regular users.  Normally the first user you create while installing Ubuntu has sudo rights. In a VPS environment that is the default root user. You can configure other users to also be able to run the sudo command. That can be done by editing sudoers.

:::important

**Important!** Note that errors or bad syntax on your sudoers file may result in locking out all users on your distribution.

:::

### Sudoers File Syntax

You can open the file with your preferred text editor. We’ll use **vi**:

``` bash
vi /etc/sudoers
```

Our VPS’ file looks like this:

![An example of the linux sodoers file](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/03/linux-sudoers-file.png)

Let’s look at some of the formats and rules to follow when editing sudoers:

*   All lines starting with **#** are comments
*   **root ALL=(ALL:ALL) ALL** – this line means that the root user has unlimited privileges and can run any command on the system
*   **%admin ALL=(ALL) ALL** – the % sign specifies a group. Anyone in the admin group has the same privileges as of root user
*   **%sudo   ALL=(ALL:ALL****) ALL** – all users in the sudo group have the privileges to run any command

Another line of interest is #includedir /etc/sudoers.d, this means we can add configurations to the file sudoers.d and link it here.

### Editing the Sudoers File

To edit **/etc/sudoers** file, use following command:

``` bash
sudo visudo -f /etc/sudoers
```

It is recommended to use visudo to edit the sudoers file. Visudo makes sure that sudoers is edited by one user at a time and provides necessary syntax checks.

To see which users are in the sudo group we can use a [grep](https://www.hostinger.com/docs/linux-basics/grep-command-usage-and-examples) command:

``` bash
grep ‘sudo’ /etc/group
```

This will output a list of user names.

To add a user called bill to the sudo group, we use the **adduser** command in the command line, like so:

``` bash
adduser bill sudo
```

If we use the grep command to check who is in the group, we’ll see the username bill.

If you want to give anyone root privileges just add them to sudo.

To remove a user from sudo:

``` bash
deluser bill sudo
```

The deluser command will remove bill from the sudo group.

Now the user bill can no longer perform actions that require sudo privileges.

### Use the Sudoers File to Grant Specific Privileges

What if we want bill to be able to run only specific kinds of commands with sudo privileges, like networking?

To do so we create a configuration file in **/etc/sudoers.d/** called networking.

Use the following command to create the file:

``` bash
sudo visudo -f /etc/sudoers.d/networking
```

Add following text in the file:

```
Cmnd\_Alias CAPTURE = /usr/sbin/tcpdump

Cmnd\_Alias SERVERS = /usr/sbin apache2ctl, /usr/bin/htpasswd

Cmnd\_Alias NETALL = CAPTURE, SERVERS

%netadmin ALL=NETALL

Cmnd\_Alias CAPTURE = /usr/sbin/tcpdump Cmnd\_Alias SERVERS = /usr/sbin apache2ctl, /usr/bin/htpasswd Cmnd\_Alias NETALL = CAPTURE, SERVERS %netadmin ALL=NETALL

Cmnd\_Alias     CAPTURE = /usr/sbin/tcpdump
Cmnd\_Alias     SERVERS = /usr/sbin apache2ctl, /usr/bin/htpasswd
Cmnd\_Alias     NETALL = CAPTURE, SERVERS
%netadmin ALL=NETALL
```

Then run the command:

``` bash
addgroup netadmin
```

What we have done in the above file is create a netadmin group. Users in the netadmin group can run commands specified in NETALL. NETALL in turn include all commands under CAPTURE and SERVERS aliases. The command tcpdump is under CAPTURE alias i.e. **/usr/sbin/tcpdump.**

Next we add user bill to the netadmin group:

``` bash
sudo adduser bill netadmin
```

Now the user bill will be able to run the tcpdump command along with other networking related commands.

Conclusion
----------

If you’re working with multiple users, understanding the sudo command and the sudoers file is an absolute must. In this tutorial, you learned all the basics to take control of your system’s privileges!

#### Master Other Linux Commands

[How to Kill a Process in Linux](/tutorials/how-to-kill-a-process-in-linux/)  
[How to Test Connection With Ping Command](/tutorials/linux-ping-command-with-examples/)  
[How to Manage Processes in Linux](/tutorials/vps/how-to-manage-processes-in-linux-using-command-line)  
[How to Use Dig Command for DNS Lookup](/tutorials/how-to-use-the-dig-command-in-linux/)  
[How to List Services in Linux](/tutorials/manage-and-list-services-in-linux/)  
[How to Change User Passwords in Linux](/tutorials/how-to-change-password-in-linux/)
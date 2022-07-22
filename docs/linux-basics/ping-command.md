---
sidebar_position: 14
sidebar_label: Ping Command
slug: ping-command-usage-and-examples
---
# How to Kill a Process in Linux

**VPS** &nbsp; Apr 28, 2022 &nbsp; Edward S. &nbsp; 3min Read

![How to Use the Linux Ping Command](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/03/linux-ping-command-with-examples.jpg)

The PING or Packet Internet Groper is a well-loved [Linux command](/linux-basics/commands)! Its main purpose is to manage the network connectivity status between a source and a device with the help of an IP network. In this tutorial, you’ll learn how it can help your project and how to start using it!

[Download Complete Linux Commands Cheat Sheet](https://app.monstercampaigns.com/c/jg9u9k0by4lj9pvcjeso/)

- [How to Kill a Process in Linux](#how-to-kill-a-process-in-linux)
  - [What is the Linux Ping Command?](#what-is-the-linux-ping-command)
  - [How to Install the Linux Ping Command](#how-to-install-the-linux-ping-command)
  - [How to Use the Linux Ping Command?](#how-to-use-the-linux-ping-command)
    - [1\. Checking Connectivity](#1-checking-connectivity)
    - [2\. Specifying the ECHO\_REQUEST Number](#2-specifying-the-echo_request-number)
    - [3\. Audible Ping](#3-audible-ping)
    - [4\. Setting Intervals](#4-setting-intervals)
    - [5\. Receiving Only the Linux Ping Command Summary](#5-receiving-only-the-linux-ping-command-summary)
    - [6\. Flooding the Network with the Linux Ping Command](#6-flooding-the-network-with-the-linux-ping-command)
  - [Conclusion](#conclusion)
      - [Master Other Linux Commands](#master-other-linux-commands)

## What is the Linux Ping Command?

With the Linux ping command, we can also access the time duration for sending and receiving responses from a network. It works by sending a series of Internet Control Message Protocol (ICMP) messages to the target host and waiting for an ICMP echo message from and to the host and Device. That informs us about the execution of the network.

Essentially it sends the ECHO\_REQUEST message and awaits ECHO\_RESPONSE. If the message shows “fast ping low latency” it means that the connection is fast. It’s measured in milliseconds.

Nowadays, every modern computer, [VPS](/tutorials/what-is-vps-hosting), or device has PING pre-installed, because of its many uses. It’s a quick and straightforward way to check the performance between device and host.

Whether it is a Local Area Network (LAN) or [Wide Area Network](https://en.wikipedia.org/wiki/Wide-area_network) (WAN), ping provides accurate connectivity details. You also get statistical summaries of the test which include the minimum and maximum rounds, the number of transmitted and received packets, the percentage of packets lost, and the standard deviation of the mean. It also allows the user to check the quality of the network connection between two devices. Pretty great, right?

The Ping test between your computer and target host will allow you to determine:

*   Status of the Target host: whether it is reachable
*   Measurement of time between the round trip (Host–Computer-Host)
*   Percentage of lost packets

## How to Install the Linux Ping Command

Remember, first we’ll have to access our VPS using SSH. You can check out our [PuTTY tutorial](/tutorials/how-to-use-putty-ssh) if you’re having trouble!

Most Linux flavors should have ping installed by default. You can check if it is thereby executing:

``` bash
ping -V
```

If ping is not present, a quick system update should do the trick:

``` bash
apt-get update && apt-get install -y iputils-ping
```

## How to Use the Linux Ping Command?

There are various options in Linux that allow the user to test the connectivity between two networks:

### 1\. Checking Connectivity

You can run a simple and quick command in your system to check the status of the target host and server or computer.

In this example, we are checking the network connectivity with **www.google.com**:

``` bash
ping google.com
```

If you are not sure what the domain is, you can also use the IP address. You should see Google’s IP address displayed in brackets, along with a complete statistical summary.

*   **min –** refers to the minimum time to receive a response
*   **avg –** shows the average time to get responses
*   **max –** reflects the maximum time to get a response

To stop the ping command in Linux, we should use **Ctrl+C** to stop sending packets to the target host. The command will stop all the processes in the terminal.

### 2\. Specifying the ECHO\_REQUEST Number

The **\-c** command option is used to specify the number of packets or requests the user wants to perform.

The syntax would look like this:

``` bash
ping –c * exampledomain.com
```

Here **\*** is the number of pings you want to perform.

### 3\. Audible Ping

The **\-a** Linux ping command option creates a beep to check whether the host is active or not, audibly informing you.

The command would look like this:

``` bash
ping –a exampledomain.com
```

Remember, to terminate the ping process press **Ctrl+C**.

### 4\. Setting Intervals

The **–i** option in Linux allows the user to set intervals in seconds between each packet.

The command follows the same structure as the previous ones:

``` bash
ping –i 2 –c 7 exampledomain.com
```

Here the two numbers can be changed to what you need.

### 5\. Receiving Only the Linux Ping Command Summary

To receive the summary of the network only, use the **–q** option in the Linux terminal command line:

``` bash
ping –c 7 –q exampledomain.com
```

Again, we’re still using **\-c 7** to performs seven requests, but only receive the summary due to the **\-q** addition.

### 6\. Flooding the Network with the Linux Ping Command

The ping command allows users to send 100 or more packets per second with the help of the following command:

``` bash
ping –f  exampledomain.com
```

This option is great if you want to test how your website or server deals with network stress – a large number of requests.

## Conclusion

Ping is a common utility for troubleshooting the accessibility of hosts on a network. It helps us understand the reason why a website might not be loading up.

We need to know the root cause of the issue. It can be anything from internet connectivity, loss of the network or the website no longer being available. Ping is the command that helps us determine the approachability of a network device.

Being quick and straightforward, many users are opting to use it for troubleshooting issues. And now you can use it too!

#### Master Other Linux Commands

[How to Manage Sudo Users in Linux](/tutorials/sudo-and-the-sudoers-file/)  
[How to Kill a Process in Linux](/tutorials/how-to-kill-a-process-in-linux/)  
[How to Manage Processes in Linux](/tutorials/vps/how-to-manage-processes-in-linux-using-command-line)  
[How to Use Dig Command for DNS Lookup](/tutorials/how-to-use-the-dig-command-in-linux/)  
[How to List Services in Linux](/tutorials/manage-and-list-services-in-linux/)  
[How to Change User Passwords in Linux](/tutorials/how-to-change-password-in-linux/)

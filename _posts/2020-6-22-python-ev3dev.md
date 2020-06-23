---
title: 'Python on the ev3dev framework'
layout: post
tags:
	- python
	- ev3
	- robotics
	- linux
	- github
	
---
## Introduction:
Recently, I have been working on a project to use Python on the ev3dev platform. This is useful, because you can write complex programs for your robots. For example, you could [connect the ev3 to a PS4 controller.](https://by-the-w3i.github.io/2018/01/03/EV3-PS4-controller/) For me, I was working on a SumoBot, a robot that battles with another, and tries to push it out of a ring. However, this approach will work with an sort of robot.

## Overview:
In this tuorial, I will show you how to:
- Download the ev3dev operating system for your brick.
- Connect your brick to your Wndows or Mac computer.
- Setup PyCharm on your computer.
- Connect to a GitHub repo.
- Sync the code to your brick.

## Materials:
You will need the following:
- A Windows or Mac with a working Internet and Bluetooth connection.
- An ev3 brick with various sensor and motors.
- A 2-16gb SD card.
- A way to put the SD card into your computer.

## 1: Getting started:
1. First, you will have to download the ev3dev boot image for the ev3 brick. This enables it to work with the Python programming language. You can find the image here.
2. Unzip the file, and move the contents to somewhere where you can easily access them.
3. Next, flash the image onto your SD card.
	> **Note:** to do this, use a program like Etcher, or Rufus, or use the command line. Make sure that you select the correct disk image.
4. Insert the SD card into the slot in the brick. Make sure that your brick is off.
5. Next, turn on your brick. It will flash wierdly and show lots of text. If it doesn't show a menu screen in 15 minutes, repeat steps 4-5.
6. Next, we need to connect the brick to your computer.
7. [View this website for instructions on how to connect your brick to the computer.](https://www.ev3dev.org/docs/tutorials/connecting-to-the-internet-via-bluetooth/)
8. Connect to your computer with ssh:
	- If you have a Windows computer download PuTTy, and launch it. Next type in `ev3dev.local`<br>![PuTTy](/static/assets/img/putty.png)
	- Then, type `robot` as the username.
	- If you have a Mac, then open Terminal, then type `ssh robot@ev3dev.local`
	- Next type in `maker` as the password.
	> Having an error message? Make sure your robot is on, and that you have connected the brick. Also, make sure you have the correct username and password.
	- You have access to your brick's inner workings! Try typing `fortune` to get a witty response from the computer.<br>![ev3dev shell](https://www.ev3dev.org/images/windows/10/putty-robot-at-ev3dev.png)
	- Your home folder is `/home/robot` this is where you are put when you connect to the brick.
	> **Some basic commands:**
	>- **cd {path}**: changes the current working directory to 
	>- **ls**: This shows all the files and folders in the current working directory.
	>- **cat {file}**: This returns the contents of the specified file.
	>- **nano {file}**: This opens an editor for the specified file. Press `ctrl+x` (`^x`)to save and exit.
	>- **clear**: Clears the terminal.
	>- **logout**: Logs out of remote connection.
	>- **rm -rf {path}**: Deletes file or folder.
	>-**python3 {file}**: Runs the specified python program.
	- Right now, you can `nano` files into existence and run them from the terminal, but this is less than ideal, in the next section, you will set up PyCharm and Git.

## 2: Setting up a Development Environment:
1. [Download PyCharm community edition](https://www.jetbrains.com/pycharm/download/) (or the Pro version if you have it, it's not needed.)
2. Open the file and install it to your computer.
3. If you have Windows, you have to configure Git, if you have Mac, you already have it installed, so skip to step 4.
	- Download [git-scm for Windows](https://git-scm.com/download/win).
	- Open and follow the install instructions with default options.
	- Open PyCharm, and push `ctrl + alt + s` to open preferences.
	- Goto `Version Control > git` and in the top file path put `C:\Users\<your username>\AppData\Local\Programs\Git\git.exe`
4. Now, [get a GitHub account](https://github.com/signup) if you don't have one yet. They are free, and tremendously useful.
5. Goto [https://github.com/new](https://github.com/new) and create a new repository with the name `ev3`, and select the option to include a `README.md`.<br>![New Repo](https://raw.githubusercontent.com/cole-wilson/cole-wilson.github.io/master/static/assets/img/ghnew.png)
6. Open PyCharm.
7. Goto `Checkout from Version Control` and go to the GitHub tab. Sign in, and select your `ev3` repository. ![Git](http://www2.lawrence.edu/fast/GREGGJ/CMSC210/intro/installing1.png)
8. Now, you should have your code in PyCharm. As you can see, all that you have now is a file called `README.md`.

## 3: Adding Code to the Program.
1. First, in the upper lefthand corner, it will say your project name. Right click on it, and push Create New Python file.
2. Pycham should ask you if you wan to add the file to Git. You should do this, and select the option to automatically do this.
3. In the new file, type:
	 ```python
	 import time
	 print('The program is starting...')
	 time.sleep(2)
	 print('The program is ending.')
	 ```
4. In the VCs tab in PyCharm, press commit changes.
5. Click the blue arrow next to the COMMIT button, and push `Commit and Push`.
6. Then push `Push`.<br>![commit](https://raw.githubusercontent.com/wiki/WheatonCS/Lexos/Developer-Guide/git-pycharm/commit-push-button.PNG)
7. Your code is now on GitHub, but how to get it on the brick?
	 > You can view your code by going to https://github.com/{your-username}/ev3.

## 4: Adding code to the brick:
1. If you are on Windows, open Git-Bash from the start menu, if you have a Mac, open Terminal.
2. Type `git clone https://github.com/{ github username }/ev3.git`. This copies your code into a local file.
3. Next, type `sftp robot@ev3dev.local`, *notice it is not `ssh`* 
4. Put in your password.
5. Now type `cd ~`, then `put ev3`
6. Now open up your SSH session. Type `ls` to view your files.
7. You should see a blue or green folder called `ev3`
8. Go into the folder by typing `cd ~/ev3`
9. Then, type `python3 main.py`
10. Your program takes a while to load, but then it runs! 

## 5. Simplifying the process:
1. Every time you would like to add code to your robot, you will have to remove the old code from the robot, and then do all of sections 3 and 4 again.
2. We will simplify this process.
3. Close your terminal. (Either Git-Bash, or Terminal)
4. Open a new terminal.
5. Type nano `e.sh`
6. Add this code to the file:
	```bash
	echo "Starting..."
	rm -rf ev3
	git clone htttps://github.com/< username >/ev3
	sftp robot@ev3.local:~ <<< $'put {ev3}'
	echo "Done."
	```
7. Push `^X` to save, and type `chmod + x e.sh`
8. Now, all you have to do is type `rm -rf ~/ev3` on the robot, and `sh e.sh` on the local computer to update the brick.
9. We can go even further and make custom commands on the brick!
10. On the brick,  type `sudo nano /etc/bash/bash.rc` and enter your password.
11. Add this to the end of the file:
	```bash
	alias prep='rm -rf ~/ev3'
	alias run='python3 ~/ev3/main.py'
	```
12. Restart the brick.

## 6. So far...
 Now, you write the program in Pycharm, and commit+push to GitHub. 
 Then, on an SSH session, you type `prep` to clear the brick.
 Then, on your local terminal, type `sh e.sh`. 
 On your SSH session, type `run`.

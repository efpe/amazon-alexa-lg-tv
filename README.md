# Amazon Alexa LG TV

Use your ~~Echo or~~ Echo Dot to turn on/off your LG TV.

## Compatibility    

You need a TV with WebOS 2.0+. Compatible with Linux and MacOS (Python poll is not supported by Windows).

## Usage

- "Alexa, turn on TV"
- "Alexa, turn off the TV"
- "Alexa, turn on Plex"
- "Alexa, turn off Plex"
- "Alexa, turn on Netflix"
- "Alexa, turn off Netflix"
- "Alexa, turn on Volume" (default level is set to 44)
- "Alexa, turn off the Volume" (sets volume to 0)
- "Alexa, turn on Playback" (Can also be used as an "OK" button when on a Netflix "Are you still watching?" prompt.)
- "Alexa, turn off Playback"

(You can also use stop/start in place of the turn on/off invocation)

## Customize Commands
- If you want to start an app, add the following lines. To find the app id, run "python lgtv.py listApps" and find the app ID. Remember to add a trigger on line 27:

       elif name == "hulu" and state == True:
            os.system("python lgtv.py startApp [appid]")
            print "Launched Hulu"
        elif name == "hulu" and state == False:
            os.system("python lgtv.py closeApp [appid]")
            print "Closed Hulu"
            
- If you want to change inputs, add the following lines. Remember to add an "HDMI X" trigger on line 27 (this is the name Alexa listens for, it can be anything you want).

        elif name == "HDMI X" and state == True:
            os.system("python lgtv.py setInput HDMI_X")
            print "Input set to HDMI X"
            
See https://github.com/klattimer/LGWebOSRemote for a full list of triggers.

## Install

- Clone this repository
- Install python (I used 2.7.9 but should work with 3.x)
- Run "pip install -r requirements.txt"
- Authenticate with "python lgtv.py auth [IP Address]"
- Start the script with `python alexa-tv.py`
- Enable "Mobile TV On"
- On the Alexa App, go to "Smart Home" > "Devices" > "Discover" for Alexa to find all commands

When you try to turn on/off the TV for the first you will need to allow the script to access your TV. Alternatively, run "python lgtv.py auth [IP Address]"

### Supervisord

You can use supervisord to run your script
Sample config:

```
[program:alexa-tv]
command=/usr/bin/python /srv/amazon-alexa-lg-tv/alexa-tv.py
process_name=%(program_name)s
numprocs=1
directory=/srv/amazon-alexa-lg-tv/
autorestart=true
user=nobody                   ; setuid to this UNIX account to run the program
redirect_stderr=true
stdout_logfile=/var/log/alexa-tv.log
stdout_logfile_maxbytes=1MB
stdout_capture_maxbytes=1MB
```

## Thanks

- https://github.com/toddmedema/echo
- https://github.com/klattimer/LGWebOSRemote


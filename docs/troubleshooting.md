# Troubleshooting

!!! info
    
    You are viewing a version of the documentation that is currently under 
    active development.

 This page provides some workaround for issues that you may encounter during a local build.

## Open Workspace | Cenitex | Citrix
Unable to install software (e.g Docker Desktop) or run commands which requires elevated permissions.

1. Check if you Open Workspace is in your machine. This will allow software installation that requires elevated permissions.
2. If you believe to have Open Workspace installed but still have issue with installations, logoff from Citrix Gateway (Windows Taskbar Icon) and reconnect through Go Connect (Window search). An IE browser will open and ask for your DPC login credentials. Process might take some time to complete for others and for some, browser seemed to be hanging. In that case try restarting your computer and retry Go Connect again.
3. Check again to see if you have the elevated permissions or not. You might have restart your computer several times to take effect.

## SSH Key
*(add ssh key issue if any)*

## Lagoon | Lagoon CLI
*(Remote work)* Unable to resolve host or cannot descrypt encoded SSH

- Check if ssh-agent is running: ``` eval `ssh-agent` ```
- Sometimes /etc/resolv.conf might have changed. You will have to set nameserver to your internet default gateway.
- Create if haven't both *id_rsa* and *id_rsa.pub* from copying your newly under your *.ssh* folder. Now, run command `ssh-add` for both id_rsa and your id_\<yoursshid\>

## Pygmy-Go 
- 15 October 2021 [*(v0.7.1)*](https://github.com/fubarhouse/pygmy-go/releases/latest): There was an [issue #312](https://github.com/fubarhouse/pygmy-go/issues/312) with SSH keys trying to add keys with passphrase and returned *"The agent has no identities."*. Workaround is to create another SSH without passphrase and re-add the keys. After solving pygmy-go and ssh keys issues, do another build with the following sequence:
    1. restart pygmy
    2. restart docker
    3. restart build

- Error 404 or Site can't be reached
    - Include the port number from .pygmy.yml
        ```
            PortBindings:
                <port_number>/tcp:
                - HostPort: <port_number>
        ```
    - Workaround is to change to use https
    

## Docker | Ahoy
- *=> ERROR [reference-sdp-vic-gov-au_nginx internal] load metadata for ...*
    - From Docker dashboard, go to Setting -> Docker Engine and look for the key "buildkit". Change the value to false.


## Others
- resolv.conf may changed the nameserver unexpectedly several times during build. To stop it from changing, create a wsl.conf and insert the following:
    ```
        [network]
        generateResolvConf = false
    ```
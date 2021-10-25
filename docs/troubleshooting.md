# Troubleshooting

!!! info
    
    You are viewing a version of the documentation that is currently under 
    active development.

You may encounter some issues from doing a build and below are some of the workarounds.

## Open Workspace | Cenitex | Citrix
Unable to install software or run commands which requires elevated permissions.

1. Check if you open workspace is in your machine. This will allow software installation that requires elevated permissions. 
2. Logoff citrix and reconnect through Go Connect which will open an IE browser and ask for your DPC login credentials. Login might take some time for others or browser seemed to be hanging. In that case try restarting your computer and retry Go Connect again.
3. Check again to see if you have the elevated permissions or not. You might have restart your computer.

## SSH Key
*(add ssh key issue if any)*

## Lagoon | Lagoon CLI
*(Remote work)* Unable to resolve host or cannot descrypt encoded SSH
- check if ssh-agent is running: ``` eval `ssh-agent` ```
- Sometimes /etc/resolv.conf might have changed. You will have to set nameserver to your internet default gateway.
- Create if haven't both *id_rsa* and *id_rsa.pub* from copying your newly under your *.ssh* folder. Now, run command `ssh-add` for both id_rsa and your id_\<yourssh\>

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
- *rm: cannot remove ...: Permission denied*
    ```
        sudo ahoy clean-full
        # or
        sudo chown -R <userid>:<userid> . && time ahoy build
    ```

## Others
- resolv.conf may changed the nameserver unexpectedly several times during build. To stop it from changing, create a wsl.conf and insert the following:
    ```
        [network]
        generateResolvConf = false
    ```
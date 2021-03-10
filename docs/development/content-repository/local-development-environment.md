# Local development environment

## Drupal tools setup
We are using [Dev Tools](https://github.com/dpc-sdp/dev-tools) for Drupal module 
and  site development.   

### Prerequisites
1. Make sure that you have latest versions of all required software installed:   
  - [Docker](https://www.docker.com/) 
  - [Pygmy](https://docs.amazee.io/local_docker_development/pygmy.html)
  - [Ahoy](https://github.com/ahoy-cli/ahoy) 
2. Make sure that all local web development services are shut down (`apache/nginx`, `mysql`, `MAMP` etc).

### Setup
1. `curl https://raw.githubusercontent.com/dpc-sdp/dev-tools/master/install | bash`
2. `pygmy up`
3. `ahoy build` 

Find more information about Dev Tools at https://github.com/dpc-sdp/dev-tools.

### Troubleshooting

#### Pygmy issues (macOS)

```zsh: command not found: pygmy```

**Solution:**
1. Ensure that `ruby` is installed on your machine by issuing the following command on your terminal. (Skip to step 3 if already installed).
```ruby -v```

2. If not installed, enter the following command to install to `ruby`:
```brew install ruby```

3. Update the PATH environment variable to point to Homebrew's Ruby installation. Replace `.zshrc` with `.bash_profile` if you're using bash.

```echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc```

4. Install `pygmy` by issuing the following command:

```gem install pygmy```

5. Update the PATH environment variable to add binaries installed by gem. Replace `3.0.0` with the version number of `ruby` you've installed.

```echo 'export PATH="/usr/local/opt/ruby/bin:/usr/local/lib/ruby/gems/3.0.0/bin:$PATH"' >> ~/.zshrc```

#### Docker issues (macOS)

```docker: Error response from daemon: dial uni docker.raw.sock: connect: no such file or directory```

**Solution:**
1. Enter the following command to restart Docker service:

```service docker restart```

2. If the error persists, reinstall Docker.

#### Ahoy issues (macOS)

```
Could not load API JWT Token, error was:                               [warning]
'lagoon@ssh.lagoon.amazeeio.cloud: Permission denied (publickey)'.
```

**Solution:**
1. Ensure that your SSH public keys (either `ssh-rsa` or `ssh-ed25519`) have been added to your Lagoon account [settings](https://dashboard.amazeeio.cloud/settings). Replace `username` with your own username.

On macOS, SSH keys can be found on the following directory:
`/Users/username/.ssh/id_rsa.pub`

On Windows, SSH keys are typically located at: `C:\Users\username\.ssh`

#### SSH Keys

To generate SSH keys in macOS, follow these steps:

1. Enter the following command in the terminal window:

```ssh-keygen -t rsa```

This starts the key generation process. When you execute this command, the ssh-keygen utility prompts you to indicate where to store the key.

2. Press the ENTER key to accept the default location. The ssh-keygen utility prompts you for a passphrase.

3. Type in a passphrase. You can also hit the ENTER key to accept the default (no passphrase). However, this is not recommended.

Your public key is saved to the `id_rsa.pub`; file and is the key you should add to your Lagoon account settings. You can save this key to the clipboard by running the following command:

```pbcopy < ~/.ssh/id_rsa.pub```

See [**Pygmy Troubleshooting SSH Key Issues**](https://pygmy.readthedocs.io/en/master/ssh_agent/#troubleshooting) for more information.
<h1 align="center">
	<a>
		<img align="center"
			width="600"
			alt="Logo"
			src="https://cdn.anolet.com/logos/longform/color/LongFormSideBlack80.png">
	</a>
</h1>

# Anolet Game Client Internal Documentation

## Setting up for the first time

### Setting up Doppler

#### Signing up for Doppler

All Anolet services use Doppler to manage environment variables. To get access to Anolet's Doppler workplace, [sign up to Doppler](https://dashboard.doppler.com/register) with your @anolet.com email. You will be prompted to create your own Doppler workplace. Click "Skip" located in the top right. Then, ask Rus to grant you permissions. You will be added as a collaborator and will be able to view secrets for `dev`.

#### Downloading Doppler CLI

Run the following commands:

```shell
mkdir -p $HOME/bin
curl -Ls --tlsv1.2 --proto "=https" --retry 3 https://cli.doppler.com/install.sh | sh -s -- --install-path $HOME/bin
```

Now, verify the Doppler CLI was installed by checking its version:

```shell
doppler -v
```

#### Authenticating Doppler CLI

Now, you will have to authenticate Doppler CLI with your Doppler account by running:

```shell
doppler login
```

You will only have to do this part once for all of Anolet, so you will not need to reinstall Doppler CLI or relogin if you are working on the API.

#### Linking Doppler

Now, you'll need to configure this folder to use the Doppler configuration for the dev@client project:

```shell
doppler setup
```

You'll see a message that says "Use default settings from repo config file (...)?". Answer yes.
You have now configured Doppler.

### Setting up an MQTT server

#### Global dev MQTT server

We have provided an MQTT server for use in `dev` environments. Doppler is preconfigured with the related environment variables for this MQTT server.

#### Creating your own MQTT server

We will provide instructions on how to do this later. The global dev MQTT server is more than sufficient for right now, but if you insist, you can find documentation online on how to create your own MQTT server.

### Setting up a Redis server

#### Installing Ubuntu

You'll need to install Ubuntu to run Redis. [Download Ubuntu for Windows](https://www.microsoft.com/store/productId/9NBLGGH4MSV6)

#### Installing `redis-server`

Install Redis by running the following commands in Ubuntu for Windows:

```shell
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

sudo apt-get update
sudo apt-get install redis
```

### Using Redis server

Doppler is already configured to use the default credentials and default URL for a local redis instance, `redis://localhost:6379`.

### Setting up local Anolet API

Doppler is configured to use the staging API for `dev`, so you do not need to worry about creating a local API instance. However, do not mess around with visit counts or current player counts. The code by default will not modify these counts as long as the `ENVIRONMENT` environment secret is set to `dev` (which it is).

If you want to test the client with a local API, or otherwise change any environment variables regardless, [create a branched config](https://docs.doppler.com/docs/branch-configs).

### Installing packages

Install all the NPM packages by running the following command:

```shell
npm i
```

## Starting in development mode

### Start `redis-server`

To start `redis-server`, all you need to do is run the following command in Ubuntu for Windows:

```shell
redis-server
```

### Start the server

Start the node server & webpack with the following command:

```shell
npm run dev
```

This will automatically restart the server when server changes are made and automatically rebuild with webpack when client changes are made.



# IP Lookup

IP lookup is the project getting the IP's information through the https://ipwhois.io. 
This project is based on Ubuntu 22.04.

## Environment
- [Install the Git](https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-22-04)
- [Install the Docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04) 
- [Install the Docker Compose](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-22-04) 
## Technologies used

[<img align="left" alt="TypeScript" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" />](#)
[<img align="left" alt="Nest.js" width="30px" src="https://github.com/devicons/devicon/blob/master/icons/nestjs/nestjs-plain.svg" />](#)
[<img align="left" alt="MongoDB" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" />](#)
[<img align="left" alt="Docker" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png" />](#)
<br/>

## Running the app locally
1. Clone the code
```
git clone https://github.com/midastouch-dev/ip-lookup.git   
```
```
cd ip-lookup
```
2. Run the docker image
```
sudo docker compose up -d
```

Once the server is up-and-running, go to your browser, and visit http://localhost:4000 to use the app.
And the database have run as the port is 27017.

You can check the running 2 containers(backend and database) by the following comment.
```
sudo docker compose ps
```
4. Lookup the Information using Project
- Get IP information (Method: Get)
```
http://localhost:4000/lookup/8.8.8.8
```
- Delete IP information (Method: Delete)
```
http://localhost:4000/lookup/8.8.8.8
```
- Update IP information automatically (Method: Put)
```
http://localhost:4000/lookup/8.8.8.8
```
- Pause the auto updating of IP information (Method: Get)
```
http://localhost:4000/lookup/pause
```

5. Finish the docker compose
```
sudo docker compose down
```

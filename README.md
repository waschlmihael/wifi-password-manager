<h1>Wifi password manager</h1>
<h2>Use case</h2>
Application is useful for daily updating wifi password on the WLC controller. Updated password is than send to the web application and 
Cisco Webex devices. 

<h2>Instalation</h2>
<ul>
<li>Docker 20.10.21 or later must be instlled</li>

Clone or fork the wifi-password-manager repository to create a local copy of the scripts to work with.
</ul>

<h2>Usage</h2>
<ul>
    <li>Before you run the docker compose you need to create the `.env` in `backend/prod`. You can find example in `examples/backend/.env`</li>
    <li>Build and run application using `docker-compose up -d --build` command</li>
    <li>Set ansible playbook to update wifi password on WLC controller</li>
</ul>


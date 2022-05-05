install-api:
	cd api && npm install

start-api:
	cd api && npm run start

install-front:
	cd front && npm install

start-front:
	cd front && npm run start

install-all: install-api install-front

start-all: start-api start-front
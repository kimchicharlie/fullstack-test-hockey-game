<p align="center">
  <a href="https://github.com/Maplr-Community/nodejs-test-hockey-game">
    <img src="https://maplr.co/wp-content/uploads/2019/12/Fichier-23@3x.png" alt="Logo" height="150">
  </a>
  <h3 align='center'>API Test Développeur Fullstack intermédiaire</h3>  
  <br />
</p>

## Install

`npm install`

## Launch

`npm run start`

### Provisioning database

The database used for this project is hosted on [ElephantSQL](https://www.elephantsql.com/), we are using a PostgreSQL 13.5

The provided data.json contained a few duplicated teams, I have made a new one called newData.json deduplicating these.

I have also made a small script to provision an empty postgres, the database should be filled with data already but otherwise, you can fill it using

`npm run database:feed`

### File architecture

I am using a file architecture based on resources on the higher level instead of having technical layers (repository, handlers, controllers, models, validations, authorizations, ...) at the highest level. I made that choice because when we will add resources, adding the corresponding folders in each technical layer folder can easily become a bottleneck.

In each resource folder, the same technical layer based tree can be seen:

- router (helper mounting routes on a koa router and returning it)
- handlers (business logic layer)
- repository (data layer)

### Data layer

I am not using any ORM here as I feel like Postgres is powerful enough to answer all needs. In order to keep a strong typing, I choose [pgtyped](https://pgtyped.vercel.app/docs/sql-file-intro) that builds typescript types by introspecting the PG database.

To do so, launch the command below in the /api folder

`npm run pgtyped:generate`

You can see in the /repository folders that there are a few data utils that can be used to accomplish specific actions in the database, these are pretty easy to write. The major downside is that we don't have any model layer in this project.

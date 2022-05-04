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

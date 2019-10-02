# stack

requires `mongodb`

install with: `yarn`

configure database and server port (server port has to be 3001 for now): `server/config.js`

initialize database with demo data: `yarn --cwd server initdb`

run development server/client: `yarn watch`

## next

    + error handling / logging
    + form generator for react to edit and add entries
    + router for react
    + react-redux

## notes

## considerations

Since the requirements of the projects are very broad, and my experience when it comes to bigger teams and typical problems of scale are atypical, I choose a compromise of technologies that I know very well and technologies that should scale to a fair degree.

### shortcomings

    + no testing on client side
    + sparse client, no infrastructure (router, etc.)
    + completely insecure
    + no deployment strategy
    + no limitation consideration of runtime environment

## server

### pattern

    + stateless for easy scalability
        + scale simple sessions with fast database
    + tread routes in a decoupled manner

### tech-stack

    + mongodb (easiest tooling / setup, native feeling to javascript)
    + node (one language for server and client, fast for simple data access)
    + express (mainstream known technology, scalable and fast enough)
    + moongose (convenient database access, simple mongo would have been sufficient though)
    + typescript (typing and interfacing, not useful at this point except simple tooling for modern JS)

## client

### tech-stack (client)

    + react
        + enforces a stronger structure / more opinionated(?)
        + no two way data binding by default (cleaner data flow)

### tech-options

    + next ist the current stack as a default package, my experience with nuxt are discouraging though
    + meteor (out of the box full stack)
    + react (get rid of default reactivity, more advanced tooling)
    + angular (native TS support, more boilerplate)

    + graphQL,
        + very flexible yet save,
        + offers great tooling,
        + some definitions can be tech agnostic
        - overkill for the current requirements

    + use mongo schema and form builders
    + use a more specific REST api framework / database layer for server
    + use a relational database (?)

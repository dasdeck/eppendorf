# stack

angular
http://schemaform.io/
https://www.apollographql.com/docs/angular/basics/setup/


https://www.npmjs.com/package/graphql-compose-mongoose
mongoose


## considerations

Since the requirements of the projects are very broad, and my experience when it comes to bigger teams and typical problems of scale are atypical, I choose a compromise of technologies that I know very well and technologies that should scale to a fair degree.

### shortcomings

    + vue-js is less standardized as react but more focused
    + no testing on client side
    + sparse client, no infrastructure
    + current setup is completely insecure
    + no deployment strategy
    + no variability consideration in runtime environment

### tech-options

    + typescript (typing and interfacing)
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

## server


### pattern

    + stateless for easy scalability
        + scale simple sessions with fast database
    + tread routes in a decoupled micro-service manner

### tech

    + mongodb (easiest tooling / setup, native feeling to javascript)
    + node (one language for server and client, fast for simple data access)
    + expressjs (mainstream known technology, scalable and fast enough)
    + moongose (convenient database access)

## client

### pattern

    + simple single page app with store for team scalability


### tech

    + vuejs (no architectural lock in / light weight, known software)
    + vuex (scalable structure/pattern)
    + axios (simple promise based api, works on server)


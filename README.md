## pdp
### Map wiki server in Flask

Mongodb allows flexible storage for scraped data.
Flask serves data via rest api.
Single-page application as front-end.

Front-end dev in separate repo. Build is copied to be served from here.

Available routes:

`/`
>Serve index page to client, including the web client which provides a search
form and interactive map. This single page app will update map and search
results via XHR fetch.

`/search/<term>`
>Get a list of places with a search term matched in the author, title or
short description fields as JSON.

`/places/near/<lng>/<lat>`
>Get a list of places near provided coords as JSON.

`/places/<id>`
>Return detailed information on provided place as JSON.

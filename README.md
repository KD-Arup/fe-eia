# Getting started

1. Run npm install to install all dependancies. 

2. Create a file alongside package.json called ".env.local" with your mapbox key in it. The format should be as follows

```
REACT_APP_MAPBOX_TOKEN="PUT YOUR KEY HERE"
```

3. If your map is still not working, paste the command below into your terminal.

```
echo $MapboxAccessToken
npm start &
open "http://localhost:9966/?access_token=$MapboxAccessToken"
```

4. Run the following command in your terminal to start the app. 

```
npm start
```
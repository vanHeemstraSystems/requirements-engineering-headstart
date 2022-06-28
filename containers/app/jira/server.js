// For documentation on Jira REST API see below resources:
// - https://developer.atlassian.com/server/jira/platform/jira-rest-api-examples/
// NOTE: If your Jira Server version is 8.4 or later, so look for 8.4 and later !!
// Examples:
// You can get a list of all the projects from the following endpoint:
// http://HOST:PORT/rest/api/2/project

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// See https://www.npmjs.com/package/node-fetch
const fetch = require('node-fetch');
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');
require('dotenv').config();

const config = {
    name: 'sample-express-app',
    port: 3001,
    host: '0.0.0.0',
};

const app = express();
const logger = log({ console: true, file: false, label: config.name });

// Set strict SSL to false, like so
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// For the creation of a Personal Access Token (PAT) see
// https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html
// console.log('The value of JIRA_HOST is:', process.env.JIRA_HOST);
// console.log('The value of JIRA_PAT is:', process.env.JIRA_PAT);

// Source https://www.geeksforgeeks.org/how-to-use-the-javascript-fetch-api-to-get-data/#:~:text=Approach%3A%20First%20make%20the%20necessary,by%20await%20fetch()%20method.
// Source https://code-boxx.com/javascript-fetch-auth/
// Source https://developer.mozilla.org/en-US/docs/Web/API/btoa
// Source https://stackabuse.com/making-http-requests-in-node-js-with-node-fetch/
// Source https://stackoverflow.com/questions/3905126/how-to-use-http-client-in-node-js-if-there-is-basic-authorization

// api url
const host = process.env.JIRA_HOST;
const rest_url = host + process.env.JIRA_REST;
const username = process.env.JIRA_USERNAME;
const password = process.env.JIRA_PASSWORD;
const credentials = "Basic " + Buffer.from(username + ":" + password).toString('base64'); // Encode to Base64

// Defining async function
async function getData(url) {
  console.log("url = ", url);
  try {
    // Storing response
    const response = await fetch(url, {
      headers: {"Authorization": credentials}
    });
    // Returning data in form of JSON
    return await response.json();
  } catch(error) {
    console.error(error);
  }
}

app.use(bodyParser.json());

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));
app.use(ExpressAPILogMiddleware(logger, { request: true }));
// See https://medium.com/@ehzevin/hang-in-there-a-solution-to-socket-hang-up-5e04c600fa89
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.get('/', (req, res) => {
    res.status(200).send({"msg": "Welcome to CORS server 😁"});
});

app.get('/cors', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send({"msg": "This has CORS enabled 🎈"});
});

app.get('/projects', async (req, res) => {
  const api_url = rest_url + "project";
  data = await getData(api_url);
  console.log(data);
  res.status(200).send({"data": data });
});

app.listen(config.port, config.host, (e)=> {
    if(e) {
        throw new Error('Internal Server Error');
    }
    logger.info(`${config.name} running on ${config.host}:${config.port}`);
});

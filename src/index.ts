import { dbConnect } from './db/index';
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as http from "http";

import { initiateOrder } from './utils/utils';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("static"));

dbConnect();


app.get("/ok", (req, res) => {
  res.send("Yes WORKING now");
});


app.get("/orders", (req, res) => {
    var orders = [
        {
            dynamite: ['cheese', 'onion']
        },
        {
            ranch: ['tomato, mozarella']
        }
    ]
    orders.forEach((obj, index)=>{
        initiateOrder(index + 1);
    })    
  });



let server = http.createServer(app);

server.listen(4000, () => {
  console.log("🚀 Server ready at", 4000);
});


export default app;

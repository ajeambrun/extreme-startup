import * as express from 'express';
import {Responder} from "./responder";

const app = express();
const responder = new Responder();

app.get('/', (request, response) => {
    console.log("A request has arrived!")
    let question  = request.query.q;
    response.send(responder.answer(question.toString()));
});

app.listen(5000);

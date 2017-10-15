import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';

const app = new Koa();
app.use(bodyParser());

app.use(async ctx => {
    ctx.body = ctx.request.body;
});

app.listen(8080);

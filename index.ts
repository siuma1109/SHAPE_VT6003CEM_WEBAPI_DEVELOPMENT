import Koa from "koa";
import Router, { RouterContext } from "koa-router";
import logger from "koa-logger";
import json from "koa-json";
import bodyParser from "koa-bodyparser";
import {sequelize} from "./helpers/database";
sequelize.sync();

import { router as AuthRoute } from "./routes/auth.route";
import { router as ArticleRouter } from "./routes/article.route";
import { router as UserRouter } from "./routes/user.route";
import serve from "koa-static";

const app: Koa = new Koa();

app.use(json());
app.use(logger());
app.use(bodyParser());

app.use(AuthRoute.routes()).use(AuthRoute.allowedMethods());
app.use(ArticleRouter.routes()).use(ArticleRouter.allowedMethods());
app.use(UserRouter.routes()).use(UserRouter.allowedMethods());

app.use(async (ctx: RouterContext, next: any) => {
    try {
        await next();
        if (ctx.status === 404) {
            ctx.status = 404;
            ctx.body = { err: "No such endpoint existed" };
        }
    } catch (err: any) {
        ctx.body = { err: err };
    }
})

app.listen(10888, () => {
    console.log("Koa Started");
})

app.use(serve('./docs'))
import Koa from "koa";
import json from "koa-json";
import passport from 'koa-passport';
import { router } from '../routes/article.route';
import request from 'supertest';
const app: Koa = new Koa();
app.use(json());
app.use(passport.initialize());
app.use(router.middleware());
app.listen(3000);

describe('Get / - a simple api endpoint', () => {
    test('Get all article', async () => {
        const result = await
            request(app.callback()).get('/api/v1/articles');
        expect(result.statusCode).toEqual(200);
    })
})

describe('Post / - a simple api endpoint', () => {
    test('Post an article', async () => {
        const result =
            await request(app.callback()).post('/api/v1/articles')
        //.header({ key: value });
        .send({
            title: "Title",
            alltext: "All text",
            authorid: 1
        });
        expect(result.statusCode).toEqual(201);
    })
})
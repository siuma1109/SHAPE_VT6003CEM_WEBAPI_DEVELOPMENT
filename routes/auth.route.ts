import Router, { RouterContext } from "koa-router";
import * as UserService from "../services/user.service";

const router = new Router({ prefix: '/api/v1/auth' });

router.get('/', UserService.basicAuth);
export { router };
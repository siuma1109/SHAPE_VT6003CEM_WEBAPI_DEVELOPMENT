import Router, { RouterContext } from "koa-router";
import * as UserService from "../services/user.service";

const router = new Router({ prefix: '/api/v1/users' });

router.del('/:id([0-9]{1,})', UserService.deleteByUser);
export { router };
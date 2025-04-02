import { User } from "../models/user.model";

import passport from "koa-passport";
import { RouterContext } from "koa-router";
import { BasicStrategy } from "passport-http";

const verifyPassword = (user: any, password: string) => {
    return user.password === password;
}

passport.use(new BasicStrategy(async (username, password, done) => {
    const user = await findByUsername(username);

    if (!user) {
        return done(null, false);
    }

    if (!verifyPassword(user, password)) {
        return done(null, false);
    }

    done(null, user);
}));

export const basicAuth = async (ctx: RouterContext, next: any) => {
    await passport.authenticate("basic", { session: false })(ctx, next);
    if (ctx.status == 401) {
        ctx.body = {
            message: 'you are not authorized'
        };
    } else {
        ctx.body = {
            message: 'you are passed'
        };
    }
}

export const deleteByUser = async (ctx: RouterContext, next: any) => {
    await passport.authenticate("basic", { session: false })(ctx, next);
    let id = +ctx.params.id;
    let loggedInUserData = ctx.state.user.dataValues;
    if (ctx.status == 401) {
        ctx.body = {
            message: 'you are not authorized'
        };
    } else if (id != loggedInUserData.id) {
        ctx.body = {
            message: 'you are not available to delete this user.'
        };
    }
    else {
        // do delete
        ctx.body = {
            message: 'you are passed'
        };
    }
}

//get a single user by the (unique) username
export const findByUsername = async (username: string) => {
    const user = await User.findOne({
        where: {
            username: username
        }
    })
    return user;
}
import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
} from '@sequelize/core';
import { Attribute, PrimaryKey, AutoIncrement, NotNull, Table, AllowNull } from '@sequelize/core/decorators-legacy';

@Table({
    tableName: "users",
})
export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    @Attribute(DataTypes.INTEGER)
    @PrimaryKey
    @AutoIncrement
    declare id: CreationOptional<number>;

    @Attribute(DataTypes.STRING)
    @AllowNull
    declare firstname: string;

    @Attribute(DataTypes.STRING)
    @AllowNull
    declare lastname: string;

    @Attribute(DataTypes.STRING)
    @NotNull
    declare username: string;

    @Attribute(DataTypes.STRING)
    @NotNull
    declare email: string;

    @Attribute(DataTypes.STRING)
    @AllowNull
    declare password: string;

    @Attribute(DataTypes.STRING)
    @AllowNull
    declare avatarurl: string;

    @Attribute(DataTypes.STRING)
    @AllowNull
    declare about: string;
}
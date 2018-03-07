module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define('Burger', {
        burger_name: DataTypes.TEXT,

        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, { timestamps: false });
    return Burger;
};

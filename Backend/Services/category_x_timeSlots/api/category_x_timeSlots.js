const dbconfig = require ("../../../Config/Database_Info");
const Category_has_ServiceProvider = require("../../category_has_serviceProvider/api/category_has_serviceProvider");
const TimeSlots = require("../../timeslots/api/timeslots");

const category_x_TimeSlots = dbconfig.sequelize.define('Category_x_TimeSlots', {
    occupied : {
        type: dbconfig.Sequelize.BOOLEAN,
        allowNull: false
    },
    experience : {
        type: dbconfig.Sequelize.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});

//Preciso repetir duas vezes (acho, estava assim na documentação pelo menos)
TimeSlots.belongsToMany(Category_has_ServiceProvider, { foreignKey:'idTimeslot', through: category_x_TimeSlots});
Category_has_ServiceProvider.belongsToMany(TimeSlots, { foreignKey:'idCategory', through: category_x_TimeSlots});

category_x_TimeSlots.sync()

module.exports = category_x_TimeSlots;
'use strict';
module.exports = (sequelize, DataTypes) => {

    const PostCategory = sequelize.define('PostCategory', {
        postId: DataTypes.INTEGER,
        categoryId: DataTypes.INTEGER,
    }, {timestamps: false});
    PostCategory.associate = function(models) {
        // associations can be defined here
    };
    return PostCategory;
};

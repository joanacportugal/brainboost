const config = require("../config");
const { Sequelize, DataTypes } = require("sequelize");
const Tables = require("./tables");

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
	host: config.HOST,
	dialect: config.dialect,
	pool: {
		max: config.pool.max,
		min: config.pool.min,
		acquire: config.pool.acquire,
		idle: config.pool.idle,
	},
});

// OPTIONAL: test the connection
(async () => {
	try {
		await sequelize.authenticate;
		console.log("Connection has been established successfully.");
	} catch (err) {
		console.error("Unable to connect to the database:", err);
	}
})();

const db = {};
db.sequelize = sequelize;
db.SecurityQuestions = Tables.SecurityQuestions(sequelize, DataTypes);
db.Users = Tables.Users(sequelize, DataTypes);
db.UserPermissions = Tables.UserPermissions(sequelize, DataTypes);
db.UserLogs = Tables.UserLogs(sequelize, DataTypes);
db.Languages = Tables.Languages(sequelize, DataTypes);
db.Categories = Tables.Categories(sequelize, DataTypes);
db.Topics = Tables.Topics(sequelize, DataTypes);
db.Courses = Tables.Courses(sequelize, DataTypes);
db.User_Courses = Tables.User_Courses(sequelize, DataTypes);
db.Lessons = Tables.Lessons(sequelize, DataTypes);
db.LessonFiles = Tables.LessonFiles(sequelize, DataTypes);
db.LessonAssignments = Tables.LessonAssignments(sequelize, DataTypes);
db.ExerciseTypes = Tables.ExerciseTypes(sequelize, DataTypes);
db.Exercises = Tables.Exercises(sequelize, DataTypes);
db.Users_Assignments = Tables.Users_Assignments(sequelize, DataTypes);
db.DiscussionBoards = Tables.DiscussionBoards(sequelize, DataTypes);
db.DiscussionBoardReplies = Tables.DiscussionBoardReplies(sequelize, DataTypes);
db.DocumentSubmissions = Tables.DocumentSubmissions(sequelize, DataTypes);
db.DocumentSubmissionFeedback = Tables.DocumentSubmissionFeedback(sequelize, DataTypes);
db.Notifications = Tables.Notifications(sequelize, DataTypes);

// 1:1 relationships
db.Users.hasOne(db.UserPermissions);
db.UserPermissions.belongsTo(db.Users);


// 1:N relationships
db.SecurityQuestions.hasMany(db.Users);
db.Users.belongsTo(db.SecurityQuestions);

db.Users.hasMany(db.Users, { foreignKey: { name: "ParentId", allowNull: true } });
db.Users.belongsTo(db.Users);

db.Users.hasMany(db.UserLogs);
db.UserLogs.belongsTo(db.Users);

db.Categories.hasMany(db.Topics);
db.Topics.belongsTo(db.Categories);

db.Users.hasMany(db.Courses);
db.Courses.belongsTo(db.Users);

db.Topics.hasMany(db.Courses);
db.Courses.belongsTo(db.Topics);

db.Languages.hasMany(db.Courses);
db.Courses.belongsTo(db.Languages);

db.Courses.hasMany(db.Lessons);
db.Lessons.belongsTo(db.Courses);

db.Lessons.hasMany(db.LessonFiles);
db.LessonFiles.belongsTo(db.Lessons);

db.Lessons.hasMany(db.LessonAssignments);
db.LessonAssignments.belongsTo(db.Lessons);

db.Lessons.hasMany(db.Exercises);
db.Exercises.belongsTo(db.Lessons);

db.ExerciseTypes.hasMany(db.Exercises);
db.Exercises.belongsTo(db.ExerciseTypes);

db.Users.hasMany(db.DiscussionBoards);
db.DiscussionBoards.belongsTo(db.Users);

db.Courses.hasMany(db.DiscussionBoards);
db.DiscussionBoards.belongsTo(db.Courses);

db.DiscussionBoards.hasMany(db.DiscussionBoardReplies);
db.DiscussionBoardReplies.belongsTo(db.DiscussionBoards);

db.Users.hasMany(db.DiscussionBoardReplies);
db.DiscussionBoardReplies.belongsTo(db.Users);

db.Users.hasMany(db.Notifications);
db.Notifications.belongsTo(db.Users);

// N:N relationships
db.Users.belongsToMany(db.Courses, { through: "User_Courses" });
db.Courses.belongsToMany(db.Users, { through: "User_Courses" });

db.Users.belongsToMany(db.Lessons, { through: "Users_Progress" });
db.Lessons.belongsToMany(db.Users, { through: "Users_Progress" });

db.Users.belongsToMany(db.LessonAssignments, { through: "Users_Assignments" });
db.LessonAssignments.belongsToMany(db.Users, { through: "Users_Assignments" });

db.Users.belongsToMany(db.Exercises, { through: "Users_Exercises" });
db.Exercises.belongsToMany(db.Users, { through: "Users_Exercises" });

db.Users.belongsToMany(db.Topics, { through: "DocumentSubmissions" });
db.Topics.belongsToMany(db.Users, { through: "DocumentSubmissions" });

db.Users.belongsToMany(db.DocumentSubmissions, { through: "DocumentSubmissionFeedback" });
db.DocumentSubmissions.belongsToMany(db.Users, { through: "DocumentSubmissionFeedback" });

(async () => {
	try {
		await db.sequelize.sync();
		console.log("DB is successfully synchronized");
	} catch (error) {
		console.log(error);
	}
})();

module.exports = db;

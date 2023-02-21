const SecurityQuestions = (sequelize, DataTypes) => {
	return sequelize.define("SecurityQuestions", {
		question: {
			type: DataTypes.STRING,
			allowNull: false,
			notEmpty: true,
			unique: {
				args: true,
				msg: "Question already exists!"
			},
			validate: {
				notNull: {
					msg: "Question cannot be null!"
				},
				notEmpty: {
					msg: "Question cannot be empty!"
				}
			}
		}
	}, {
		timestamps: false
	});
};

const Users = (sequelize, DataTypes) => {
	return sequelize.define("Users", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Name cannot be null!"
				},
				notEmpty: {
					msg: "Name cannot be empty!"
				}
			}
		},
		surname: {
			type: DataTypes.STRING,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Surname cannot be null!"
				},
				notEmpty: {
					msg: "Surname cannot be empty!"
				}
			}
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			notEmpty: true,
			unique: {
				args: true,
				msg: "Username already exists!"
			},
			validate: {
				notNull: {
					msg: "Username cannot be null!"
				},
				notEmpty: {
					msg: "Username cannot be empty!"
				}
			}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			notEmpty: true,
			unique: {
				args: true,
				msg: "Email already exists!"
			},
			validate: {
				notNull: {
					msg: "Email cannot be null!"
				},
				notEmpty: {
					msg: "Email cannot be empty!"
				},
				isEmail: {
					msg: "Should follow email format!"
				}
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Password cannot be null!"
				},
				notEmpty: {
					msg: "Password cannot be empty!"
				}
			}
		},
		avatar: {
			type: DataTypes.STRING,
			defaultValue: "https://1fid.com/wp-content/uploads/2022/06/no-profile-picture-6-1024x1024.jpg",
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Password cannot be null!"
				},
				notEmpty: {
					msg: "Password cannot be empty!"
				}
			}
		},
		last_login: {
			type: DataTypes.STRING,
			allowNull: false
		},
		user_type: {
			type: DataTypes.ENUM("Learner", "Instructor", "Parent", "Moderator", "Administrator"),
			allowNull: false,
			defaultValue: "Learner",
			validate: {
				notNull: {
					msg: "User type cannot be null!"
				},
				isIn: {
					args: [
						["regular", "mod", "admin"]
					],
					msg: "Invalid user type! Valid user types: Learner, Instructor, Parent, Moderator, Administrator."
				}
			}
		},
		blocked: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		security_answer: {
			type: DataTypes.STRING,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Password cannot be null!"
				},
				notEmpty: {
					msg: "Password cannot be empty!"
				}
			}
		}
	}, {
		timestamps: false
	});
};

const UserPermissions = (sequelize, DataTypes) => {
	return sequelize.define("UserPermissions", {
		SecurityQuestions_create: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		SecurityQuestions_read: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
		SecurityQuestions_update: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		SecurityQuestions_delete: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		Users_create: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		Users_read: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
		Users_update: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		Users_delete: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		UserPermissions_read: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		UserPermissions_update: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		UserLogs_read: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		Languages_create: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		Languages_read: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
		Languages_update: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		Languages_delete: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		Categories_create: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		Categories_read: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
		Categories_update: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		Categories_delete: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		Topics_create: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		Topics_read: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
		Topics_update: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		Topics_delete: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		Courses_create: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		Courses_read: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
		Courses_update: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		Courses_delete: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		CourseFeedback_create: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		CourseFeedback_read: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
		CourseFeedback_update: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		CourseFeedback_delete: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		Lessons_create: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		Lessons_read: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
		Lessons_update: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		Lessons_delete: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		ExerciseTypes_create: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		ExerciseTypes_read: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
		ExerciseTypes_update: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		ExerciseTypes_delete: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		Achievements_create: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		Achievements_read: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
		Achievements_update: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		Achievements_delete: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		ForumTopics_create: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		ForumTopics_read: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
		ForumTopics_update: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		ForumTopics_delete: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		ForumTopicReplies_create: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		ForumTopicReplies_read: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
		ForumTopicReplies_update: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		ForumTopicReplies_delete: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		DocumentSubmissionFeedback_create: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		DocumentSubmissionFeedback_read: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
		DocumentSubmissionFeedback_update: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		DocumentSubmissionFeedback_delete: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
	}, {
		timestamps: false
	});
};

const UserLogs = (sequelize, DataTypes) => {
	return sequelize.define("Logs", {
		action: {
			type: DataTypes.ENUM("CREATE", "UPDATE", "DELETE"),
			allowNull: false,
			notEmpty: true,
			validate: {
				isIn: {
					args: [
						["CREATE", "UPDATE", "DELETE"]
					],
					msg: "Invalid action: only CREATE, UPDATE and DELETE are valid!"
				},
				notNull: {
					msg: "Action cannot be null!"
				},
				notEmpty: {
					msg: "Action cannot be empty!"
				}
			}
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Description cannot be null!"
				},
				notEmpty: {
					msg: "Description cannot be empty!"
				}
			}
		}
	}, {
		timestamps: false
	});
};

const Languages = (sequelize, DataTypes) => {
	return sequelize.define("Languages", {
		language: {
			type: DataTypes.STRING,
			allowNull: false,
			notEmpty: true,
			unique: {
				args: true,
				msg: "Language already exists!"
			},
			validate: {
				notNull: {
					msg: "Language cannot be null!"
				},
				notEmpty: {
					msg: "Language cannot be empty!"
				}
			}
		}
	}, {
		timestamps: false
	});
};

const Categories = (sequelize, DataTypes) => {
	return sequelize.define("Categories", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			notEmpty: true,
			unique: {
				args: true,
				msg: "Category name already exists!"
			},
			validate: {
				notNull: {
					msg: "Category name cannot be null!"
				},
				notEmpty: {
					msg: "Category name cannot be empty!"
				}
			}
		}
	}, {
		timestamps: false
	});
};

const Topics = (sequelize, DataTypes) => {
	return sequelize.define("Topics", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			notEmpty: true,
			unique: {
				args: true,
				msg: "Topic name already exists!"
			},
			validate: {
				notNull: {
					msg: "Topic name cannot be null!"
				},
				notEmpty: {
					msg: "Topic name cannot be empty!"
				}
			}
		}
	}, {
		timestamps: false
	});
};

const Courses = (sequelize, DataTypes) => {
	return sequelize.define("Courses", {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Course title cannot be null!"
				},
				notEmpty: {
					msg: "Course title cannot be empty!"
				}
			}
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Course description cannot be null!"
				},
				notEmpty: {
					msg: "Course description cannot be empty!"
				}
			}
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Course content cannot be null!"
				},
				notEmpty: {
					msg: "Course content cannot be empty!"
				}
			}
		},
		level: {
			type: DataTypes.ENUM("Beginner", "Intermediate", "Advanced", "Expert"),
			allowNull: false,
			notEmpty: true,
			validate: {
				isIn: {
					args: [
						["Beginner", "Intermediate", "Advanced", "Expert"]
					],
					msg: "Invalid level: only Beginner, Intermediate, Advanced and Expert are valid!"
				},
				notNull: {
					msg: "Level cannot be null!"
				},
				notEmpty: {
					msg: "Level cannot be empty!"
				}
			}
		},
		completed: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
	}, {
		timestamps: false
	});
};

const User_Courses = (sequelize, DataTypes) => {
	return sequelize.define("User_Courses", {
		completed: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		rating: {
			type: DataTypes.INTEGER,
			notEmpty: true,
			validate: {
				min: {
					args: 1,
					msg: "Rating should be equal or more than 1!"
				},
				max: {
					args: 5,
					msg: "Rating should be equal or less than 5!"
				},
				notEmpty: {
					msg: "Rating cannot be empty!"
				}
			}
		},
		comment: {
			type: DataTypes.STRING,
			allowNull: true,
			notEmpty: true,
			validate: {
				notEmpty: {
					msg: "Comment cannot be empty!"
				}
			}
		}
	}, {
		timestamps: false
	});
};

const Lessons = (sequelize, DataTypes) => {
	return sequelize.define("Lessons", {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Lesson title cannot be null!"
				},
				notEmpty: {
					msg: "Lesson title cannot be empty!"
				}
			}
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Lesson description cannot be null!"
				},
				notEmpty: {
					msg: "Lesson description cannot be empty!"
				}
			}
		},
		video_url: {
			type: DataTypes.TEXT,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Video url cannot be null!"
				},
				notEmpty: {
					msg: "Video url cannot be empty!"
				},
				isUrl: {
					msg: "Video url should follow url format!"
				}
			}
		},
		duration: {
			type: DataTypes.INTEGER,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Video duration cannot be null!"
				},
				notEmpty: {
					msg: "Video duration cannot be empty!"
				},
				isInt: {
					msg: "Video duration should be an integer!"
				},
				min: {
					args: 1,
					msg: "Video duration should be a positive number and greater than 0 minutes!"
				}
			}
		},
		hasAdditionalFiles: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		hasAssignments: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		hasExercises: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	}, {
		timestamps: false
	});
};

const LessonFiles = (sequelize, DataTypes) => {
	return sequelize.define("LessonFiles", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "File name cannot be null!"
				},
				notEmpty: {
					msg: "File name cannot be empty!"
				}
			}
		},
		file_url: {
			type: DataTypes.TEXT,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "File url cannot be null!"
				},
				notEmpty: {
					msg: "File url cannot be empty!"
				},
				isUrl: {
					msg: "File url should follow url format!"
				}
			}
		},
	}, {
		timestamps: false
	});
};

const LessonAssignments = (sequelize, DataTypes) => {
	return sequelize.define("LessonAssignments", {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Title cannot be null!"
				},
				notEmpty: {
					msg: "Title cannot be empty!"
				}
			}
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Description cannot be null!"
				},
				notEmpty: {
					msg: "Description cannot be empty!"
				}
			}
		},
	}, {
		timestamps: false
	});
};

const ExerciseTypes = (sequelize, DataTypes) => {
	return sequelize.define("ExerciseTypes", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			notEmpty: true,
			unique: {
				args: true,
				msg: "Exercise type already exists!"
			},
			validate: {
				notNull: {
					msg: "Exercise type cannot be null!"
				},
				notEmpty: {
					msg: "Exercise type cannot be empty!"
				}
			}
		}
	}, {
		timestamps: false
	});
};

const Exercises = (sequelize, DataTypes) => {
	return sequelize.define("Exercises", {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Title cannot be null!"
				},
				notEmpty: {
					msg: "Title cannot be empty!"
				}
			}
		},
		question: {
			type: DataTypes.STRING,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Question cannot be null!"
				},
				notEmpty: {
					msg: "Question cannot be empty!"
				}
			}
		},
		options: {
			type: DataTypes.STRING,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Options cannot be null!"
				},
				notEmpty: {
					msg: "Options cannot be empty!"
				}
			}
		},
		answer: {
			type: DataTypes.STRING,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Answer cannot be null!"
				},
				notEmpty: {
					msg: "Answer cannot be empty!"
				}
			}
		}
	}, {
		timestamps: false
	});
};

const Users_Assignments = (sequelize, DataTypes) => {
	return sequelize.define("Users_Assignments", {
		file_url: {
			type: DataTypes.TEXT,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "File url cannot be null!"
				},
				notEmpty: {
					msg: "File url cannot be empty!"
				},
				isUrl: {
					msg: "File url should follow url format!"
				}
			}
		}
	}, {
		timestamps: false
	});
};

const Users_Exercises = (sequelize, DataTypes) => {
	return sequelize.define("Users_Exercises", {
		answer: {
			type: DataTypes.STRING,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Answer cannot be null!"
				},
				notEmpty: {
					msg: "Answer cannot be empty!"
				}
			}
		}
	}, {
		timestamps: false
	});
};

const DiscussionBoards = (sequelize, DataTypes) => {
	return sequelize.define("DiscussionBoards", {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Title cannot be null!"
				},
				notEmpty: {
					msg: "Title cannot be empty!"
				}
			}
		},
		question: {
			type: DataTypes.TEXT,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Question cannot be null!"
				},
				notEmpty: {
					msg: "Question cannot be empty!"
				}
			}
		}
	}, {
		timestamps: false
	});
};

const DiscussionBoardReplies = (sequelize, DataTypes) => {
	return sequelize.define("DiscussionBoardReplies", {
		text: {
			type: DataTypes.TEXT,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Text cannot be null!"
				},
				notEmpty: {
					msg: "Text cannot be empty!"
				}
			}
		}
	}, {
		timestamps: false
	});
};

const DocumentSubmissions = (sequelize, DataTypes) => {
	return sequelize.define("DocumentSubmissions", {
		document_url: {
			type: DataTypes.TEXT,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Document url cannot be null!"
				},
				notEmpty: {
					msg: "Document url cannot be empty!"
				},
				isUrl: {
					msg: "Document url should follow url format!"
				}
			}
		}
	}, {
		timestamps: false
	});
};

const DocumentSubmissionFeedback = (sequelize, DataTypes) => {
	return sequelize.define("DocumentSubmissionFeedback", {
		rating: {
			type: DataTypes.INTEGER,
			notEmpty: true,
			validate: {
				min: {
					args: 1,
					msg: "Rating should be equal or more than 1!"
				},
				max: {
					args: 5,
					msg: "Rating should be equal or less than 5!"
				},
				notEmpty: {
					msg: "Rating cannot be empty!"
				}
			}
		},
		comment: {
			type: DataTypes.STRING,
			allowNull: true,
			notEmpty: true,
			validate: {
				notEmpty: {
					msg: "Comment cannot be empty!"
				}
			}
		}
	}, {
		timestamps: false
	});
};

const Notifications = (sequelize, DataTypes) => {
	return sequelize.define("Notifications", {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Title cannot be null!"
				},
				notEmpty: {
					msg: "Title cannot be empty!"
				}
			}
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
			notEmpty: true,
			validate: {
				notNull: {
					msg: "Description cannot be null!"
				},
				notEmpty: {
					msg: "Description cannot be empty!"
				}
			}
		}
	}, {
		timestamps: false
	});
};

module.exports = {
	SecurityQuestions,
	Users,
	UserPermissions,
	UserLogs,
	Languages,
	Categories,
	Topics,
	Courses,
	User_Courses,
	Lessons,
	LessonFiles,
	LessonAssignments,
	ExerciseTypes,
	Exercises,
	Users_Assignments,
	Users_Exercises,
	DiscussionBoards,
	DiscussionBoardReplies,
	DocumentSubmissions,
	DocumentSubmissionFeedback,
	Notifications
};
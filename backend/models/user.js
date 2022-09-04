const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const userSchema = mongoose.Schema(
	{
		first_name: {
			type: String,
			required: [true, 'First Name is Required'],
			trim: true,
			text: true,
		},
		last_name: {
			type: String,
			required: [true, 'Last Name is Required'],
			trim: true,
			text: true,
		},
		username: {
			type: String,
			required: [true, 'Username is Required'],
			trim: true,
			text: true,
			unique: true,
		},
		email: {
			type: String,
			required: [true, 'Email is Required'],
			trim: true,
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Password is Required'],
		},
		picture: {
			type: String,
			default: 'http://google.com',
		},
		cover: {
			type: String,
			default: 'http://google.com',
		},
		gender: {
			type: String,
			enum: ['Male', 'Female', 'Prefer not to Answer'],
		},
		birthdate: {
			type: Date,
			required: [true, 'Birthdate is Required'],
		},
		verified: {
			type: Boolean,
			default: false,
		},
		social: [
			{
				facebook: {
					type: String,
				},
				instagram: {
					type: String,
				},
				youtube: {
					type: String,
				},
				tiktok: {
					type: String,
				},
				truthSocial: {
					type: String,
				},
				rumble: {
					type: String,
				},
			},
		],
		groups: {
			type: Array,
			default: [],
		},
		friends: {
			type: Array,
			default: [],
		},
		following: {
			type: Array,
			default: [],
		},
		followers: {
			type: Array,
			default: [],
		},
		requests: {
			type: Array,
			default: [],
		},
		search: [
			{
				user: {
					type: ObjectId,
					ref: 'User',
				},
			},
		],
		details: {
			bio: {
				type: String,
			},
			hobbies: {
				type: Array,
				default: [],
			},
			phone: {
				type: String,
			},
			otherName: {
				type: String,
			},
			job: {
				type: String,
			},
			workplace: {
				type: String,
			},
			highSchool: {
				type: String,
			},
			college: {
				type: String,
			},
			currentCity: {
				type: String,
			},
			hometown: {
				type: String,
			},
			relationship: {
				type: String,
				enum: ['Single', 'In a relationship', 'Married', 'Divorced'],
			},
		},
		savedPosts: [
			{
				post: {
					type: ObjectId,
					ref: 'Post',
				},
				savedAt: {
					type: Date,
					default: new Date(),
				},
			},
		],
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', userSchema);

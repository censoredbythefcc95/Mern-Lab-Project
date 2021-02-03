const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const penSchema = new Schema(
	{
		name: String,
		brand: String,
		manufacturer: String,
		nibsize: { type: Number, default: 0 },
		steel: { type: Boolean, default: false },
	},
	{ timestamps: true }
);
'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    location: {
        type: String,
        trim:true
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }

});

mongoose.model('Article', ArticleSchema);
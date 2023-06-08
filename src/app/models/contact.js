import { Schema, model, models } from 'mongoose';

const ContactSchema = new Schema({
    name: String,
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    message: {
        type: String,
        required: false,
    },
});

const Contact = models.Contact || model('Contact', ContactSchema);

export default Contact;

/*
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamp: true,
    })

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema)

export default  Contact;*/
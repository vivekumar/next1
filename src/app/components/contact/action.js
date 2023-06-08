
import db from "../../utils/connectMongo"
import ContactModel from "../../models/contact"
export const saveContact = async (formData) => {
    'use server';
    try {
        console.log('CONNECTING TO MONGO');
        await db();
        console.log('CONNECTED TO MONGO');
        const contactdata = await ContactModel.create(formData);
        console.log('CREATED DOCUMENT');
        // res.json({ contactdata });
        return { status: "success", message: "Data save successfully" };
    } catch (e) {
        return { status: "failed", message: e };
    }


}

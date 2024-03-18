
const Contact= require('../models/contactModel');

const asyncHandler= require("express-async-handler");

const getContact= asyncHandler(async (req,res)=>{
    const contacts=  await Contact.find();
    res.status(200).json(contacts);
});

const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404)
    throw new Error("Contact not found");  // Exit the function to avoid further execution
  }

  res.status(200).json(contact);
});



// const Contact = require('../models/Contact'); // Assuming you have a Contact model defined

const createContact = asyncHandler(async (req, res) => {
  console.log('The request body is', req.body);
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error('All fields are mandatory');
  }


  try {
    // Assuming you have a Contact model defined with a schema
    const newContact = new Contact({
      name,
      email,
      phone,
    });

    // Save the new contact to the database
    const savedContact = await newContact.save();

    res.status(201).json({
      message: 'Contact created successfully',
      result: savedContact,
    });
  } catch (error) {
    console.error('Error saving contact to database:', error);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
});

module.exports = createContact;


const updateContact = asyncHandler(async (req, res) => {
  try {
    const contactId = req.params.id.trim();

    // Validate that contactId is a valid ObjectId
    // if (!mongoose.Types.ObjectId.isValid(contactId)) {
    //   res.status(400);
    //   throw new Error('Invalid ObjectId format');
    // }

    // Check if the contact exists before attempting to update
    const contact = await Contact.findById(contactId);

    if (!contact) {
      res.status(404);
      throw new Error('Contact not found');
    }

    // Update contact fields
    const { name, email, phone } = req.body; // Assuming you're sending these fields in the request body

    contact.name = name || contact.name;
    contact.email = email || contact.email;
    contact.phone = phone || contact.phone;

    // Save the updated contact
    await contact.save();

    res.status(200).json({ message: 'Contact updated successfully', updatedContact: contact });
  } catch (error) {
    // Handle the error
    res.status(res.statusCode || 500).json({ message: error.message || 'Internal Server Error' });
  }
});



const deleteContact = asyncHandler(async (req, res) => {
  try {
    // const contactId = req.params.id;

    // Check if the contact exists before attempting to delete
    const contactId = req.params.id.trim();
const contact = await Contact.findById(contactId);



    console.log("contact", contact);

    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }

    // Perform the deletion
     await Contact.deleteOne({ _id: contactId });

    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});




module.exports={getContact,createContact,updateContact,deleteContact,getContactById};
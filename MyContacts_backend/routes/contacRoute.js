const express= require("express");
const router =express.Router();
const {getContact,createContact,updateContact,deleteContact, getContactById} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");


router.use(validateToken);
router.route("/").get(getContact).post(createContact);
router.route("/:id").get(getContactById).put(updateContact).delete(deleteContact);

// router.route("/").post(createContact);

// router.route("/:id").get((req,res)=>{
//       res.status(200).json({message:`get contact for ${req.params.id}`});
// });



// router.route("/:id").delete(deleteContact);







module.exports= router;

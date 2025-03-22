import Note from "../models/NotesModel.js";

// GET
async function getNotes(req, res) {
  try {
    const response = await Note.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

// CREATE
async function createNotes(req, res) {
  try {
    const inputResult = req.body;
    await Note.create(inputResult);
    res.status(201).json({ msg: "Notes Created" });
  } catch (error) {
    console.log(error.message);
  }
}

export { getNotes, createNotes };

export const updateNotes = async (req, res) => {
  try {
    const inputUser = req.body;

    await Note.update(inputUser, {
      where : {
        id : req.params.id
      }
    });
    res.status(200).json({msg:"User Updated"});
  } catch (error) {
    console.log(error.message);
  }
}

export const deleteNotes = async(req,res) => {
  try {
    Note.destroy({
      where:{
        id:req.params.id
      }
    });
    res.status(204).json({msg:"User has been deleted"});
  } catch (error) {
    console.log(error.message);
  }
}

export const getNotesById = async (req, res) => {
  try {
    const response = await Note.findOne({
      where : {
        id : req.params.id
      }
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

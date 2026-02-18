const Supplies = require("../models/supplies");
const { validationResult } = require("express-validator");

const getAllSuppliesToBreadsAndCakes = async (request, response) => {
  // #swagger.tags = ['Supplies']
  // #swagger.summary = 'Get all supplies'
  try {
    const result = await Supplies.find();
    // #swagger.responses[200] = { description: 'Successfully made it friend.' }
    response.status(200).json(result);
  } catch (err) {
    response.status(500).json({
      message:
        "Check out! Something went wrong in the supply room: " + err.message,
    });
  }
};

const createSupplyToBreadsAndCakes = async (request, response) => {
  // #swagger.tags = ['Supplies']
  // #swagger.summary = 'Create new item'

  // Validation Check for the 100 points
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({
      message: "Wait! Validation failed for your new supply.",
      errors: errors.array(),
    });
  }

  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Add new item',
        required: true,
        schema: { $ref: '#/definitions/Supply' }
  } */
  try {
    const newSupply = new Supplies(request.body);
    const savedSupply = await newSupply.save();
    // #swagger.responses[201] = { description: 'Success operation' }
    response.status(201).json(savedSupply);
  } catch (err) {
    response.status(400).json({
      message: "Mayday! I couldn't create the supply: " + err.message,
    });
  }
};

const updateSupplyToBreadsAndCakes = async (request, response) => {
  // #swagger.tags = ['Supplies']
  // #swagger.summary = 'Update item'

  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({
      message: "Check your data! Validation failed for the supply update.",
      errors: errors.array(),
    });
  }

  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Update existing item',
        required: true,
        schema: { $ref: '#/definitions/Supply' }
  } */
  try {
    const id = request.params.id.trim();
    const result = await Supplies.findByIdAndUpdate(id, request.body, {
      new: true,
      runValidators: true,
    });
    if (!result)
      return response
        .status(404)
        .json({ message: "Oops! Supply is not found." });

    response.status(200).json(result);
  } catch (err) {
    response.status(400).json({
      message: "Error updating the supply partner: " + err.message,
    });
  }
};

const deleteSupplyForever = async (request, response) => {
  // #swagger.tags = ['Supplies']
  // #swagger.summary = 'Delete supply'
  try {
    const id = request.params.id.trim();
    const result = await Supplies.findByIdAndDelete(id);
    if (!result)
      return response
        .status(404)
        .json({ message: "Wait a minute. Supply is not found." });

    response
      .status(200)
      .json({ message: "Supply deleted forever from DulezzuaBakery." });
  } catch (err) {
    response.status(500).json({
      message: "I find an error trying to delete this: " + err.message,
    });
  }
};

module.exports = {
  getAllSuppliesToBreadsAndCakes,
  createSupplyToBreadsAndCakes,
  updateSupplyToBreadsAndCakes,
  deleteSupplyForever,
};

const Supplies = require("../models/supplies");

const getAllSuppliesToBreadsAndCakes = async (request, response) => {
  try {
    const result = await Supplies.find();
    // #swagger.responses[200] = { description: 'Successfully made it friend.' }
    response.status(200).json(result);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const createSupplyToBreadsAndCakes = async (request, response) => {
  // #swagger.tags = ['Supplies']
  // #swagger.summary = 'Create new item'
  /* #swagger.parameters['body'] = {
    in: 'body',
    description: 'Add new item',
    schema: { $ref: '#/definitions/Supplies' }
} */
  try {
    const newSupply = new Supplies(request.body);
    const savedSupply = await newSupply.save();
    // #swagger.responses[201] = { description: 'Success operation' }
    response.status(201).json(savedSupply);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

const updateSupplyToBreadsAndCakes = async (request, response) => {
  // #swagger.tags = ['Supplies']
  // #swagger.summary = 'Update item'
  /* #swagger.parameters['body'] = {
    in: 'body',
    description: 'Update existing item',
    schema: { $ref: '#/definitions/Supplies' }
} */
  try {
    const id = request.params.id;
    const result = await Supplies.findByIdAndUpdate(id, request.body, {
      new: true,
    });
    if (!result)
      return response
        .status(404)
        .json({ message: "Oops! Supply is not found." });
    // #swagger.responses[204] = { description: 'You did it with mastery operation.' }
    response.status(204).send();
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

const deleteSupplyForever = async (request, response) => {
  try {
    const result = await Supplies.findByIdAndDelete(request.params.id);
    if (!result)
      return response
        .status(404)
        .json({ message: "Wait a minute. Supply is not found." });
    // #swagger.responses[204] = { description: 'Success operation' }
    response.status(204).send();
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllSuppliesToBreadsAndCakes,
  createSupplyToBreadsAndCakes,
  updateSupplyToBreadsAndCakes,
  deleteSupplyForever,
};

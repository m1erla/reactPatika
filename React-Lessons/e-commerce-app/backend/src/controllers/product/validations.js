import Joi from "joi";

const ProductSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().min(10),
    price: Joi.number().required(),
    photos: Joi.string(),
});

export default ProductSchema;
import Joi from "joi";


const OrderSchema = Object({
    fullname: Joi.string().required(),
    address: Joi.string().required(),
    items: Joi.array().items(Joi.string()).required(),
});

export default OrderSchema
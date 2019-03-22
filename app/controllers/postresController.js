const PostresServices = require('../services/PostresServices');
const postres = require('../products_co.json')
const PostresController = module.exports;

PostresController.getPostres = async ({ body }, res) => {
    const { ids } = body;
    const { status, data } = await PostresServices.getPostres(ids);
    return res.status(status).send(data);
};


PostresController.setPostres = async ( req,res) => {
    const { status, data } = await PostresServices.setPostres(postres);
    return res.status(status).send(data);
};



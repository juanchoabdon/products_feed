const PostresRepository = require('../repositories/PostresRepository');
const { Logger } = require('../utils/logger');

const PostresService = module.exports;

PostresService.getPostres = async (ids) => {
  try {
    const data = await PostresRepository.getNotRepeatedPostres(ids);

    return {
      status: 200,
      data
    };
  } catch (err) {
    Logger.info('PostresService.getPostres | error:', err.message);
    console.log(err);

    return {
      status: 500,
      err
    };
  }
};


PostresService.setPostres = async (postres) => {
  try {
    const data = await PostresRepository.setPostres(postres);

    return {
      status: 200,
      data
    };
  } catch (err) {
    Logger.info('PostresService.getPostres | error:', err.message);
    console.log(err);

    return {
      status: 500,
      err
    };
  }
};

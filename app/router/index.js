const router = require('express').Router();

const HealthCheckController = require('../controllers/healthcheckController');
const PostresController = require('../controllers/postresController');

router.get('/health-check', HealthCheckController.check);
router.post('/postres', PostresController.getPostres);

router.get('/desserts', PostresController.setPostres);

module.exports = router;

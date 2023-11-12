const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());


const reactionController = require('../Controllers/reactionController');
const middleware = require("../Middleware/authorization")

router.post('/reaction/addrate/:id',middleware.authorize,reactionController.addrate);
router.post('/reaction/addcomment/:id',middleware.authorize,reactionController.addcomment);
router.get('/reaction/getcomment/:id',middleware.authorize,reactionController.getcomments);
router.put('/reaction/updatecomment/:id',middleware.authorize,reactionController.updatecomment);
router.get('/reaction/deletecomment/:id',middleware.authorize, reactionController.deletecomment);






module.exports = router;
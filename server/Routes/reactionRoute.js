const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());


const reactionController = require('../Controllers/reactionController');

router.post('/reaction/addrate/:id',reactionController.addrate);
router.post('/reaction/addcomment/:id',reactionController.addcomment);
router.get('/reaction/getcomment/:id',reactionController.getcomments);
router.put('/reaction/updatecomment/:id', reactionController.updatecomment);
router.delete('/reaction/deletecomment/:id', reactionController.deletecomment);






module.exports = router;
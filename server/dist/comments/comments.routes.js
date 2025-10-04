import express from 'express';
import { getComments, createComment, likeComment, replyComment } from '../comments/comments.controllers.js';
const router = express.Router();
router.get('/', getComments);
router.post('/', createComment);
router.post('/:id/like', likeComment);
router.post("/:id/reply", replyComment);
export default router;

import express from 'express';
import {
  getChatConversations,
  getChatMessages,
  sendChatMessage,
} from '../../controllers/dashboard/chatController.js';

const router = express.Router();

router.get('/conversations', getChatConversations);
router.get('/conversations/:id/messages', getChatMessages);
router.post('/messages', sendChatMessage);

export default router;

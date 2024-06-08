const TelegramBot = require('node-telegram-bot-api');

// Replace YOUR_TELEGRAM_BOT_TOKEN with your bot token from BotFather
const token = '7125525532:AAEjfdygzwWT1GvXS5OKaYFC9PmtLDbJIOs';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for any kind of message
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // Send a message back to the chat
  bot.sendMessage(chatId, `Hello, ${msg.from.first_name}! You said: "${msg.text}"`);
});
app.get("/", (req, res) => res.send("Express on Vercel"));

// Additional command handler for /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Welcome, ${msg.from.first_name}! How can I assist you today?`);
});

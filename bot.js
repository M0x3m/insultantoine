const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.DirectMessages,
    ],
  });
const randomMessages = [
  'Salope',
  'pute',
  'gourgandine',
  'octopute',
  'enculer',
  'gros enculer',
  'fdp',
  'gros fdp',
  'sale fdp',
  'gros con',
  'ta gueule stp',
  'connard',
  'enculer de tes morts',
  'bougnoule',
  'petit con',
  'branquignole',
  'branle bite',
  'gros suceur de queue',
  // Add more messages here
];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

const targetUserId1 = '495277469775953923'; // Replace with the ID of the specific user.
const targetUserId2 = '661720726872653835';
const targetUserId3 = '203240565377073152';
const targetUserId4 = '447319017607266304';

if (message.author.id === targetUserId1 || message.author.id === targetUserId2 || message.author.id === targetUserId3 || message.author.id === targetUserId4) {
    const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];
    await message.reply(randomMessage);
}
});

client.login(process.env.TOKEN);
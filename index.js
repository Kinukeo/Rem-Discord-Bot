const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const app = require('./app.json');

class Rem {

  insults = ["Your clothes are unkempt.",
            "Nice hair, loser.",
            "I've seen blades of grass stronger than you!"];

  neutrals = ["You're ok.... I guess.",
              "Just don't do anything weird...",
              "At least you don't stink today..."]

  insult() {
    let number = Math.floor(Math.random() * this.insults.length);
    return this.insults[number];
  }

  neutral() {
    let number = Math.floor(Math.random() * this.neutrals.length);
    return this.neutrals[number];
  }
}

const rem = new Rem();

// On client successful login
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.author.bot) {
    return;
  }

  if (message.author.id === '243066220864077824') {
    message.channel.send(rem.insult());
  }
  else if (message.member.nickname !== null && message.member.nickname.includes('subaru')) {
    message.channel.send('Ohayo Subaru-kun');
  }
  else {
    message.channel.send(rem.neutral());
  }
});

client.login(app.botToken);


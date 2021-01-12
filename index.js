const DBL = require('@top-gg/sdk');
function BetterTop(token, client){
  this.token = token;
  this.client = client;
  this.dbl = null;
  this.setup();
}
BetterTop.prototype = {
  setup: function(){
    this.dbl = new DBL(this.token, this.client);
  },
  post: function(){
    this.dbl.postStats(this.client.guilds.cache.size);
  },
  auto_post: function(timeMS){
    if(timeMS <= 1000)timeMS = (1000*60*60);
    setInterval(() => {
      this.post();
    }, timeMS);
  },
  get_stats: async function(id){
    if(!id)return null;
    const stats = await this.dbl.getStats(id);
    if(!stats)return null;
    return stats;
  },
  get_bot: async function(id){
    if(!id)return null;
    const bot = await this.dbl.getBot(id);
    if(!bot)return null;
    return bot;
  },
  get_user: async function(id){
    if(!id)return null;
    const user = await this.dbl.getUser(id);
    if(!user)return null;
    return user;
  },
  get_votes: async function(){
    const votes = await this.dbl.getVotes();
    if(!votes)return null;
    return votes;
  },
  has_voted: async function(id){
    if(!id)return null;
    const hasVoted = await this.dbl.hasVoted(id);
    return hasVoted;
  },
  is_weekend: async function(){
    const isWeekend = await this.dbl.isWeekend();
    return isWeekend;
  }
}
module.exports = BetterTop;
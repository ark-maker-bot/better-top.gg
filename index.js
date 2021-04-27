const DBL = require('@top-gg/sdk');
function BetterTop(token, client){
  this.token = token;
  this.client = client;
  this.dbl = null;
  this.setup();
}
BetterTop.prototype = {
  setup: function(){
    this.dbl = new DBL.Api(this.token);
  },
  post: function(){
    if(!this.dbl)return;
    this.dbl.postStats();
  },
  auto_post: function(timeMS){
    if(!this.dbl)return;
    if(timeMS <= 1000)timeMS = (1000*60*60);
    timeMS /= 12;
    this.post();
    setInterval(() => {
      this.post();
    }, timeMS);
  },
  get_stats: async function(id){
    if(!id || !this.dbl)return null;
    const stats = await this.dbl.getStats(id);
    if(!stats)return null;
    return stats;
  },
  get_bot: async function(id){
    if(!id || !this.dbl)return null;
    const bot = await this.dbl.getBot(id);
    if(!bot)return null;
    return bot;
  },
  get_user: async function(id){
    if(!id || !this.dbl)return null;
    const user = await this.dbl.getUser(id);
    if(!user)return null;
    return user;
  },
  get_votes: async function(){
    if(!this.dbl)return;
    const votes = await this.dbl.getVotes();
    if(!votes)return null;
    return votes;
  },
  has_voted: async function(id){
    if(!id || !this.dbl)return null;
    const hasVoted = await this.dbl.hasVoted(id);
    return hasVoted;
  },
  is_weekend: async function(){
    if(!this.dbl)return;
    const isWeekend = await this.dbl.isWeekend();
    return isWeekend;
  }
}
module.exports = BetterTop;

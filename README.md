# Better-top.gg
This is an API that creates shortcuts for the top.gg API. This package is third-party and it is unofficial.
If Top.gg have an issue with this package, they can DM me to take it down.
This is completely open source so, if anyone wants to add anything you can.

## Sample Code
```js
const Discord = require('discord.js'), client = new Discord.Client();
const BDL = require('better-top.gg'), top = new BDL('TOP.GG Token', client); // client is the discord client
```

Sorry for the incorrect code. I have fixed the issue.

When using this please run setup before you use the other functions.

## List of functions
```
setup()
is_weekend(),
has_voted(id),
get_votes()
get_user(id),
get_bot(id),
get_stats(id),
auto_post(timeMS),
post()
```
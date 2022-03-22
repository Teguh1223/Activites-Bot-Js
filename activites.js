setInterval(() => {
        client.user.setActivity(`Let's Go Invite Me | watching ${client.guilds.cache.size.toLocaleString()} servers`, { type: "WATCHING"});
    }, 1000) 

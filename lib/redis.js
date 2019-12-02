const redis = require("redis");
const client = redis.createClient(process.env.REDISPORT, process.env.REDISIP);
client.auth(process.env.REDISPASS);

client.setToken = (username, token) => client.set(token, username);

client.checkToken = (username, token) => {
  let state = false;
  client.get(token, (err, reply) => {
    console.log('lib - redis',username === reply);
    state = username === reply;
  })

  return state;
};

export default client;

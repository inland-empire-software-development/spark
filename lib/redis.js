const redis = require("redis");
const client = redis.createClient(process.env.REDISPORT, process.env.REDISIP);
client.auth(process.env.REDISPASS);

client.setToken = (username, token) => client.set(token, username);
client.checkToken = (username, token) => client.get(token, (err, reply) => username === reply);

export default client;

const redis = require("redis");
const bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const client = redis.createClient(process.env.REDISPORT, process.env.REDISIP);
client.auth(process.env.REDISPASS);

client.setToken = (username, token) => client.set(token, username);

client.checkToken = (username, token) => {
  return client.getAsync(String(token)).then(function(user) {
    return user === null ? false : username === res;
  });
};

export default client;

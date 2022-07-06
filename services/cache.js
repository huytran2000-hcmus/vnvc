const { reject } = require("lodash");
const mongoose = require("mongoose");
const { resolve } = require("path");
const redis = require("redis");
const util = require("util");

const client = redis.createClient(6379);
client.on("error", (err) => console.log("Redis Client Error", err));
// const client = redis.createClient({
//   url: "redis://localhost:49163",
// });
client.on("connect", () => {
  console.log("Redis connection successfull");
});
client.hget = util.promisify(client.hget);
const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function (options = { time: 60 }) {
  this.useCache = true;
  this.time = options.time;
  this.hashKey = JSON.stringify(options.key || this.mongooseCollection.name);

  return this;
};

mongoose.Query.prototype.exec = async function () {
  if (!this.useCache) {
    return await exec.apply(this, arguments);
  }

  const key = JSON.stringify({
    ...this.getQuery(),
  });

  const cacheValue = await client.hget(this.hashKey, key);

  if (cacheValue) {
    const doc = JSON.parse(cacheValue);
    console.log("Response from Redis");
    return Array.isArray(doc)
      ? doc.map((d) => new this.model(d))
      : new this.model(doc);
  }

  const result = await exec.apply(this, arguments);
  console.log(this.time);
  client.hset(this.hashKey, key, JSON.stringify(result));
  client.expire(this.hashKey, this.time);

  console.log("Response from MongoDB");
  return result;
};
const setRedis = async (key, value, time) => {
  client.set(key, value, "EX", time);
};
const delRedis = async (key) => {
  client.del(key);
};
const isKeyExist = async (key) => {
  return new Promise((resolve, reject) => {
    client.get(key, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};
module.exports = {
  clearKey(hashKey) {
    client.del(JSON.stringify(hashKey));
  },
  setRedis,
  delRedis,
  isKeyExist,
};

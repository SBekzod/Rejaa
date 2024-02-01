const cluster = require("cluster");
const instanceCPUs = require("os").cpus();

if (cluster.isMaster) {
  console.log(`MASTER thread process id: ${process.pid}`);
  instanceCPUs.map((ele) => {
    cluster.fork();
  });
} else {
  console.log(`WORKER thread process id: ${process.pid}`);
}

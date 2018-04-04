module.exports = {
  log: log,
  logMsg: logMsg
}

function log(tag, msg) {
  console.log('tag----' + tag + ' | ' + msg)
}

function logMsg(msg) {
  console.log(msg)
}
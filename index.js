var colors = require("colors");

module.exports = function requireEnv() {
  console.log("Checking ENV");
  var goodEnv = true;
  [].slice.call(arguments).forEach(function(variable){
    var good = !!process.env[variable];
    console.log(("checking process.env['"+variable+"']... ").green + good.toString()[{true: "green", false: 'red'}[good]]);
    if(good) return;
    goodEnv = false;
  });
  if(!goodEnv) throw "Provide missing environment variables to proceed!".red;
}
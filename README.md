# require-env

Require the current process defines some environment variables.

## OR EXPLODE!

```js
var reqireEnv =  require("process-exploder");

requireEnv("PORT", "HOSTNAME", "DO_YOU_REMEMBER");
```

This might EXPLODE!

```
node test.js
Checking ENV
checking process.env['PORT']... false
checking process.env['HOSTNAME']... false
checking process.env['DO_YOU_REMEMBER']... false

/Users/collin/Code/require-env/index.js:12
  if(!goodEnv) throw "Provide missing environment variables to proceed!".red;
                                                                        ^
Provide missing environment variables to proceed!
```

IT EXPLODED!

## BSD-2-Clause License

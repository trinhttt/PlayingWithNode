const os = require("os")

console.log(os.freemem())
console.log(os.totalmem())
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)

console.log(os.version())
console.log(os.type())
console.log(os.cpus())

/*
OUTPUT:
24485888
8589934592
Total Memory: 8589934592
Free Memory: 26820608
Darwin Kernel Version 20.4.0: Fri Mar  5 01:14:14 PST 2021; root:xnu-7195.101.1~3/RELEASE_X86_64
Darwin
[
  {
    model: 'Intel(R) Core(TM) i5-5287U CPU @ 2.90GHz',
    speed: 2900,
    times: { user: 21035100, nice: 0, sys: 13048160, idle: 100170140, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-5287U CPU @ 2.90GHz',
    speed: 2900,
    times: { user: 8026440, nice: 0, sys: 4303740, idle: 121907320, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-5287U CPU @ 2.90GHz',
    speed: 2900,
    times: { user: 20576150, nice: 0, sys: 10295530, idle: 103365850, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-5287U CPU @ 2.90GHz',
    speed: 2900,
    times: { user: 7706530, nice: 0, sys: 4104220, idle: 122426720, irq: 0 }
  }
]
*/

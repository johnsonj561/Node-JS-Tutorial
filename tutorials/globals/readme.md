-----------------------------------------------------------------------------
## Node JS - Global Objects
- Node.js global objects are global in nature and are available in all modules
- they can be used directly, no modules need to be included in project

-----------------------------------------------------------------------------

### __filename
- represents filename of code being executed
- resolved absolute path of code file

### __dirname
- represents the name of directory that currently executing scrips resides in

### setTimeout(cb, ms)
- global function used to run a callback cb after at least ms milliseconds has passed
- timer max is 24.8 days
- actual times may vary based on OS and system load

### clearTimeout(t)
- global function used to stop a timer that was previously created with setTimeout()

### setInterval(cb, ms)
- runs callback repeatedly after at least ms milliseconds
- actual delay depends on OS and max timer is 24.8 days


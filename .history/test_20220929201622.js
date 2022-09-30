function test(fn,wait) { 
    let timer = null
    return function () { 
        let context = this
        let args = arguments
        if (timer) { 
            clearTimeout(timer)
            timer=null
        }
        timer = setTimeout(() => { 
            fn.call(context, ...args)
            timer=null
        },wait)
    }
}
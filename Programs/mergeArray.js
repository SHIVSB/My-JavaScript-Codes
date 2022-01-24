let a = [1,5,6]
let b = [2,4,8]

function merge(a,b){
    let c = []
    let i = 0
    let j = 0
    while(i<a.length && j<b.length){
        if(a[i]<b[j]){
            c.push(a[i])
            i++
        }else{
            c.push(b[j])
            j++
        }
    }
    while(i<a.length){
        c.push(a[i])
        i++
    }
    while(j<b.length){
        c.push(b[j])
        j++
    }
    return c
}

console.log(merge(a,b))
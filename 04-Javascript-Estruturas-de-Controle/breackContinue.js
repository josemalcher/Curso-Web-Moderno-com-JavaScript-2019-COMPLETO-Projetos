const nums = [1,2,3,4,5,6,7]

for(x in nums){
    if(x == 3){
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if(y == 3){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}
exteno:
for(a in nums){
    for(b in nums){
        if(a == 2 && b == 3){
            break exteno
        }
        console.log(`Par = ${a}, ${b}`)
    }
}
/*
    0 = 1
    1 = 2
    2 = 3
    0 = 1
    1 = 2
    2 = 3
    4 = 5
    Par = 0, 0
    Par = 0, 1
    Par = 0, 2
    Par = 0, 3
    Par = 0, 4
    Par = 1, 0
    Par = 1, 1
    Par = 1, 2
    Par = 1, 3
    Par = 1, 4
    Par = 2, 0
    Par = 2, 1
    Par = 2, 2
*/
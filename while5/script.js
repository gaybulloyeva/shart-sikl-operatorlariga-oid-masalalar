function solve() {
    let n = +prompt()
    let k = 0

    while (n % 2 == 0) {
        n = n / 2
        k++
    }
    if (n === 1) {
        console.log("n = 2 ning " + k + "- darajasi")
    }

    else {
        console.log("berilgan son 2ning darajasi emas")
    }

}

solve()
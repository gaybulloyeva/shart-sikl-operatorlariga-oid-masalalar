function solve() {
    let n = +prompt()
    let daraja = false

    while (n >= 3) {
        if (n === 3) {
            daraja = true
        }

        n = n / 3
    }

    if (daraja) {
        console.log("3 ning darajasi")
    }

    else {
        console.log("3 ning darajasi emas")
    }
}

solve()
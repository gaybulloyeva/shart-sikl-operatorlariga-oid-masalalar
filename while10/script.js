function solve() {
    let n = +prompt()
    let k = 0
    let daraja = 1

    while (daraja <= n) {
        k++
        daraja = daraja * 3
    }

    console.log(k - 1)
}

solve()
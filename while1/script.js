function solve() {
    let a = +prompt()
    let b = +prompt()

    while (a >= b) {
        a = a - b
    }

    console.log(a)
}

solve()
function solve() {
    let n = +prompt()
    let result = 1

    while (n > 0) {
        result = result * n
        n = n - 2
    }

    if (n % 2 == 0) {
        result = result * 2
    }

    else {
        result = result * 1
    }

    console.log("natija: " + result)
}

solve()
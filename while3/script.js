function solve() {
    let n = +prompt()
    let k = +prompt()
    let butunQism = 0

    while (n >= k) {
        n = n - k
        butunQism++
    }

    console.log("qoldiq: " + n, "butun qism: " + butunQism)
}

solve()
function superDigit(n, k) {
  let strInt = n
  for (i = 0; i < k - 1; i++) {
    strInt = strInt + n
  }
  return adder(strInt)
}

const adder = (str) => {
  if (str.length == 1) {
    return str
  }
  let y = 0
  for (i = 0; i < str.length; i++) {
    let x = parseInt(str[i])
    y += x
  }
  return adder(y.toString())
}


console.log(superDigit("324", 4))

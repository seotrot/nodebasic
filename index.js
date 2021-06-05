// randome message generator

const rmg = () => {
  const array = [
    'Build a message generator program using JavaScript',
    'Use Git version control',
    'Use command line',
    'Develop locally on your computer',
  ]

  const randomeNumber = Math.floor(Math.random() * 5)
  return array[randomeNumber]
}

console.log(rmg())

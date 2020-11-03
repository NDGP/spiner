const spinner = (arr) => {
  let timer = 0;
  for (let i = 0; i < 4; i++){
    for (let char in arr){
      timer += 100
      setTimeout(() => {
        process.stdout.write(`\r${arr[char]}  `)
        },timer)
    }
  }
}
const spinnys = ['|', '/', '-', '\\'];
spinner(spinnys)
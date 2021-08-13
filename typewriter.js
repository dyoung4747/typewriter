const sentence = "This is a sentence";

for (let i = 0; i < sentence.length; i++) {
  // let x = 0;
  // console.log(sentence[i])
  setTimeout(() => {
      process.stdout.write((sentence[i]));
    }, i * 50)
    // x += 1000;
};
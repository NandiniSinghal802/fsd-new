function f1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("HI!!!");
      resolve();
    }, 4000);
  });
}

function f2() {}
async function test() {
  try {
    await f1();
    await f2();
  } catch (error) {
    console.error("ERROR:", error);
  }
}
test();

function sum(a, b) {
  return a + b;
}
function sumWithMse(clbk, msg) {
  const result = clbk(20, 30);
  const fresult = "hi" + msg + "your score is" + result;
  console.log(fresult);
}
sumWithMse(sum, "mr. mohan");
function test1(cb){
    setTimeout(()=>{
        console.log("test1")
        cb();
    },2000);

}
function test2(cb){
    setTimeout(()=>{
        console.log("test2")
        cb();
    },1000);

}
function test3(cb){
    setTimeout(()=>{
        console.log("test3")
        cb();
    },200);

}

function test4(cb){
    setTimeout(()=>{
        console.log("test4");
        cb();
    },100);
  }

test1(()=>{
    test2(()=>{
        test3(()=>{
            test4(()=>{
              console.log("all done");
          });
        });
    });
  });

let a = true;
const start = Date.now();

async function fun(){
    await {
        while (Date.now() - start < 3000) {

        }
    }
}

setTimeout(() => {
  console.log('resetting a, at = ', Date.now() - start);
  a = false;
}, 1000);

fun()
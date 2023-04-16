
let a = true;
const start = Date.now();

async function fun(){
    await {
        while (Date.now() - start < 3000) {

        }
    }
}
//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

setTimeout(() => {
  console.log('resetting a, at = ', Date.now() - start);
  a = false;
}, 1000);

fun()

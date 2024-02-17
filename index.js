// Return the reference of the element by its ID and store it in a variable
const word1 = document.getElementById("word1");
const word2 = document.getElementById("word2");
const word3 = document.getElementById("word3");

const result = document.getElementById("result");
const btn = document.getElementById("combine");

// Calculate the possible combination
btn.addEventListener('click',()=>{

    const splitword1 = word1.value.split('');
    const splitword2 = word2.value.split('');
    const splitword3 = word3.value.split('');


    if(word1.value.length > 0 && word2.value.length > 0 && word3.value.length > 0 ){
    let resultadoFinal = '';
        for(let i=0; i < splitword1.length; i++){
            for(let j=0; j < splitword2.length; j++){
                for(let k=0; k < splitword3.length; k++){
                    let res = splitword1[i] + '-' + splitword2[j] + '-' + splitword3[k] +'\n';
                    console.log(res);
                    resultadoFinal += res;
                }
            }
        }
        result.value = resultadoFinal;
    } else {
        alert('You should full all the fields.')
    }
});
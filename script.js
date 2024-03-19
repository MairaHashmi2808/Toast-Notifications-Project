let toastBox = document.getElementById("toast-box");

let successMsg = '<img src="check.png"> Successfully submitted';
let errorMsg = '<img src="wrong.png"> Please fix the error';
let invalidMsg = '<img src="exclaimed.png"> Invalid input, check again';

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('submitted')){
        toast.classList.add('success');
    }
    if(msg.includes('fix')){
        toast.classList.add('error');
    }
    if(msg.includes('input')){
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove();
    }, 6000)
}

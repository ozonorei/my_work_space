const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message (錯誤顯示紅色的邊框)
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// Show success outline (正確顯示紅色的邊框)
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Cehck email is valid email （偵測信箱的格式是否正確_網路上抓的檔案）

// 複雜版
// function isValidEmail(email){
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input,'信箱格式錯誤');
    }
}


// Check required fields  
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input,`${getFieldName(input)} 尚未填寫`);
        } else {
            showSuccess(input);
        }
    });
}

// Check input length （密碼長度大小區間認證函式）
function checkLength(input, min, max) {
    if(input.value.length < min ) {
        showError(
            input,
            `${getFieldName(input)} 輸入字數小於 ${min} 字元`
        );
    } else if (input.value.length > max ) {
        showError(
            input,
            `${getFieldName(input)} 輸入字數大於 ${max} 字元`
        );
    } else {
        showSuccess(input);
    }
}

// Check passwords match （密碼相符驗證函式）
function checkPasswordsMatch(input1,input2) {
    if(input1.value !== input2.value) {
        showError(input2,'密碼不一致');
    }
}

// Get fieldname 
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// Event listeners (偵測字串長度、格式是符合)
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username,email,password,password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password,password2);

    // 複雜版

    // if(username.value === ''){
    //     showError(username,'Username is required')
    // } else {
    //     showSuccess(username);
    // }

    // if(email.value === ''){
    //     showError(email,'Email is required')
    // } else if (!isValidEmail(email.value)){
    //     showError(email,'Email is not valid')
    // } else {
    //     showSuccess(email);
    // }

    // if(password.value === ''){
    //     showError(password,'Password is required')
    // }else{
    //     showSuccess(password);
    // }

    // if(password2.value === ''){
    //     showError(password2,'password2 is required')
    // }else{
    //     showSuccess(password2);
    // }
});
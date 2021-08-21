/**
* Check a value of elements.
* This function use in HOC component withValidationForm.
* 
* @param {Object} {
*                      id: string,
*                      value: string,
*                      state: Object
*                 }
* @returns {boolean}
*/
function validationUserForm(props) {
    let { id: key, value, state } = props;

    const settings = {
        nickname: value.length < 2 || value.length > 10,
        password: value.length < 5 || value.length > 20,
        repeatPassword: value !== state.password.value,
        message: value.length < 2 || value.length > 30
    };

    return settings[key];
}

/**
* Check a value of elements.
* This function use in HOC component withValidationForm.
* 
* @param {Object} {
*                      id: string,
*                      value: string,
*                      state: Object
*                 }
* @returns {boolean}
*/
function validationChatForm(props) {
    let { id: key, value } = props;

    const settings = {
        message: value.length < 2 || value.length > 30
    };

    return settings[key];
}


export { validationUserForm, validationChatForm };
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
        password: (value.length <= 6),
        repeatPassword: value !== state.password.value,
    };

    return settings[key];
}

export { validationUserForm };
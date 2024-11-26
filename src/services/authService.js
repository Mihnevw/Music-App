export const saveUser = (user) => {
    if (user.accessToken) {
        localStorage.setItem('user', JSON.stringify(user)) // Трябва да му подадем key-а 
    }
};

export const deleteUser = () => {
    localStorage.removeItem('user'); 
};

export const getUser = () => {
    let serializedUser = localStorage.getItem('user');

    if (serializedUser) { // Ако няма serializedUser ще даде undefined ако имаме казваме let user = JSON.parse(serializedUser)
        let user = JSON.parse(serializedUser);

        return user;
    }
};

export const getToken = () => {
    return getUser()?.accessToken // Въпросителната означава че ако това на 26 ред не е null или undefined тогава му вземи accessToken
};
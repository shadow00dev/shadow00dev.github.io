function passwords(length = 20, amount = 5, abc = true, ABC = true, numbers = true, symbols = true) {
    // Error handling, possibly not needed depending on how input handling is done
    if (!Number.isInteger(length) || length < 1 || !Number.isInteger(amount) || amount < 1) {
        throw new Error('Length and amount must be integers greater than 0.');
    }
    if (typeof ABC !== 'boolean' || typeof abc !== 'boolean' || typeof numbers !== 'boolean' || typeof symbols !== 'boolean') {
        throw new Error('ABC, abc, numbers and symbols must be boolean values.');
    }

    //Adds selected characters
    const characters = [];
    if (ABC) characters.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (abc) characters.push("abcdefghijklmnopqrstuvwxyz");
    if (numbers) characters.push("1234567890");
    if (symbols) characters.push("~!@#$%^&*()_-+={[}]|:;<,>.?/");

    if (characters.length == 0) throw new Error('No characters selected');

    const getRandom = (choose) => choose[Math.floor(Math.random() * choose.length)]; //Gets a random character from the selected character group.

    //Generates the passwords list then return the list.
    const passwordList = [];
    for (let count = 0; count < amount; count++) {
        let password = "";
        for (let add = 0; add < length; add++) {
            const selectedSet = getRandom(characters);
            password += getRandom(selectedSet);
        }
        if (!passwordList.includes(password)) passwordList.push(password);
    }
    return passwordList;
}
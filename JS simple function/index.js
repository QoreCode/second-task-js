module.exports = function func(s, a, b) {
    if (!s.length) return -1;

    let i = s.length - 1;

    while (i > 0) {
        const sSubstr = s.substring(i, i + 1);

        if ([a, b].includes(sSubstr)) return i;

        i--;
    }

    return -1;
};

// Из самой фунции сложно понять что она делает)
// Но если я правильно понял тесты, то я бы решил это как-то так
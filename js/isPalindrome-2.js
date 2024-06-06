function isPalindrome2(s) {
    s = s.replace(/[^a-z0-9]/gi, '') // замена всех ненужных символов, т.е знаков препинания
        .toLowerCase()
        .split('')
    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
        if (s[i] !== s[j]) return false;
    }
    return true;
}

// example

isPalindrome2(s = "A man, a plan, a canal: Panama")
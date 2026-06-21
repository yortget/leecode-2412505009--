var calculate = function(s) {
    const stack = [];
    let num = 0;
    let sign = '+';
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (ch >= '0' && ch <= '9') {
            num = num * 10 + (ch - '0');
        }
        if ((ch < '0' || ch > '9') && ch !== ' ') {
            if (sign === '+') {
                stack.push(num);
            } else if (sign === '-') {
                stack.push(-num);
            } else if (sign === '*') {
                stack.push(stack.pop() * num);
            } else if (sign === '/') {
                stack.push(Math.trunc(stack.pop() / num));
            }
            sign = ch;
            num = 0;
        }
    }

    if (sign === '+') {
        stack.push(num);
    } else if (sign === '-') {
        stack.push(-num);
    } else if (sign === '*') {
        stack.push(stack.pop() * num);
    } else if (sign === '/') {
        stack.push(Math.trunc(stack.pop() / num));
    }
    return stack.reduce((a, b) => a + b, 0);
};
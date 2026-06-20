/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;

    const rows = new Array(numRows).fill().map(() => []);
    let curRow = 0;
    let goingDown = false;

    for (const ch of s) {
        rows[curRow].push(ch);
        if (curRow === 0 || curRow === numRows - 1) {
            goingDown = !goingDown;
        }
        curRow += goingDown ? 1 : -1;
    }

    return rows.flat().join('');
};
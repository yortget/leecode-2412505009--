/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    const n = s.length;
    const count = new Array(26).fill(0);
    for (const ch of s) {
        count[ch.charCodeAt(0) - 97]++;
    }

    const maxFreq = Math.max(...count);
    if (maxFreq > Math.floor((n + 1) / 2)) {
        return "";
    }

    let freqArr = [];
    for (let i = 0; i < 26; i++) {
        if (count[i] > 0) {
            freqArr.push({
                char: String.fromCharCode(97 + i),
                freq: count[i]
            });
        }
    }

    const result = [];
    while (freqArr.length > 0) {
        // 按频率降序排序
        freqArr.sort((a, b) => b.freq - a.freq);

        if (freqArr.length >= 2) {
            const first = freqArr[0];
            const second = freqArr[1];
            result.push(first.char);
            result.push(second.char);
            first.freq--;
            second.freq--;
            freqArr = freqArr.filter(item => item.freq > 0);
        } else {
            const only = freqArr[0];
            result.push(only.char);
            only.freq--;
            if (only.freq > 0) {
                return "";
            }
            freqArr = freqArr.filter(item => item.freq > 0);
        }
    }

    return result.join('');
};
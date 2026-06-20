function longestDupSubstring(s) {
    const n = s.length;
    const base = 131n;
    const mod = 1_000_000_007n; 
    
    const pow = new Array(n+1);
    const hash = new Array(n+1);
    hash[0] = 0n;
    pow[0] = 1n;
    for (let i = 0; i < n; i++) {
        hash[i+1] = (hash[i] * base + BigInt(s.charCodeAt(i))) % mod;
        pow[i+1] = (pow[i] * base) % mod;
    }
    
    const getHash = (l, len) => {
        const r = l + len;
        let h = (hash[r] - hash[l] * pow[len]) % mod;
        if (h < 0) h += mod;
        return h;
    };
    
    const check = (len) => {
        const map = new Map();
        for (let i = 0; i + len <= n; i++) {
            const h = getHash(i, len);
            if (map.has(h)) {
                
                const j = map.get(h);
                if (s.substring(j, j+len) === s.substring(i, i+len)) {
                    return i;
                } else {
                   
                }
            } else {
                map.set(h, i);
            }
        }
        return -1;
    };
    
    let low = 1, high = n - 1, bestLen = 0, bestStart = -1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const start = check(mid);
        if (start !== -1) {
            bestLen = mid;
            bestStart = start;
            low = mid + 1; 
        } else {
            high = mid - 1;
        }
    }
    return bestLen === 0 ? "" : s.substring(bestStart, bestStart + bestLen);
}
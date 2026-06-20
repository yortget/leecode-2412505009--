var diffWaysToCompute = function(expression) {
    const ops = new Set(['+', '-', '*']);
    
    const compute = (left, right, op) => {
        if (op === '+') return left + right;
        if (op === '-') return left - right;
        if (op === '*') return left * right;
        return 0;
    };
    
    const dfs = (expr) => {
        let onlyNumber = true;
        for (let ch of expr) {
            if (ops.has(ch)) {
                onlyNumber = false;
                break;
            }
        }
        if (onlyNumber) {
            return [parseInt(expr)];
        }
        
        const results = [];
        for (let i = 0; i < expr.length; i++) {
            if (ops.has(expr[i])) {
                const leftExpr = expr.slice(0, i);
                const rightExpr = expr.slice(i + 1);
                const leftResults = dfs(leftExpr);
                const rightResults = dfs(rightExpr);
                for (let l of leftResults) {
                    for (let r of rightResults) {
                        results.push(compute(l, r, expr[i]));
                    }
                }
            }
        }
        return results;
    };
    
    return dfs(expression);
};
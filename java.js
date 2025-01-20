// Before: Using an array for fast lookups
function checkDuplicates(items) {
    let duplicates = [];
    for (let i = 0; i < items.length; i++) {
        if (duplicates.includes(items[i])) {
            console.log("Duplicate found:", items[i]);
        }
        duplicates.push(items[i]);
    }
}

// After: Using a Set for fast lookups
function checkDuplicates(items) {
    let seen = new Set();
    items.forEach(item => {
        if (seen.has(item)) {
            console.log("Duplicate found:", item);
        }
        seen.add(item);
    });
}

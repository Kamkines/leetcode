var strStr = function(haystack, needle) {
    if(haystack.includes(needle)) return haystack.indexOf(needle)
    return -1
};

// example

strStr(haystack = "sadbutsad", needle = "sad")
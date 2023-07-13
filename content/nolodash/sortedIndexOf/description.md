We will use a plain JavaScript implementation of `_.sortedIndex()` to help define `sortedIndexOf()`.

```javascript
function sortedIndex(array, value, _range) {
  const [low, high] = _range ?? [0, array.length];
  if (low === high) {
    return low;
  }

  const midPoint = low + Math.floor((high - low) / 2);
  const newRange = value <= array[midPoint]
    ? [low, midPoint]
    : [midPoint + 1, high];

  return sortedIndex(array, value, newRange);
}

function sortedIndexOf(array, value) {
  const index = sortedIndex(array, value);
  return array[index] === value ? index : -1;
}
```
const data = ["вертикаль", "кильватер", "апельсин", "спаниель", "австралопитек", "ватерполистка", "кластер", "сталкер", "стрелка", "корабль"];

// const result = [
//   ["вертикаль", "кильватер"],
//   ["апельсин", "спаниель"],
//   ["австралопитек", "ватерполистка"],
//   ["кластер", "сталкер", "стрелка"],
//   ["корабль"]
// ];

const getAnagrams = data => {
  const hashTable = data.reduce((acc, item) => {
    const key = item.split('').sort().join('');
    return {...acc, [key]: [...acc[key] || [], item]}
  }, {});

  return Object.keys(hashTable).map(key => hashTable[key]);
}

console.log(getAnagrams(data));

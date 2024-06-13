function average(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}


const numbers = [1, 2, 3, 4, 5];
const result = average(numbers);
console.log(result); // 3
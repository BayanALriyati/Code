function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	// write your solution here
	const random = Math.random();
    
    // Scale the random number to the desired range
    const scaled = random * (rangeEnd - rangeStart + 1) + rangeStart;
    
    // Round down the scaled number to the nearest whole number
    const result = Math.floor(scaled);
    
    // Return the generated random number
    return result;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)
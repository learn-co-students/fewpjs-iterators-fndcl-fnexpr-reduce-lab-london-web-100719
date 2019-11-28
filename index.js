const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const sum = (previous, current) => previous + current;
const totalBatteries = batteryBatches.reduce(sum);

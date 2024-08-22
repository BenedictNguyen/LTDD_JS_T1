const dolphinsScores = [10, 0, 2];
const koalasScores = [90, 0, 0];

// Hàm tính điểm trung bình 
function calculateAverage(scores) {
    const sum = scores.reduce((total, score) => total + score, 0);
    return sum / scores.length;
}

// Điểm trung bình các đội
const dolphinsAverage = calculateAverage(dolphinsScores);
const koalasAverage = calculateAverage(koalasScores);

// Define minimum score requirement
const minimumScore = 100;

// Determine the winner based on average scores
function determineWinner(dolphinsAvg, koalasAvg) {
    if (dolphinsAvg >= minimumScore && koalasAvg >= minimumScore) {
        if (dolphinsAvg > koalasAvg) {
            return 'Dolphins thắng!';
        } else if (koalasAvg > dolphinsAvg) {
            return 'Koalas thắng!';
        } else {
            return 'Hòa!';
        }
    } else if (dolphinsAvg >= minimumScore) {
        return 'Dolphins thắng!';
    } else if (koalasAvg >= minimumScore) {
        return 'Koalas thắng!';
    } else {
        return 'Không đội nào thắng!';
    }
}

const result = determineWinner(dolphinsAverage, koalasAverage);
console.log(result);
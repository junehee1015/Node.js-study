// filter(조건)
// 배열에서 조건에 맞는 정보를 가져올 수 있다.
const students = [
    {name: 'a', kor: 90, math: 80, eng: 50},
    {name: 'b', kor: 80, math: 40, eng: 90},
    {name: 'c', kor: 70, math: 30, eng: 40},
    {name: 'd', kor: 60, math: 50, eng: 70},
    {name: 'e', kor: 50, math: 90, eng: 50}
];
const find = students.filter(value => value.math >= 50 && value.kor >= 80);
console.log(find);


// map()
// 배열에서 원하는 정보를 조작할 수 있다.
const employee = [
    {name: 'a', position: '대리', salary: 4000},
    {name: 'a', position: '과장', salary: 5000},
    {name: 'a', position: '차장', salary: 6000},
    {name: 'a', position: '부장', salary: 7000},
    {name: 'a', position: '사장', salary: 8000}
];
const increase = employee.map(value => value.salary * 1.2);
console.log(increase);
increase.forEach(value => console.log(value));


// map(), reduce()
const classScore = [
    {name: 'a', score: 50},
    {name: 'b', score: 90},
    {name: 'c', score: 100},
    {name: 'd', score: 60},
    {name: 'e', score: 70}
];

// map을 사용하여 원하는 정보만 가져온다.
const scores = classScore.map(value => value.score);
console.log(scores);

// reduce를 사용하여 score를 누적 연산할 수 있다.
const sum = scores.reduce((accu, curr, index) => {
    console.log(accu, curr, index);
    return accu + curr;
});
console.log('학급의 총 점수:',sum);

const average = sum/classScore.length;
console.log('학급 평균 점수:',average);

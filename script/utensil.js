// 将个位数转化为万位数
export function toWan(num){
    if (num < 1000) return num.toString();
    return (num/10000).toFixed(1).toString() + '万'
}
// 将分转化为妙
export function timeTrans(totalSec){
    let hour = Math.floor(totalSec / 3600);
    let min = Math.floor((totalSec % 3600) / 60);
    let sec = totalSec - hour * 3600 - min * 60;

    if (hour) return `${hour}:${min}:${sec}`;
    else if (min) return `${min}:${sec}`;
    else return  `00:${sec}`;

}

// 目标日期：2026年8月24日上午8点
const targetDate = new Date(2026, 7, 24, 8, 0, 0);

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;
    
    // 如果目标日期已过，显示0
    if (diff <= 0) {
        document.getElementById('months').textContent = '00';
        document.getElementById('weeks').textContent = '00';
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        return;
    }
    
    // 计算总毫秒数对应的时间单位
    const totalSeconds = Math.floor(diff / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    
    // 计算月份（近似值，按30天/月计算）
    const months = Math.floor(totalDays / 30);
    const daysAfterMonths = totalDays % 30;
    
    // 计算周数
    const weeks = Math.floor(daysAfterMonths / 7);
    const days = daysAfterMonths % 7;
    
    // 计算小时
    const hours = totalHours % 24;
    
    // 格式化数字为两位数
    document.getElementById('months').textContent = String(months).padStart(2, '0');
    document.getElementById('weeks').textContent = String(weeks).padStart(2, '0');
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
}

// 初始化倒计时
updateCountdown();

// 每秒更新一次
setInterval(updateCountdown, 1000);
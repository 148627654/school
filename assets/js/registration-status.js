/**
 * ACP Summer School 2026 - 注册状态控制脚本
 * 功能：根据截止日期自动切换注册链接/关闭提示状态
 * 配置项可直接在下方修改
 */
(function() {
    // ==================== 配置项（可按需修改）====================
    const CONFIG = {
        // 注册截止日期（格式：YYYY-MM-DDTHH:MM:SS，时区默认本地时区）
        deadline: '2026-07-31T23:59:59',
        // 未超时状态元素ID
        activeElementId: 'active-registration',
        // 超时状态元素ID
        closedElementId: 'closed-registration'
    };

    // ==================== 核心逻辑 ====================
    /**
     * 初始化注册状态
     */
    function initRegistrationStatus() {
        // 等待DOM加载完成
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', handleStatusSwitch);
        } else {
            handleStatusSwitch();
        }
    }

    /**
     * 处理状态切换（核心函数）
     */
    function handleStatusSwitch() {
        // 获取页面元素
        const activeElement = document.getElementById(CONFIG.activeElementId);
        const closedElement = document.getElementById(CONFIG.closedElementId);

        // 校验元素是否存在
        if (!activeElement || !closedElement) {
            console.warn('注册状态元素未找到，请检查元素ID配置');
            return;
        }

        // 计算当前时间与截止日期的差值
        const deadlineTime = new Date(CONFIG.deadline).getTime();
        const currentTime = new Date().getTime();
        const timeDiff = deadlineTime - currentTime;

        // 根据时间差切换状态
        if (timeDiff > 0) {
            // 未超时：显示注册链接，隐藏关闭提示
            activeElement.style.display = 'block';
            closedElement.style.display = 'none';
        } else {
            // 已超时：隐藏注册链接，显示关闭提示
            activeElement.style.display = 'none';
            closedElement.style.display = 'block';
        }
    }

    // ==================== 启动执行 ====================
    // 页面加载完成后初始化
    initRegistrationStatus();
})();
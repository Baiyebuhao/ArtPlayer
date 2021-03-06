import { mergeDeep } from './utils';

let i18nMap = {
    'zh-cn': {
        'About author': '关于作者',
        'Video info': '视频统计信息',
        Close: '关闭',
        'Video load failed': '视频加载失败',
        Volume: '音量',
        Play: '播放',
        Pause: '暂停',
        Rate: '速度',
        Mute: '静音',
        Flip: '视频翻转',
        Horizontal: '水平',
        Vertical: '垂直',
        Reconnect: '重新连接',
        'Hide subtitle': '隐藏字幕',
        'Show subtitle': '显示字幕',
        'Hide danmu': '隐藏弹幕',
        'Show danmu': '显示弹幕',
        'Show setting': '显示设置',
        'Hide setting': '隐藏设置',
        Screenshot: '截图',
        'Play speed': '播放速度',
        'Aspect ratio': '画面比例',
        Default: '默认',
        Normal: '正常',
        'Switch video': '切换',
        'Switch subtitle': '切换字幕',
        Fullscreen: '全屏',
        'Exit fullscreen': '退出全屏',
        'Web fullscreen': '网页全屏',
        'Exit web fullscreen': '退出网页全屏',
        'Mini player': '迷你播放器',
    },
    'zh-tw': {
        'About author': '關於作者',
        'Video info': '影片統計訊息',
        Close: '關閉',
        'Video load failed': '影片載入失敗',
        Volume: '音量',
        Play: '播放',
        Pause: '暫停',
        Rate: '速度',
        Mute: '靜音',
        Flip: '影片翻轉',
        Horizontal: '水平',
        Vertical: '垂直',
        Reconnect: '重新連接',
        'Hide subtitle': '隱藏字幕',
        'Show subtitle': '顯示字幕',
        'Show setting': '顯示设置',
        'Hide setting': '隱藏设置',
        'Hide danmu': '隱藏彈幕',
        'Show danmu': '顯示彈幕',
        Screenshot: '截圖',
        'Play speed': '播放速度',
        'Aspect ratio': '畫面比例',
        Default: '默認',
        Normal: '正常',
        'Switch video': '切換',
        'Switch subtitle': '切換字幕',
        Fullscreen: '全屏',
        'Exit fullscreen': '退出全屏',
        'Web fullscreen': '網頁全屏',
        'Exit web fullscreen': '退出網頁全屏',
        'Mini player': '迷你播放器',
    },
};

export default class I18n {
    constructor(art) {
        this.art = art;
        this.init();
    }

    init() {
        this.language = i18nMap[this.art.option.lang.toLowerCase()] || {};
    }

    get(key) {
        return this.language[key] || key;
    }

    update(value) {
        i18nMap = mergeDeep(i18nMap, value);
        this.init();
    }
}

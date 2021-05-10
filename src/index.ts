type ColorPattern =
  'gray' |
  'sky-blue' |
  'pink' |
  'green' |
  'orange' |
  'white'
  ;

type Option = {
  color?: ColorPattern,
  width?: number,
  height?: number,
  text?: string,
};

/**
 * ダミー画像生成
 * 使用サイト : https://placehold.jp/#advanced-tab
 */
export class DummyImage {

  private static DEFAULT_OPTION = {
    color: 'gray' as ColorPattern,
    width: 150,
    height: 150,
    text: '',
  };

  /**
   * 指定したサイズの画像URL取得
   * @return {string} URL
   * @param option
   */
  static getURL(option: Option = {}): string {
    if (!option.color) {
      option.color = this.getRandomColorPattern();
    }
    const opt = { ...this.DEFAULT_OPTION, ...option };
    const host: string = 'http://placehold.jp';
    const colorBg: string = DummyImage.getColorStr(opt.color).bg;
    const colorMsg: string = DummyImage.getColorStr(opt.color).msg;
    const encodedStr: string = encodeURI(opt.text || `w: ${opt.width}\nh: ${opt.height}`);
    return `${host}/${colorBg}/${colorMsg}/${opt.width}x${opt.height}.png?text=${encodedStr}`;
  }

  private static getRandomColorPattern() {
    const random = (min: number, max: number): number => (
      Math.floor(Math.random() * (max + 1 - min)) + min
    );
    let color: ColorPattern = 'gray';
    switch (random(0, 5)) {
      case 0:
        color = 'gray';
        break;
      case 1:
        color = 'sky-blue';
        break;
      case 2:
        color = 'pink';
        break;
      case 3:
        color = 'green';
        break;
      case 4:
        color = 'orange';
        break;
      case 5:
        color = 'white';
        break;
    }
    return color;
  }

  /**
   * 色の組み合わせ取得処理
   * @param color
   * @return {bg: string, msg: string}
   */
  private static getColorStr(color: ColorPattern): { bg: string, msg: string } {
    const bgLight = 'dcdcdc';
    const bgDark = 'a9a9a9';
    switch (color) {
      case 'gray':
        return { bg: 'a9a9a9', msg: bgLight };
      case 'sky-blue':
        return { bg: '87ceeb', msg: bgDark };
      case 'pink':
        return { bg: 'ffb6c1', msg: bgDark };
      case 'green':
        return { bg: '90ee90', msg: bgDark };
      case 'orange':
        return { bg: 'ffa500', msg: bgDark };
      case 'white':
        return { bg: 'f5f5f5', msg: bgDark };
      default:
        throw new Error('color is undefined !!');
    }
  }
}

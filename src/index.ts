enum DummyImgPattern {
  gray,
  skyBlue,
  pink,
  green,
  orange,
  white,
}

export class DummyImage {
  // 使用サイト
  // https://placehold.jp/#advanced-tab

  /**
   * 指定したサイズの画像URL取得
   * @param {DummyImgPattern} patternId
   * @param {number} w
   * @param {number} h
   * @return {string} URL
   */
  static getURL(
    patternId: DummyImgPattern = DummyImgPattern.gray,
    w: number = 150,
    h: number = 150,
  ): string {
    const host: string = 'http://placehold.jp';
    const colorBg: string = DummyImage.getColorStr(patternId).bg;
    const colorMsg: string = DummyImage.getColorStr(patternId).msg;
    const encodedStr: string = encodeURI(`w: ${w}\nh: ${h}`);
    return `${host}/${colorBg}/${colorMsg}/${w}x${h}.png?text=${encodedStr}`;
  }

  /**
   * 指定したサイズの画像URL取得 (パターンランダム)
   * @param {number} w
   * @param {number} h
   * @return {string} URL
   */
  static getRandomURL(w: number = 150, h: number = 150): string {
    const random = (min: number, max: number): number => (
      Math.floor(Math.random() * (max + 1 - min)) + min
    );
    return this.getURL(random(0, 5), w, h);
  }

  /**
   * 色の組み合わせ取得処理
   * @param patternId
   * @return {bg: string, msg: string}
   */
  private static getColorStr(patternId: DummyImgPattern): { bg: string, msg: string } {
    const bgLight = 'dcdcdc';
    const bgDark = 'a9a9a9';
    switch (patternId) {
      case DummyImgPattern.gray:
        return { bg: 'a9a9a9', msg: bgLight };
      case DummyImgPattern.skyBlue:
        return { bg: '87ceeb', msg: bgDark };
      case DummyImgPattern.pink:
        return { bg: 'ffb6c1', msg: bgDark };
      case DummyImgPattern.green:
        return { bg: '90ee90', msg: bgDark };
      case DummyImgPattern.orange:
        return { bg: 'ffa500', msg: bgDark };
      case DummyImgPattern.white:
        return { bg: 'f5f5f5', msg: bgDark };
      default:
        throw new Error('patternId is undefined !!');
    }
  }
}
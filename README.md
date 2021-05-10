# DummyImage

ja / [en](./README.en.md)

ダミーの画像を簡単に生成

## 使い方

### ランダム

```TypeScript
import { DummyImage } from '@tenryu/dummy-image';

const imageUrl = DummyImage.getURL();

console.log(imageUrl);
```

![image](http://placehold.jp/90ee90/a9a9a9/150x150.png?text=w:%20150%0Ah:%20150)

### オプションの指定

```TypeScript
import { DummyImage } from '@tenryu/dummy-image';

const imageUrl = DummyImage.getURL({
  color: 'sky-blue',
  text: 'hoge piyo',
  width: 200,
  height: 50,
});

console.log(imageUrl);
```

![image](http://placehold.jp/87ceeb/a9a9a9/200x50.png?text=hoge%20piyo)

## オプション

| option         | description                                            |
| ----------- | ------------------------------------------------ |
| `color`   | 'gray', 'sky-blue', 'pink', 'green', 'orange', 'white' |
| `width`     | width (px) |
| `height` | height (px)  |
| `text`    | text in image |

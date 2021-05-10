import { DummyImage } from './index';

console.log('test start ...');

console.group('[test] random url');
console.log(DummyImage.getURL());
console.log(DummyImage.getURL());
console.log(DummyImage.getURL());
console.groupEnd();

console.group('[test] set color');
console.log(DummyImage.getURL({
  color: 'skyBlue',
}));
console.groupEnd();

console.group('[test] set color/text');
console.log(DummyImage.getURL({
  color: 'skyBlue',
  text: 'hoge piyo',
}));
console.groupEnd();

console.group('[test] set color/width/height');
console.log(DummyImage.getURL({
  color: 'skyBlue',
  width: 200,
  height: 50,
}));
console.groupEnd();

console.group('[test] set color/text/width/height');
console.log(DummyImage.getURL({
  color: 'skyBlue',
  text: 'hoge piyo',
  width: 200,
  height: 50,
}));
console.groupEnd();

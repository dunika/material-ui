import style from './style';

function transform(value) {
  return value <= 1 ? `${value * 100}%` : value;
}

export const width = style({
  prop: 'width',
  transform,
});

export const maxWidth = style({
  prop: 'maxWidth',
  transform,
});

export const minWidth = style({
  prop: 'minWidth',
  transform,
});

export const height = style({
  prop: 'height',
  transform,
});

export const maxHeight = style({
  prop: 'maxHeight',
  transform,
});

export const minHeight = style({
  prop: 'minHeight',
  transform,
});

export const sizeWidth = style({
  prop: 'size',
  cssProperty: 'width',
  transform,
});

export const sizeHeight = style({
  prop: 'size',
  cssProperty: 'height',
  transform,
});

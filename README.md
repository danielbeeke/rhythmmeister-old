# vertical-rhythm mixin

```
@mixin vertical-rhythm(
    $padding-top: 0, 
    $padding-bottom: 0, 
    $margin-top: 0, 
    $margin-bottom: 0, 
    $size-name: ''
)
```

With this mixin you can create a layout with perfect vertical rhythm.
This mixin uses the cap height instead of the line height, so it is more in line with press.

### Variables

```
$line-height: 1.2;
$baseline: 24px;

$font-sizes:  (s: 16px, m: 30px, l: 38px, xl: 80px);
$cap-heights: (s: 0.62,  m: 0.64,  l: 0.66, xl: 0.69);
```

### Use

```
h1 {
  @include vertical-rhythm(1, 1, 0, 0, xl);
}

h2 {
  @include vertical-rhythm(0, 1, 0, 0, l);
}

p {
  @include vertical-rhythm(0, 0, 0, 0, s);
}

.box1 {
  @include vertical-rhythm(7, 0, 1, 1);
  width: 50%;
  background: orangered;
  float: right;
}
```

## The result
![Screenshot](http://i.imgur.com/YRnOtEO.png)
# svg-stubs service

Colored svg stubs for banner tests and etc

[![NPM](https://nodei.co/npm/svg-stubs.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/svg-stubs/)

# install

```
npm i -g svg-stubs
```


# usage

```
svg-stubs 8080
```

in browser

```
http://localhost:8080?text=hello
```

## GET params

| name     | type   | description            | default |
| -------- | ------ | ---------------------- | ------- |
| text     | string | centered text on image | hello   |
| fontSize | number | text font size         | 24      |
| width    | number | image width            | 1180    |
| height   | number | image height           | 90      |
| fill     | string | image background color | C13C41  |
| time     | bool   | show time after text   | 0       |

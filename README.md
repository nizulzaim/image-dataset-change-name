## What Do I Do?

changing filename from 101_1.jpg, 101_2.jpg and so on to 00001.jpg;

## How To Use

1. Clone this project
2. Add image file to folder "data" in this project
3. Run

```
npm install
```
4. In current project folder, to start change filename, run in terminal:

```
node -e 'require("./index").convertFile()'
```

## Arguments

.convertFile(fileFormat,className, objectName)

| Arguments     | Default       |
| ------------- |:-------------:|
| fileFormat    | ".jpg"        |
| classNumber   | 46            |
| objectNumber  | 7             |

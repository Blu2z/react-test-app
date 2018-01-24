## Test application React-Redux

Demo: [react-test-app](https://blu2z.github.io/react-test-app)

## Description

Нужно сделать страницу, где будет форма загрузки базы данных в формате JSON (пример базы прикрепляю ниже).  

После загрузки нужно  сделать таблицу с линамическими колонками, соответствующие полям в json файле + колонка с действиями (изменить, удалить)

При нажатии на “переименовать” происходит смена содержимого строки таблицы на инпуты с уже вбитыми данными и кнопкой сохранить. 

Под таблицей нужно сделать кнопку “экспорт в csv” и “экспорт в json” 

Необходимо все выполнить с помощью react и redux 

```json
[
  {
    "candidateName":"Peter Petrov",
    "candidateStatus":"pending",
    "candidateNeedOffer":1800
  },
  {
    "candidateName":"Ivan Ivanov",
    "candidateStatus":"pending",
    "candidateNeedOffer":3000
  },
  {
    "candidateName":"Roman Romanov",
    "candidateStatus":"oninterview",
    "candidateNeedOffer":2400
  },
  {
    "candidateName":"Konstantin Konstantinov",
    "candidateStatus":"on_test_perdiod",
    "candidateNeedOffer":3000
  }
]
```

## Getting Started

### `npm inatall`

Install dependencies


### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).





In the project directory, you can run:

### `npm start`


## Тема JSX
### Задания:

1. Сделайте так, чтобы метод render вывел на экран следующее:
```
<div>
	текст
</div>
 ```
2. Пусть в методе render есть переменная text с текстом "текст". С ее помощью выведите следующее:
```
<div>
	текст
</div>
``` 
3. Пусть в методе render есть переменная text с текстом  ```'<p>текст</p>'```. С ее помощью выведите следующее:
```
<div>
	<p>текст</p>
</div>
``` 
4. Пусть в методе render есть переменная text1 с текстом ```'<p>текст1</p>'``` и переменная text2 с текстом ```'<p>текст2</p>'```. С их помощью выведите следующее:
```
<div>
	<p>текст1</p>
	<p>!!!</p>
	<p>текст2</p>
</div>
 ```
### На атрибуты
5. Пусть в методе render есть переменная attr с текстом 'block'. Сделайте так, чтобы метод render вывел на экран следующее (значение атрибута id должно вставится из переменной attr):
```
<div id="block">
	текст
</div>
``` 
6. Пусть в методе render есть переменная str с текстом 'block'. Сделайте так, чтобы метод render вывел на экран следующее (значение атрибута class должно вставится из переменной str):
```
<div class="block">
	текст
</div>
``` 
### На работу с CSS

7. Дан див с текстом. Установите этому диву зеленый цвет, границу и border-radius в 30px. 

### На условия
8. Пусть в методе render есть переменная show, которая может иметь значение true или false. Сделайте так, чтобы, если эта переменная равна true, метод render вывел на экран следующее:
```
<div>
	текст 1
</div>
```
А если эта переменная равна false, то следующее:
```
<div>
	текст 2
</div>
 ```
### На циклы
9. Пусть в методе render есть переменная arr, в которой лежит массив с элементами ```['a', 'b', 'c', 'd', 'e']```. Сделайте так, чтобы метод render вывел на экран следующее (в каждую лишку запишется один из элементов массива):
```
<ul>
	<li>a</li>
	<li>b</li>
	<li>c</li>
	<li>d</li>
	<li>e</li>
</ul>
``` 
### На методы
10. Пусть класс App имеет метод getText(), который своим результатом возвращает ```'<p>текст</p>'```. Используя метод getText() в методе render выведите на экран следующее:
```
<div>
	<p>текст</p>
</div>
 ```
11. Пусть класс App имеет метод getNum1(), который своим результатом возвращает число 1 и метод getNum2(), который своим результатом возвращает число 2. Используя эти методы в методе render выведите на экран сумму результатов этих методов (3 - результат сложения getNum1() и getNum2()):
```
<div>
	текст 3
</div>
 ```
 
12. ##  Перепишите код на JSX.

```
import React from "react";
import ReactDOM from "react-dom";

// tip: чтобы встроить переменную в JSX используйте фигурные скобки {name}
const Book = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("p", {}, props.year),
    React.createElement("p", {}, props.price)
  ]);
};

const App = () => {
  return (
    <div>
      <Book name="JS for beginners" year="2018" price="1000" />
      <Book name="React for beginners" year="2019" price="1200" />
      <Book name="Vue for beginners" year="2021" price="1500" />
    </div>
  );

  React.createElement("div", {}, [
  React.createElement(
      "h1",
      { id: "hello", className: "class1" },
      "Hello from React"
     ),
  React.createElement(Book, {
      name: "JS for beginners",
      year: 2018,
      price: 1000
    }),
  React.createElement(Book, { name: "React", year: 2020, price: 1200 }),
  React.createElement(Book, { name: "Vue JS", year: 2019, price: 1100 })
   ]);
};


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  rootElement
);
 ``` 

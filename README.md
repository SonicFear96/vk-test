# Структура JSON
``` javascript
{
  tag: String,  
  attributes: Object,
  children: Array of Objects | String
}
```

## Пример без вложенности
```javascript
const Data = {
  tag:  "button",
  attributes: {
    class: "submit",
    type: "submit",
  },
  children: 'Submit'
};
```
## Пример с вложенностью
```javascript
const Data = {
  tag: "div",
  attributes: {
    class: "darkTheme",
  },
  children: [
    {
      tag: "div",
      children: [
        {
          tag: "button",
          children: "пока",
        },
      ],
    },
  ],
};
```

# Точки роста
- Вынести библиотечные функции в приватные методы
- Переосмыслить интернализацию?
- Добавить динамическое переключение языка на основе дефолтов из браузера

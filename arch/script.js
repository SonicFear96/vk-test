let form = {
  action: "www.example.com",
  method: "post",
  label: [
    {
      for: "name-user",
      text: "Ваше имя:",
    },
    {
      for: "surname-user",
      text: "Ваша фамилия:",
    },
    {
      for: "date",
      text: "Дата рождения:",
    },
    {
      for: "tel",
      text: "Ваш номер телефона",
    },
    {
      for: "mail-user",
      text: "Ваш e-mail:",
    },
    {
      input: {
        type: "radio",
        name: "question",
        value: "1",
        cheked: "",
      },
      text: "1 раз в неделю",
    },
    {
      input: {
        type: "radio",
        name: "question",
        value: "2",
      },
      text: "2 раза в неделю",
    },
    {
      input: {
        type: "radio",
        name: "question",
        value: "3",
      },
      text: "3 раза в неделю",
    },
    {
      for: "education",
      text: "Ваше образование",
    },
    "Расскажите о себе кратко",
  ],
  input: [
    {
      id: "name-user",
      type: "text",
      name: "name",
      placeholder: "Имя",
    },
    {
      id: "surname-user",
      type: "text",
      name: "surname",
      placeholder: "Фамилия",
    },
    {
      type: "date",
      id: "date",
      name: "date",
    },
    {
      type: "tel",
      id: "tel",
      name: "tel",
      pattern: "[0-9]{1}-[0-9]{3}-[0-9]{3}",
      placeholder: "Формат номера X-XXX-XXX",
    },
    {
      id: "mail-user",
      type: "email",
      name: "mail",
      placeholder: "email@example.com",
    },
    {
      type: "submit",
      value: "Отправить",
    },
  ],
  select: {
    id: "education",
    name: "education",
    option: [
      {
        value: "school",
        text: "Среднее образование",
      },
      {
        value: "college",
        "#text": "Средне-специальное",
      },
      {
        value: "not-high",
        text: "Незаконченное высшее",
      },
      {
        value: "high",
        text: "Высшее",
      },
    ],
  },
  textarea: {
    name: "comment",
    id: "comment-field",
    placeholder: "В свободной форме",
  },
};

let json = JSON.stringify(form);

// json в объект
let obj = JSON.parse(json);

console.log(obj);

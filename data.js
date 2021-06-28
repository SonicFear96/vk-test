const Data = {
  tag: "form",
  attributes: {
    class: "form",
  },
  children: [
    {
      tag: "label",
      children: "i18n_nameField",
      attributes: {
        class: "field__label",
        for: "name-user",
      },
    },
    {
      tag: "input",
      attributes: {
        class: "field__input",
        type: "text",
        id: "name-user",
        name: "name",
        placeholder: "Имя",
      },
    },
    {
      tag: "label",
      children: "i18n_surnameField",
      attributes: {
        class: "field__label",
        for: "surname-user",
      },
    },
    {
      tag: "input",
      attributes: {
        class: "field__input",
        type: "text",
        id: "surname-user",
        name: "surname",
        placeholder: "Фамилия",
      },
    },
    {
      tag: "label",
      children: "i18n_patronymicField",
      attributes: {
        class: "field__label",
        for: "patronymic-user",
      },
    },
    {
      tag: "input",
      attributes: {
        class: "field__input",
        type: "text",
        id: "patronymic-user",
        name: "patronymic",
        placeholder: "Отчество",
      },
    },
    {
      tag: "label",
      children: "i18n_dateBirthField",
      attributes: {
        class: "field__label",
        for: "date",
      },
    },
    {
      tag: "input",
      attributes: {
        class: "field__input field__input--date",
        type: "date",
        id: "date-birth",
        name: "date",
      },
    },
    {
      tag: "label",
      children: "i18n_telField",
      attributes: {
        class: "field__label field__label--tel",
        for: "tel",
      },
    },
    {
      tag: "input",
      attributes: {
        class: "field__input",
        type: "tel",
        id: "tel",
        name: "tel",
        pattern: "[0-9]{1}-[0-9]{3}-[0-9]{3}",
        placeholder: "В формате X-XXX-XXX",
      },
    },
    {
      tag: "label",
      children: "Ваш e-mail:",
      attributes: {
        class: "field__label field__label--mail",
        for: "mail",
      },
    },
    {
      tag: "input",
      attributes: {
        class: "field__input field__input--mail",
        type: "email",
        id: "mail-user",
        name: "mail",
        placeholder: "В формате email@example.com",
      },
    },
    {
      tag: "legend",
      children: "Как часто вы проверяете соц.сети?",
      attributes: {
        class: "legend__field",
      },
    },
    {
      tag: "ul",
      children: [
        {
          tag: "li",
          children: [
            {
              tag: "input",
              attributes: {
                class: "field__input field__input--radio",
                type: "radio",
                id: "questionChoice1",
                name: "question",
                value: "1",
              },
            },
            {
              tag: "label",
              children: "1 раз в день",
              attributes: {
                class: "field__label field__label--radio",
                for: "questionChoice1",
              },
            },
          ],
          attributes: {
            class: "input__item",
          },
        },
        {
          tag: "li",
          children: [
            {
              tag: "input",
              attributes: {
                class: "field__input field__input--radio",
                type: "radio",
                id: "questionChoice2",
                name: "question",
                value: "2",
              },
            },
            {
              tag: "label",
              children: "2 раза в день",
              attributes: {
                class: "field__label field__label--radio",
                for: "questionChoice2",
              },
            },
          ],
          attributes: {
            class: "input__item",
          },
        },
        {
          tag: "li",
          children: [
            {
              tag: "input",
              attributes: {
                class: "field__input field__input--radio",
                type: "radio",
                id: "questionChoice3",
                name: "question",
                value: "3",
              },
            },
            {
              tag: "label",
              children: "3 раза в день",
              attributes: {
                class: "field__label field__label--radio",
                for: "questionChoice3",
              },
            },
          ],
          attributes: {
            class: "input__item",
          },
        },
        {
          tag: "li",
          children: [
            {
              tag: "input",
              attributes: {
                class: "field__input field__input--radio",
                type: "radio",
                id: "questionChoice4",
                name: "question",
                value: "4",
              },
            },
            {
              tag: "label",
              children: "не зарегистрирован в социальных сетях",
              attributes: {
                class: "field__label field__label--radio",
                for: "questionChoice4",
              },
            },
          ],
          attributes: {
            class: "input__item",
          },
        },
      ],
      attributes: {
        class: "wrapper__radio",
      },
    },

    {
      tag: "label",
      children: "Уровень вашего образования:",
      attributes: {
        class: "field__label field__label--education",
        for: "education",
      },
    },
    {
      tag: "select",
      attributes: {
        class: "field__select",
        id: "education",
        name: "education",
      },
      children: [
        {
          tag: "option",
          children: "Среднее образование",
          attributes: {
            class: "field__option",
            value: "school",
          },
        },
        {
          tag: "option",
          children: "Средне-специальное",
          attributes: {
            class: "field__option",
            value: "college",
          },
        },
        {
          tag: "option",
          children: "Незаконченное высшее",
          attributes: {
            class: "field__option",
            value: "not-high",
          },
        },
        {
          tag: "option",
          children: "Высшее",
          attributes: {
            class: "field__option",
            value: "high",
          },
        },
      ],
    },
    {
      tag: "label",
      children: "Расскажите коротко о себе:",
      attributes: {
        class: "field__label field__label--textarea",
        for: "comment",
      },
    },
    {
      tag: "textarea",
      attributes: {
        class: "field__textarea",
        id: "comment-field",
        name: "comment",
        placeholder: "В свободной форме",
      },
    },
    {
      tag: "div",
      children: [
        {
          tag: "input",
          attributes: {
            class: "field__input field__input--checkbox",
            type: "checkbox",
            id: "security",
            name: "security",
            required: "true",
          },
        },
        {
          tag: "label",
          children:
            'Нажимая кнопку "Отправить" Вы даёте свое согласие на обработку персональных данных',
          attributes: {
            class: "field__label field__label--security",
            for: "personal-security",
          },
        },
      ],
      attributes: {
        class: "wrapper__security",
      },
    },
    {
      tag: "input",
      children: "Отправить",
      attributes: {
        class: "field__input field__input--button",
        type: "submit",
        value: "Отправить",
      },
    },
  ],
};

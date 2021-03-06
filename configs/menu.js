export const menu = [
    {
      id: "0",
      name: "main",
      component: "Main",
      path: "main",
      title: "Главная",
      icon: "",
      bc: true,
      show: true,
      activeLink: true,
      items: [],
      params: [],
    },
    {
      id: "1",
      name: "catalog",
      component: "Catalog",
      path: "catalog",
      title: "Каталог",
      icon: "",
      bc: true,
      show: true,
      activeLink: true,
      items: [],
      params: [],
    },
    {
      id: "2",
      name: "cooperation",
      component: "Cooperation",
      path: "cooperation",
      title: "Сотрудничество",
      icon: "",
      bc: true,
      show: true,
      activeLink: true,
      items: [],
      params: [],
    },
    {
      id: "3",
      name: "info",
      component: "Info",
      path: "info",
      title: "Инфо",
      icon: "",
      bc: true,
      show: true,
      activeLink: false,
      items: [
        {
          id: "3_0",
          name: "sertificates",
          component: "Sertificates",
          path: "sertificates",
          title: "Сертификаты",
          icon: "",
          bc: true,
          show: true,
          activeLink: true,
          items: [],
          params: ["id"],
        },
        {
          id: "3_1",
          name: "objects",
          component: "Objects",
          path: "objects",
          title: "Объекты",
          icon: "",
          bc: true,
          show: true,
          activeLink: true,
          items: [],
          params: [],
        },
      ],
      params: [],
    },
    {
      id: "4",
      name: "contacts",
      component: "Contacts",
      path: "contacts",
      title: "Контакты",
      icon: "",
      bc: false,
      show: true,
      activeLink: true,
      items: [],
      params: [],
    },
    {
      id: "5",
      name: "notfound",
      component: "NotFound",
      path: "404",
      title: "Страница не найдена",
      icon: "",
      bc: false,
      show: false,
      activeLink: true,
      items: [],
      params: [],
    },
  ];
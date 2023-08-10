export const routes = {
  menu: "/menu",
  customers: "/customers",
  customersMap: "/customers/map",
  customersAdd: "/customers/add",
  customersEditSearch: "/customers/edit/search",
  customerDeleteSearch: "/customer/delete/search",
  customerById: (id) => `/customers/${id}`,
  customerEditById: (id) => `/customers/edit/${id}`,
  customerDeletebyId: (id) => `/customers/delete/${id}`,
};

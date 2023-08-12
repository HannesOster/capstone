export const routes = {
  menu: "/menu",
  customers: "/customers",
  customersMap: "/customers/map",
  customersAdd: "/customers/add",
  customersEditSearch: "/customers/edit/search",
  customerDeleteSearch: "/customers/delete/search",
  customersApiRoute: "/api/customers",
  stockApiRoute: "/api/stock",
  customerById: (id) => `/customers/${id}`,
  customerEditById: (id) => `/customers/edit/${id}`,
  customerDeletebyId: (id) => `/customers/delete/${id}`,
  customersApiRouteById: (id) => `/api/customers/${id}`,
};

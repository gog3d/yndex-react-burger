import OrderDetails from "../components/order-details/order-details"

export const actionCreatorDescribeCallback = (actions, types) => 
  describe('Action creators', () => {
    it(`Auth action test ${types}`, () => {
      const expectedAction = {
        type: types,
      }
    expect(actions()).toEqual(expectedAction)
    })
  }
)

export const orderDetails = {
  success: true,
  order: 
    {
       number: 22223,
    }
};

export const orderDetailsItems = {
  success: true,
  data: [
    {
       "_id":"60666c42cc7b410027a1a9b1",
       "name":"Краторная булка N-200i",
       "type":"bun",
       "proteins":80,
       "fat":24,
       "carbohydrates":53,
       "calories":420,
       "price":1255,
       "image": "",
       "image_mobile":"",
       "image_large":"",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9b5",
       "name":"Говяжий метеорит (отбивная)",
       "type":"main",
       "proteins":800,
       "fat":800,
       "carbohydrates":300,
       "calories":2674,
       "price":3000,
       "image": "",
       "image_mobile":"",
       "image_large":"",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9b6",
       "name":"Биокотлета из марсианской Магнолии",
       "type":"main",
       "proteins":420,
       "fat":142,
       "carbohydrates":242,
       "calories":4242,
       "price":424,
       "image": "",
       "image_mobile":"",
       "image_large":"",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9b7",
       "name":"Соус Spicy-X",
       "type":"sauce",
       "proteins":30,
       "fat":20,
       "carbohydrates":40,
       "calories":30,
       "price":90,
       "image": "",
       "image_mobile":"",
       "image_large":"",
       "__v":0
    }
 ],
}

export const burgerIngredients = {
  success: true,
  data: [
    {
       "_id":"60666c42cc7b410027a1a9b1",
       "name":"Краторная булка N-200i",
       "type":"bun",
       "proteins":80,
       "fat":24,
       "carbohydrates":53,
       "calories":420,
       "price":1255,
       "image": "",
       "image_mobile":"",
       "image_large":"",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9b5",
       "name":"Говяжий метеорит (отбивная)",
       "type":"main",
       "proteins":800,
       "fat":800,
       "carbohydrates":300,
       "calories":2674,
       "price":3000,
       "image": "",
       "image_mobile":"",
       "image_large":"",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9b6",
       "name":"Биокотлета из марсианской Магнолии",
       "type":"main",
       "proteins":420,
       "fat":142,
       "carbohydrates":242,
       "calories":4242,
       "price":424,
       "image": "",
       "image_mobile":"",
       "image_large":"",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9b7",
       "name":"Соус Spicy-X",
       "type":"sauce",
       "proteins":30,
       "fat":20,
       "carbohydrates":40,
       "calories":30,
       "price":90,
       "image": "",
       "image_mobile":"",
       "image_large":"",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9b4",
       "name":"Мясо бессмертных моллюсков Protostomia",
       "type":"main",
       "proteins":433,
       "fat":244,
       "carbohydrates":33,
       "calories":420,
       "price":1337,
       "image": "",
       "image_mobile":"",
       "image_large":"",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9b9",
       "name":"Соус традиционный галактический",
       "type":"sauce",
       "proteins":42,
       "fat":24,
       "carbohydrates":42,
       "calories":99,
       "price":15,
       "image": "",
       "image_mobile":"",
       "image_large":"",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9b8",
       "name":"Соус фирменный Space Sauce",
       "type":"sauce",
       "proteins":50,
       "fat":22,
       "carbohydrates":11,
       "calories":14,
       "price":80,
       "image": "",
       "image_mobile":"",
       "image_large":"",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9bc",
       "name":"Плоды Фалленианского дерева",
       "type":"main",
       "proteins":20,
       "fat":5,
       "carbohydrates":55,
       "calories":77,
       "price":874,
       "image": "",
       "image_mobile":"",
       "image_large":"",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9bb",
       "name":"Хрустящие минеральные кольца",
       "type":"main",
       "proteins":808,
       "fat":689,
       "carbohydrates":609,
       "calories":986,
       "price":300,
       "image": "",
       "image_mobile":"",
       "image_large":"",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9ba",
       "name":"Соус с шипами Антарианского плоскоходца",
       "type":"sauce",
       "proteins":101,
       "fat":99,
       "carbohydrates":100,
       "calories":100,
       "price":88,
       "image": "",
       "image_mobile":"",
       "image_large":"",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9bd",
       "name":"Кристаллы марсианских альфа-сахаридов",
       "type":"main",
       "proteins":234,
       "fat":432,
       "carbohydrates":111,
       "calories":189,
       "price":762,
       "image": "",
       "image_mobile":"",
       "image_large":"",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9be",
       "name":"Мини-салат Экзо-Плантаго",
       "type":"main",
       "proteins":1,
       "fat":2,
       "carbohydrates":3,
       "calories":6,
       "price":4400,
       "image": "",
       "image_mobile":"",
       "image_large":"",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9b3",
       "name":"Филе Люминесцентного тетраодонтимформа",
       "type":"main",
       "proteins":44,
       "fat":26,
       "carbohydrates":85,
       "calories":643,
       "price":988,
       "image": "",
       "image_mobile":"",
       "image_large":"",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9bf",
       "name":"Сыр с астероидной плесенью",
       "type":"main",
       "proteins":84,
       "fat":48,
       "carbohydrates":420,
       "calories":3377,
       "price":4142,
       "image": "",
       "image_mobile":"",
       "image_large":"",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9b2",
       "name":"Флюоресцентная булка R2-D3",
       "type":"bun",
       "proteins":44,
       "fat":26,
       "carbohydrates":85,
       "calories":643,
       "price":988,
       "image": "",
       "image_mobile":"",
       "image_large":"",
       "__v":0
    }
 ],
}
export const items = orderDetailsItems.data;
export const bun = items.find(e => e.type === 'bun');
//export const item = items.find(e => e.type !== 'bun');
export const item =   {
  "_id":"60666c42cc7b410027a1a9b5",
  "name":"Говяжий метеорит (отбивная)",
  "type":"main",
  "proteins":800,
  "fat":800,
  "carbohydrates":300,
  "calories":2674,
  "price":3000,
  "image": "",
  "image_mobile":"",
  "image_large":"",
  "__v":0
};
export const ingredients = items.filter(e => e.type !== 'bun');
export const deleteIndexIngredients = [
  {
    "_id":"60666c42cc7b410027a1a9b5",
    "name":"Говяжий метеорит (отбивная)",
    "type":"main",
    "proteins":800,
    "fat":800,
    "carbohydrates":300,
    "calories":2674,
    "price":3000,
    "image": "",
    "image_mobile":"",
    "image_large":"",
    "__v":0
  },
  {
    "_id":"60666c42cc7b410027a1a9b7",
    "name":"Соус Spicy-X",
    "type":"sauce",
    "proteins":30,
    "fat":20,
    "carbohydrates":40,
    "calories":30,
    "price":90,
    "image": "",
    "image_mobile":"",
    "image_large":"",
    "__v":0
  }
];
export const ingredientsWithMain = [
  {
    "_id":"60666c42cc7b410027a1a9b5",
    "name":"Говяжий метеорит (отбивная)",
    "type":"main",
    "proteins":800,
    "fat":800,
    "carbohydrates":300,
    "calories":2674,
    "price":3000,
    "image": "",
    "image_mobile":"",
    "image_large":"",
    "__v":0
 }
];


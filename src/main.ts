import './scss/styles.scss';

// импорт классов и массив товаров
import { Products } from './components/models/Products';
import { Basket } from './components/models/Basket';
import { Buyer } from './components/models/Buyer';
import { apiProducts } from './utils/data';
import { Api } from './components/base/Api';
import { StallAPI } from './components/StallAPI';
import { IProduct } from './types';
import { API_URL } from './utils/constants';

// Создаем экземпляры всех трёх классов
const products = new Products();
const basket = new Basket();
const buyer = new Buyer();

// Проверка работы методов массива товаров
products.setItems(apiProducts.items);                                        
console.log('массив товаров из каталога:', products.getItems());             
const productId = apiProducts.items[0].id;                                     
console.log(`Товар с id=${productId}:`, products.getItemsById(productId));    

products.setSelectedItem(apiProducts.items[1]);                              
console.log('Выбранный товар:', products.getSelectedItem());                 

// Проверка работы методов корзины
basket.addItem(apiProducts.items[0]);                                            
basket.addItem(apiProducts.items[1]);
console.log('Товары в корзине после добавления:', basket.getItems());

console.log('Есть ли товар с id=1 в корзине?', basket.hasItem('1'));             
console.log('Общая стоимость корзины:', basket.getTotalPrice());                 
console.log('Количество товаров в корзине:', basket.getItemCount());             

basket.removeItem('1');                                                          
console.log('Корзина после удаления товара с id=1:', basket.getItems());

basket.clear();                                                                  
console.log('Корзина после очистки:', basket.getItems());

// Проверка работы методов покупателя
buyer.setBuyerData({                                                           
  payment: 'card',
  address: 'Москва',
  phone: '+79876543210',
  email: 'vasya@mail.ru',
});

console.log('Данные покупателя:', buyer.getBuyerData());                       
console.log('Данные покупателя валидны?', buyer.validate());                   

buyer.clear();
console.log('Данные покупателя после очистки:', buyer.getBuyerData());         
console.log('Данные покупателя валидны после очистки?', buyer.validate());

// Работа с API

// Создаём экземпляр API
const api = new Api(API_URL);

// Создаём экземпляр LarekAPI
const shopApi = new StallAPI(api);

// Получаем товары с сервера и сохраняем в модель
shopApi.getProducts()
  .then((items: IProduct[]) => {
    console.log('Товары с сервера:', items);

    products.setItems(items);
    console.log('Каталог из модели после загрузки с сервера:', products.getItems());
  })
  .catch((err: Error) => {
    console.error('Ошибка при загрузке товаров:', err);
  });
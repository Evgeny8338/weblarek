import { IProduct } from "../../types";

export class Basket {
  private items: IProduct[] = [];
  
  // Получение массива товаров, которые находятся в корзине
  getItems(): IProduct[] {
    return this.items;
  }

  // Добавление товара в корзину
  addItem(product: IProduct): void {
    this.items.push(product);
  }

  // Удаление товара из корзины
  removeItem(id: string): void {
    this.items = this.items.filter(item => item.id !== id);
}

  // Очистка корзины
  clear(): void {
    this.items = [];
  }

  // Стоимость всех товаров в корзине
  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + (item.price ?? 0), 0);
}
  
  // Количество товаров в корзине
  getItemCount(): number {
    return this.items.length;
  }

  // Наличие товара в корзине
  hasItem(id: string): boolean {
    return this.items.some(function(item) {
      return item.id === id;
    });
  }
}

import { IProduct } from "../../types";

export class Products {
  private items: IProduct[] = [];
  private selectedItem: IProduct | null = null;

  // Cохранение массив товаров
  setItems(items: IProduct[]): void {
    this.items = items;
  }

  // Получение массив товаров
  getItems(): IProduct[] {
    return this.items
  }

  // Получение один товар по его id
  getItemsById(id: string): IProduct | undefined {
    return this.items.find(item => item.id === id);
  }

 // Сохранение товар для подробного отображения
  setSelectedItem(item: IProduct): void {
    this.selectedItem = item;
  }

// Солучение товар для подробного отображения
  getSelectedItem(): IProduct | null {
    return this.selectedItem;
  }
}

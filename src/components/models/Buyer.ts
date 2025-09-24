import { IBuyer, TPayment } from "../../types";

export class Buyer {
  private payment: TPayment | null = null;
  private address: string = '';
  private phone: string = '';
  private email: string = '';

  // Сохранение данных в модели
  setBuyerData(data: IBuyer): void {
    this.payment = data.payment;
    this.address = data.address;
    this.phone = data.phone;
    this.email = data.email;
  }

  // Получение данных покупателя
  getBuyerData(): IBuyer {
    return {
      payment: this.payment as TPayment,
      address: this.address,
      phone: this.phone,
      email: this.email,
    };
  }

  // Очистка данных покупателя
  clear(): void {
    this.payment = null;
    this.address = '';
    this.phone = '';
    this.email = '';
  }

  // Проверяем заполненность каждого поля 
  validate(): { isValid: boolean; errors: Partial<IBuyer> } {
    const errors: Partial<IBuyer> = {};

   if (!this.email) {
      errors.email = `Email не заполнен`;
    }

    if (!this.phone) {
      errors.phone =`Телефон не заполнен`;
    }

    if (!this.address) {
      errors.address =`Адрес не заполнен`;
    }
    

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  }
}
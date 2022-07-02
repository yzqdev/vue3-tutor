import { defineStore } from "pinia";
export interface Dog {
  name: string;
  price: number;
}
export const dogStore = defineStore({
  id: "dogs",
  state: () => {
    return {
      dogs: [
        { name: "鼠标", price: 20 },
        { name: "键盘", price: 40 },
        { name: "耳机", price: 60 },
        { name: "显示屏", price: 80 },
      ],
    };
  },
  getters: {
    saleDogs: (state) => {
      return state.dogs.map((dog) => {
        return {
          name: dog.name,
          price: dog.price / 2,
        };
      });
    },
  },
  actions: {
    minusPrice() {
      this.dogs.forEach((dog) => {
        dog.price -= 2;
      });
    },
    plusPrice() {
      this.dogs.forEach((dog) => {
        dog.price += 2;
      });
    },
    minusPriceAsync(payload: Dog) {
      setTimeout(() => {
        this.minusPrice();
      }, 2000);
    },
  },
});

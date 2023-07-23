import http from "@/utils/request/http";
import { Pet } from "@/type/storeTypes";

export const petApi = {
  searchAllPetApi(): Promise<Pet[]> {
    return http.get("/pet/getAll");
  },
  addPetApi(data: Partial<Pet>): Promise<any> {
    return http.post("/pet/addPet", data);
  },
  deletePetApi(id: string): Promise<any> {
    return http.delete(`/pet/delPet/${id}`);
  },
  updatePetApi(data: Partial<Pet>): Promise<any> {
    return http.post("/pet/updatePet", data);
  },
  genRandomPetApi(): Promise<any> {
    return http.get("/pet/genPet");
  },
  deleteAllPetApi() {
    return http.delete("/pet/delAll");
  },
};

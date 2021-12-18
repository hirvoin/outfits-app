type GarmentCategory = "outerwear" | "top" | "bottom" | "footwear";

export interface Garment {
  id: number;
  userId: number;
  title: string;
  isFavorited: boolean;
  color: string;
  imageUri: string;
  category?: GarmentCategory;
}

const createGarment = (garment?: Partial<Garment>): Garment => ({
  id: 1,
  userId: 1,
  title: "Black t-shirt",
  isFavorited: false,
  color: "black",
  category: "top",
  imageUri:
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff3%2F84%2Ff3847d428696de689f327a6f9a311f2ff9b59fcf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
  ...garment,
});

const mockShirt = createGarment();
const mockJacket = createGarment({
  id: 2,
  title: "Green coat",
  color: "green",
  category: "outerwear",
  imageUri:
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdd%2Ff7%2Fddf7e435eed0e0327d684d61a1f3e1e9d30c6920.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_bomberjackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
});
const mockJeans = createGarment({
  id: 3,
  title: "Blue jeans",
  color: "blue",
  category: "bottom",
  imageUri:
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F40%2Fcf%2F40cf42a76cf1f0ee44baa98d75acc836ef9d85d5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jeans_slim%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
});
const mockShoes = createGarment({
  id: 4,
  title: "Black shoes",
  color: "black",
  category: "footwear",
  imageUri:
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff1%2F11%2Ff1118c72023454685325ab65d68f48e728a08aaf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shoes_sneakers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
});

const mockOuterwear = [mockJacket];
const mockTops = [mockShirt];
const mockBottoms = [mockJeans];
const mockFootwear = [mockShoes];
export const mockGarments = [mockJacket, mockShirt, mockJeans, mockShoes];

export function mockApiCall<T>(
  success: boolean,
  data: T,
  timeout: number,
): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(data);
      } else {
        reject(new Error("ERROR"));
      }
    }, timeout);
  });
}

const getOuterwear = async (): Promise<Garment[]> => {
  const data = await mockApiCall(true, mockOuterwear, 1000);
  return data;
};

const getTops = async (): Promise<Garment[]> => {
  const data = await mockApiCall(true, mockTops, 1000);
  return data;
};

const getBottoms = async (): Promise<Garment[]> => {
  const data = await mockApiCall(true, mockBottoms, 1000);
  return data;
};

const getFootwear = async (): Promise<Garment[]> => {
  const data = await mockApiCall(true, mockFootwear, 1000);
  return data;
};

const getAll = async (): Promise<Garment[]> => {
  const data = await mockApiCall(true, mockGarments, 1000);
  return data;
};

export default {
  getOuterwear,
  getTops,
  getAll,
  getBottoms,
  getFootwear,
};

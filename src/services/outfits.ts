import { Garment, mockApiCall, mockGarments } from "./garments";

export interface Outfit {
  id: string;
  userId: number;
  date: string;
  garments: Garment[];
}

export const createOutfit = (outfit?: Partial<Outfit>): Outfit => ({
  id: "1",
  userId: 1,
  date: new Date().toISOString(),
  garments: mockGarments,
  ...outfit,
});

const mockOutfits = [createOutfit()];

const getAll = async (): Promise<Outfit[]> => {
  const data = await mockApiCall(true, mockOutfits, 1000);
  return data;
};

export default {
  getAll,
};

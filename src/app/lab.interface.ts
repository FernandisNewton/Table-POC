export interface Chem7 {
  sampleCollectionDate: string | null;
  Sodium: number | null;
  Chloride: number | null;
  BUN: number | null;
  Glucose: number | null;
  Potassium: number | null;
  Bicarb: number | null;
  Creatinine: number | null;
  eGFR: number | null;
}

export interface ILab {
  reports: {
    chem7: Chem7;
  };
}

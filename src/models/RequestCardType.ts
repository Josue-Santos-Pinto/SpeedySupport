export type RequestCardType = {
  id: string;
  title: string;
  property: string;
  sector: string;
  urgency: 0 | 1 | 2;
  body: string;
};

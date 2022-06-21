export type BoundedContext = {
  simpleName: string;
  canonicalName: string;
  description: string;
  packageName: string;
  coreConcepts: Concept[];
  domainCommands: Concept[];
  domainEvents: Concept[];
  aggregates: Concept[];
  valueObject: Concept[];
};

export type Concept = {
  description: string;
  simpleName: string;
  canonicalName: string;
  type: string;
  interactsWith: {
    simpleName: string;
    canonicalName: string;
  };
  errors: string[];
};

type CandyData = BoundedContext[];

export default CandyData;

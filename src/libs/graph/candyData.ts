export type DomainContext = {
  simpleName: string;
  canonicalName: string;
  description: string;
  packageName: string;
  coreConcepts: Concept[];
  valueObjects: Concept[];
};

export type BoundedContext = DomainContext & {
  domainCommands: Concept[];
  domainEvents: Concept[];
  aggregates: Concept[];
};

export type SharedKernel = DomainContext & {
  relations: string[];
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

type CandyData = BoundedContext[] & SharedKernel[];

export default CandyData;

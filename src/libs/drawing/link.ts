export enum LinkType {
  Simple,
  Arrow,
}

export default interface Link {
  source: string;
  target: string;
  group: number;
  type: LinkType;
}

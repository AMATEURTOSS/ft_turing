export type Description = {
  name: string;
  alphabet: string[];
  blank: string;
  states: string[];
  initial: string;
  finals: string[];
  transitions: Record<
    string,
    Array<{
      read: string;
      toState: string;
      write: string;
      action: string;
    }>
  >;
};

export type ValueTypeFilter<
  T extends object,
  ValueType,
  Positive extends boolean
> = {
  [Key in keyof T]-?: T[Key] extends ValueType
    ? Positive extends true
      ? Key
      : never
    : Positive extends true
    ? never
    : Key;
}[keyof T];

export type PickByValueType<T extends object, ValueType> = Pick<
  T,
  ValueTypeFilter<T, ValueType, true>
>;

export type OmitByValueType<T extends object, ValueType> = Pick<
  T,
  ValueTypeFilter<T, ValueType, false>
>;

const serializeBigInt = (key: string, value: any) => {
  return typeof value === 'bigint' ? Number(value.toString()) : value
}

export const serializeFields = (data: any) => {
  return JSON.parse(JSON.stringify(data, serializeBigInt))
}

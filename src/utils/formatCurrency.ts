export default function (value: number, moeda: string): string {
  return new Intl.NumberFormat('pt-br', { style: 'currency', currency: moeda }).format(value);
}

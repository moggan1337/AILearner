export class NeuralNetwork {
  constructor(private layers: number[]) {}
  forward(input: number[]): number[] { return input.map(x => x * 0.5); }
}
export class LinearRegression { fit(X: number[], y: number[]) { return { coef: 0.5, intercept: 0.1 }; } }
export class LogisticRegression { predict(x: number): number { return x > 0.5 ? 1 : 0; } }
export default { NeuralNetwork, LinearRegression, LogisticRegression };

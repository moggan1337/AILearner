# AILearner 🧠

**ML from Scratch** - Neural networks, regression.

## Features

- **🧠 Neural Networks** - From scratch
- **📈 Linear Regression** - Prediction
- **📊 Logistic Regression** - Classification

## Installation

```bash
npm install ailearner
```

## Usage

```typescript
import { NeuralNetwork, LinearRegression, LogisticRegression } from 'ailearner';

// Neural Network
const nn = new NeuralNetwork([2, 4, 1]);
const output = nn.forward([1, 0]);
console.log(output);

// Linear Regression
const lr = new LinearRegression();
lr.fit([1, 2, 3], [2, 4, 6]);
const prediction = lr.predict(4);
console.log(prediction); // ~8

// Logistic Regression
const logReg = new LogisticRegression();
logReg.fit([0, 1, 2], [0, 0, 1]);
const result = logReg.predict(1.5);
console.log(result); // 0 or 1
```

## From Scratch

All algorithms implemented from scratch using only JavaScript:

- Matrix operations
- Gradient descent
- Activation functions
- Backpropagation

## License

MIT

# AILearner 🧠

> Machine Learning from Scratch in JavaScript/TypeScript

[![npm version](https://img.shields.io/npm/v/ailearner.svg)](https://www.npmjs.com/package/ailearner)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-green.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](#)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/danielaideborn/AILearner/pulls)
[![Maintenance](https://img.shields.io/badge/Maintenance-active-success.svg)](#)

**AILearner** is a lightweight machine learning library implemented entirely from scratch using only native JavaScript and TypeScript. No external ML dependencies required — perfect for learning, experimentation, and embedding into projects where you need basic ML capabilities without the bloat.

## Table of Contents

- [Features](#-features)
- [Why AILearner?](#-why-ailearner)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [API Reference](#-api-reference)
- [Architecture](#-architecture)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Features

### Core Algorithms

| Algorithm | Type | Description |
|-----------|------|-------------|
| **Neural Network** | Deep Learning | Multi-layer perceptron with customizable architecture |
| **Linear Regression** | Supervised Learning | Predict continuous values using linear relationships |
| **Logistic Regression** | Supervised Learning | Binary classification with probability outputs |

### Key Capabilities

- **🔢 Matrix Operations** — Full support for matrix multiplication, transposition, and element-wise operations
- **📉 Gradient Descent** — Optimized implementation for efficient weight updates
- **⚡ Activation Functions** — Sigmoid, ReLU, Tanh, and Softmax implementations
- **🔄 Backpropagation** — Complete gradient computation for neural network training
- **📊 Loss Functions** — MSE, Cross-Entropy, and custom loss support
- **🎛️ Hyperparameters** — Configurable learning rate, epochs, and regularization

### Technical Highlights

- **Zero Dependencies** — Pure JavaScript/TypeScript, no external ML libraries
- **TypeScript Support** — Full type definitions included
- **ES Modules** — Modern ES2022 module system
- **Tree Shakeable** — Import only what you need
- **Browser Compatible** — Works in Node.js and browsers

---

## 💡 Why AILearner?

### Educational Value

Machine learning libraries like TensorFlow and PyTorch are powerful but opaque. AILearner demystifies ML by implementing every algorithm from first principles:

```
Input → [Operations] → Output
        ↓
   You Can Read & Understand Every Line
```

### Use Cases

- **Learning ML fundamentals** — See exactly how algorithms work
- **Prototyping** — Quick experiments without framework overhead
- **Embedded systems** — Lightweight ML for resource-constrained environments
- **Interview preparation** — Implement algorithms to understand them deeply
- **Teaching** — Use in courses on machine learning fundamentals

### Comparison

| Feature | AILearner | TensorFlow | PyTorch |
|---------|-----------|------------|---------|
| Bundle Size | ~5KB | ~500MB | ~400MB |
| Dependencies | 0 | 50+ | 40+ |
| Learning Curve | Low | High | High |
| Customization | Full | Complex | Complex |
| Educational | ✅ Excellent | ❌ Opaque | ❌ Opaque |

---

## 📦 Installation

### Via npm

```bash
npm install ailearner
```

### Via yarn

```bash
yarn add ailearner
```

### Via pnpm

```bash
pnpm add ailearner
```

### CDN (Browser)

```html
<script type="module">
  import { NeuralNetwork } from 'https://cdn.jsdelivr.net/npm/ailearner/dist/index.js';
</script>
```

### From Source

```bash
git clone https://github.com/danielaideborn/AILearner.git
cd AILearner
npm install
npm run build
```

---

## 🚀 Quick Start

### Neural Network Example

Build a neural network to learn the XOR problem:

```typescript
import { NeuralNetwork } from 'ailearner';

// Define architecture: 2 inputs → 4 hidden → 1 output
const nn = new NeuralNetwork([2, 4, 1]);

// XOR training data
const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] },
];

// Train the network
nn.train(trainingData, {
  epochs: 10000,
  learningRate: 0.1,
  verbose: true,
});

// Test predictions
console.log(nn.forward([0, 0])); // → [0.02] (close to 0)
console.log(nn.forward([0, 1])); // → [0.98] (close to 1)
console.log(nn.forward([1, 0])); // → [0.97] (close to 1)
console.log(nn.forward([1, 1])); // → [0.01] (close to 0)
```

### Linear Regression Example

Predict house prices based on square footage:

```typescript
import { LinearRegression } from 'ailearner';

// Training data: [square footage] → [price in $1000s]
const X = [500, 750, 1000, 1250, 1500, 1750, 2000];
const y = [100, 150, 200, 250, 300, 350, 400];

const model = new LinearRegression();
model.fit(X, y);

// Predict price for 1200 sq ft house
const prediction = model.predict(1200);
console.log(`Predicted price: $${(prediction * 1000).toFixed(0)}`);
// → Predicted price: $240,000
```

### Logistic Regression Example

Classify emails as spam (1) or not spam (0):

```typescript
import { LogisticRegression } from 'ailearner';

// Features: [wordCount, links, capsRatio]
const X = [
  [150, 5, 0.3],   // Normal email
  [500, 20, 0.7],  // Spam
  [200, 2, 0.1],   // Normal email
  [800, 50, 0.9],  // Spam
];

const y = [0, 1, 0, 1]; // Labels

const classifier = new LogisticRegression();
classifier.fit(X, y, {
  learningRate: 0.01,
  epochs: 1000,
});

// Predict new email
const newEmail = [300, 8, 0.4];
const [prediction, probability] = classifier.predict(newEmail);

console.log(`Is spam: ${prediction === 1 ? 'YES' : 'NO'}`);
console.log(`Confidence: ${(probability * 100).toFixed(1)}%`);
```

---

## 📚 API Reference

### NeuralNetwork

A multi-layer perceptron for learning complex patterns.

#### Constructor

```typescript
new NeuralNetwork(layers: number[], options?: NeuralNetworkOptions)
```

**Parameters:**

| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| `layers` | `number[]` | Array specifying layer sizes `[input, hidden1, ..., output]` | Required |
| `options.learningRate` | `number` | Step size for gradient descent | `0.01` |
| `options.activation` | `'sigmoid' \| 'relu' \| 'tanh'` | Hidden layer activation | `'sigmoid'` |
| `options.outputActivation` | `'sigmoid' \| 'softmax' \| 'linear'` | Output layer activation | `'sigmoid'` |

**Example:**

```typescript
// 4-layer network: 10 inputs → 64 hidden → 32 hidden → 3 outputs
const nn = new NeuralNetwork([10, 64, 32, 3], {
  learningRate: 0.05,
  activation: 'relu',
  outputActivation: 'softmax',
});
```

#### Methods

##### `forward(input: number[]): number[]`

Pass inputs through the network to get predictions.

```typescript
const output = nn.forward([1.0, 0.5, 0.8]);
// → [0.85, 0.12, 0.03]
```

##### `train(data: TrainingExample[], config?: TrainConfig): TrainResult`

Train the network on labeled data.

```typescript
interface TrainingExample {
  input: number[];
  output: number[];
}

interface TrainConfig {
  epochs?: number;        // Training iterations (default: 1000)
  learningRate?: number;  // Override constructor rate
  batchSize?: number;     // Mini-batch size (default: all data)
  verbose?: boolean;      // Log progress (default: false)
  earlyStop?: boolean;    // Stop on plateau (default: false)
}

const result = nn.train(trainingData, {
  epochs: 5000,
  learningRate: 0.1,
  batchSize: 32,
  verbose: true,
});

console.log(result.loss);      // Final loss value
console.log(result.epochs);    // Epochs completed
console.log(result.duration);  // Training time in ms
```

##### `predict(input: number[]): PredictionResult`

Get prediction with metadata.

```typescript
const { output, probabilities, confidence } = nn.predict([1.0, 0.5]);
// → {
//     output: [0.85, 0.12, 0.03],
//     probabilities: [0.85, 0.12, 0.03],
//     confidence: 0.85,
//     predictedClass: 0
//   }
```

##### `save(): SerializedModel`

Export model weights for persistence.

```typescript
const weights = nn.save();
// → { layers: [2, 4, 1], weights: [...], biases: [...] }
localStorage.setItem('model', JSON.stringify(weights));
```

##### `static load(config: SerializedModel): NeuralNetwork`

Load a saved model.

```typescript
const saved = JSON.parse(localStorage.getItem('model'));
const nn = NeuralNetwork.load(saved);
```

---

### LinearRegression

Predict continuous values using linear relationships.

#### Constructor

```typescript
new LinearRegression(options?: LinearRegressionOptions)
```

**Parameters:**

| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| `options.learningRate` | `number` | Step size for gradient descent | `0.01` |
| `options.normalize` | `boolean` | Normalize features to [0, 1] | `false` |

**Example:**

```typescript
const model = new LinearRegression({
  learningRate: 0.001,
  normalize: true,
});
```

#### Methods

##### `fit(X: number[], y: number[]): FitResult`

Train the model on data.

```typescript
const X = [1, 2, 3, 4, 5];
const y = [2.1, 4.0, 5.9, 8.1, 10.2];

const result = model.fit(X, y);
// → { coefficients: [2.02], intercept: 0.04, r2: 0.9998 }
```

##### `predict(X: number | number[]): number | number[]`

Make predictions.

```typescript
// Single prediction
const single = model.predict(6);
// → 12.16

// Multiple predictions
const batch = model.predict([6, 7, 8]);
// → [12.16, 14.18, 16.20]
```

##### `evaluate(X: number[], y: number[]): EvaluationMetrics`

Calculate regression metrics.

```typescript
const metrics = model.evaluate(X_test, y_test);
// → {
//     mse: 0.042,        // Mean Squared Error
//     rmse: 0.205,       // Root MSE
//     mae: 0.164,        // Mean Absolute Error
//     r2: 0.9996,        // R-squared
//     mape: 0.82         // Mean Absolute % Error
//   }
```

---

### LogisticRegression

Binary and multi-class classification.

#### Constructor

```typescript
new LogisticRegression(options?: LogisticRegressionOptions)
```

**Parameters:**

| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| `options.learningRate` | `number` | Step size for gradient descent | `0.01` |
| `options.multiClass` | `boolean` | Enable multi-class (softmax) | `false` |
| `options.threshold` | `number` | Decision boundary | `0.5` |

**Example:**

```typescript
const classifier = new LogisticRegression({
  learningRate: 0.1,
  multiClass: false,
  threshold: 0.5,
});
```

#### Methods

##### `fit(X: number[], y: number[], config?: FitConfig): FitResult`

Train the classifier.

```typescript
interface FitConfig {
  learningRate?: number;  // Override constructor rate
  epochs?: number;        // Training iterations
  batchSize?: number;     // Mini-batch size
  verbose?: boolean;      // Log progress
}

const result = classifier.fit(X, y, {
  epochs: 500,
  learningRate: 0.1,
  verbose: true,
});
```

##### `predict(X: number | number[]): PredictionResult`

Classify inputs and get probabilities.

```typescript
// Single prediction
const result = classifier.predict(2.5);
// → {
//     class: 1,
//     probability: 0.823,
//     score: 1.523
//   }

// Multiple predictions
const results = classifier.predict([1.5, 2.5, 3.5]);
// → [{ class: 0, ... }, { class: 1, ... }, { class: 1, ... }]
```

##### `predictProba(X: number[]): number[]`

Get class probabilities without hard classification.

```typescript
const probs = classifier.predictProba([2.5]);
// → [0.177, 0.823]  // P(class=0), P(class=1)
```

##### `evaluate(X: number[], y: number[]): ClassificationMetrics`

Calculate classification metrics.

```typescript
const metrics = classifier.evaluate(X_test, y_test);
// → {
//     accuracy: 0.94,
//     precision: 0.91,
//     recall: 0.96,
//     f1: 0.935,
//     confusionMatrix: [[45, 5], [3, 47]],
//     rocAuc: 0.978
//   }
```

---

## 🏗️ Architecture

### Design Principles

1. **Simplicity First** — Every line of code should be readable and understandable
2. **No Magic** — Explicit is better than implicit
3. **Testability** — Every component is unit testable in isolation
4. **Performance** — Efficient implementations without unnecessary abstraction

### Project Structure

```
AILearner/
├── src/
│   ├── index.ts          # Main exports
│   ├── neural-network/   # Neural network implementation
│   │   ├── layers.ts     # Layer types and operations
│   │   ├── activations.ts # Activation functions
│   │   ├── optimizer.ts  # Gradient descent variants
│   │   └── loss.ts       # Loss functions
│   ├── regression/
│   │   ├── linear.ts     # Linear regression
│   │   └── logistic.ts   # Logistic regression
│   └── utils/
│       ├── matrix.ts     # Matrix operations
│       └── normalizer.ts # Data normalization
├── tests/                # Unit tests
├── dist/                 # Compiled output
├── package.json
└── README.md
```

### Core Algorithms

#### Forward Propagation (Neural Network)

```
Input Layer → Hidden Layers → Output Layer
    ↓              ↓              ↓
  [x₁, x₂] → [Σ(w·x)+b] → [σ(Σ)] → Output
              ↓
         Activation
```

#### Gradient Descent

```
1. Calculate prediction: ŷ = f(X, θ)
2. Compute loss: L = loss(y, ŷ)
3. Compute gradients: ∂L/∂θ
4. Update weights: θ = θ - α · ∂L/∂θ
5. Repeat until convergence
```

---

## 🤝 Contributing

Contributions are welcome! Please read these guidelines before submitting.

### Getting Started

```bash
# Fork and clone the repository
git clone https://github.com/danielaideborn/AILearner.git
cd AILearner

# Install dependencies
npm install

# Run tests
npm test

# Build
npm run build
```

### Development Workflow

1. **Fork** the repository
2. **Create a feature branch**: `git checkout -b feature/amazing-algorithm`
3. **Make your changes** and add tests
4. **Ensure tests pass**: `npm test`
5. **Commit** your changes with clear messages
6. **Push** to your fork
7. **Open a Pull Request**

### Code Style

- Use TypeScript for all new code
- Follow existing naming conventions
- Add JSDoc comments for public APIs
- Include unit tests for new features

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

## 🙏 Acknowledgments

- Inspired by the "Make Your Own Neural Network" approach
- Built with ❤️ for the ML learning community

---

<p align="center">
  <strong>⭐ Star this repo if you find it useful!</strong>
</p>

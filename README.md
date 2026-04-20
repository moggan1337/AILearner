# AILearner - Interactive AI Learning Platform

<p align="center">
  <img src="assets/logo.png" alt="AILearner Logo" width="200"/>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#api-reference">API</a> •
  <a href="#configuration">Configuration</a> •
  <a href="#troubleshooting">Troubleshooting</a>
</p>

---

## 🎯 Overview

AILearner is a comprehensive, interactive platform designed to master Artificial Intelligence concepts through hands-on tutorials, coding exercises, and adaptive quizzes. Whether you're a beginner exploring machine learning fundamentals or an advanced practitioner diving into transformer architectures, AILearner provides a structured learning path with real-time feedback and progress tracking.

### Key Highlights

- **Multi-Domain Coverage**: Machine Learning, Deep Learning, Natural Language Processing, and Computer Vision
- **Interactive Learning**: Code-along exercises with automatic grading
- **Adaptive Quizzes**: AI-powered difficulty adjustment based on performance
- **Progress Analytics**: Detailed insights into learning patterns and mastery levels
- **Modular Architecture**: Easy extensibility for new courses and topics
- **Offline Support**: Download courses for learning without internet connectivity

---

## ✨ Features

### 1. Interactive Tutorials

Structured lessons with:
- **Theory Segments**: Concise explanations with visualizations
- **Code Examples**: Runnable Python/Julia snippets
- **Interactive Notebooks**: Jupyter-style inline execution
- **Key Takeaways**: Summary points for quick revision

### 2. Hands-On Exercises

Practice problems featuring:
- **Guided Coding**: Step-by-step implementation challenges
- **Automated Testing**: Instant feedback on submissions
- **Hint System**: Progressive hints to prevent frustration
- **Solution Review**: Compare with expert implementations

### 3. Adaptive Quizzes

Intelligent assessment system:
- **Concept Validation**: Test understanding at multiple levels
- **Difficulty Scaling**: Questions adjust based on performance
- **Spaced Repetition**: Optimal timing for review sessions
- **Detailed Explanations**: Every answer includes rationale

### 4. Progress Tracking

Comprehensive analytics:
- **Course Completion**: Visual progress indicators
- **Skill Assessment**: Radar charts for competency mapping
- **Time Analytics**: Learning time distribution
- **Streak System**: Gamified daily engagement
- **Achievement Badges**: Milestone celebrations

### 5. Topic Coverage

#### Machine Learning (ML)
```
├── Supervised Learning
│   ├── Linear Regression
│   ├── Logistic Regression
│   ├── Decision Trees
│   ├── Random Forests
│   ├── Gradient Boosting (XGBoost, LightGBM)
│   └── Support Vector Machines
├── Unsupervised Learning
│   ├── K-Means Clustering
│   ├── Hierarchical Clustering
│   ├── PCA & Dimensionality Reduction
│   └── Association Rules
├── Reinforcement Learning
│   ├── Markov Decision Processes
│   ├── Q-Learning
│   └── Policy Gradient Methods
└── Evaluation & Validation
    ├── Cross-Validation Strategies
    ├── Metrics & Scoring
    └── Hyperparameter Tuning
```

#### Deep Learning (DL)
```
├── Neural Network Fundamentals
│   ├── Perceptrons & Activation Functions
│   ├── Backpropagation
│   └── Optimization Algorithms
├── Convolutional Neural Networks
│   ├── CNN Architectures (LeNet, AlexNet, VGG)
│   ├── ResNet & Skip Connections
│   └── Object Detection (YOLO, SSD)
├── Recurrent Neural Networks
│   ├── LSTM & GRU
│   ├── Sequence-to-Sequence
│   └── Attention Mechanisms
├── Transformers & BERT
│   ├── Self-Attention
│   ├── BERT & GPT Architectures
│   └── Fine-tuning Strategies
└── Generative Models
    ├── Autoencoders
    ├── VAEs
    └── GANs
```

#### Natural Language Processing (NLP)
```
├── Text Preprocessing
│   ├── Tokenization & Stemming
│   ├── Named Entity Recognition
│   └── Word Embeddings (Word2Vec, GloVe)
├── Text Classification
│   ├── Sentiment Analysis
│   ├── Topic Modeling (LDA)
│   └── Text Categorization
├── Sequence Models
│   ├── NMT & Seq2Seq
│   ├── Transformer Architecture
│   └── Large Language Models
├── Practical Applications
│   ├── Chatbots & Dialogue Systems
│   ├── Information Extraction
│   └── Text Summarization
└── Evaluation Metrics
    ├── BLEU, ROUGE, METEOR
    └── Perplexity & FID
```

#### Computer Vision (CV)
```
├── Image Processing Fundamentals
│   ├── Filtering & Convolutions
│   ├── Edge Detection
│   └── Image Transformations
├── Object Detection & Recognition
│   ├── Haar Cascades
│   ├── YOLO & RetinaNet
│   └── Face Recognition Systems
├── Image Segmentation
│   ├── Semantic Segmentation
│   ├── Instance Segmentation
│   └── Panoptic Segmentation
├── Advanced Topics
│   ├── Style Transfer
│   ├── Image Generation (Stable Diffusion)
│   ├── Video Understanding
│   └── 3D Vision
└── Applications
    ├── Medical Imaging
    ├── Autonomous Vehicles
    └── Augmented Reality
```

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              AILearner Platform                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                         CLI / Web Interface                          │    │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐              │    │
│  │  │ Tutorial │  │ Exercise │  │   Quiz   │  │ Progress │              │    │
│  │  │  Module  │  │  Module  │  │  Module  │  │  Module  │              │    │
│  │  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘              │    │
│  └───────┼─────────────┼─────────────┼─────────────┼────────────────────┘    │
│          │             │             │             │                        │
│  ┌───────┴─────────────┴─────────────┴─────────────┴────────────────────┐    │
│  │                         Core Engine                                    │    │
│  │  ┌────────────────────────────────────────────────────────────────┐  │    │
│  │  │                      Course Manager                              │  │    │
│  │  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐           │  │    │
│  │  │  │ Course  │  │ Lesson  │  │ Exercise│  │  Quiz   │           │  │    │
│  │  │  │ Loader  │  │ Scheduler│ │ Grader  │  │ Generator│           │  │    │
│  │  │  └─────────┘  └─────────┘  └─────────┘  └─────────┘           │  │    │
│  │  └────────────────────────────────────────────────────────────────┘  │    │
│  │  ┌────────────────────────────────────────────────────────────────┐  │    │
│  │  │                    User Profile Manager                         │  │    │
│  │  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐           │  │    │
│  │  │  │ Progress│  │  Stats  │  │ Achieves│  │ Streaks │           │  │    │
│  │  │  │ Tracker │  │ Analyzer│  │ Manager │  │  System │           │  │    │
│  │  │  └─────────┘  └─────────┘  └─────────┘  └─────────┘           │  │    │
│  │  └────────────────────────────────────────────────────────────────┘  │    │
│  └───────────────────────────────────────────────────────────────────────┘    │
│                                     │                                        │
│  ┌─────────────────────────────────┴─────────────────────────────────────┐    │
│  │                         Data Layer                                     │    │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                 │    │
│  │  │ Course JSON  │  │  User Data   │  │   Cache      │                 │    │
│  │  │   Storage    │  │   (SQLite)   │  │  (JSON/CSV)  │                 │    │
│  │  └──────────────┘  └──────────────┘  └──────────────┘                 │    │
│  └───────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Component Diagram

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                           Component Interactions                              │
└──────────────────────────────────────────────────────────────────────────────┘

     User Input
         │
         ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   CLI Parser    │────▶│   Command       │────▶│   Action        │
│                 │     │   Router        │     │   Dispatcher    │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                        │
                        ┌───────────────────────────────┼───────────────────────────────┐
                        │                               │                               │
                        ▼                               ▼                               ▼
              ┌─────────────────┐             ┌─────────────────┐             ┌─────────────────┐
              │   Tutorial      │             │   Exercise      │             │   Quiz          │
              │   Controller    │             │   Controller    │             │   Controller    │
              └─────────────────┘             └─────────────────┘             └─────────────────┘
                        │                               │                               │
                        └───────────────────────────────┼───────────────────────────────┘
                                                        │
                                                        ▼
                                              ┌─────────────────┐
                                              │   Progress     │
                                              │   Manager      │
                                              └─────────────────┘
                                                        │
                        ┌───────────────────────────────┼───────────────────────────────┐
                        │                               │                               │
                        ▼                               ▼                               ▼
              ┌─────────────────┐             ┌─────────────────┐             ┌─────────────────┐
              │   User DB       │             │   Analytics     │             │   Achievements  │
              │   (SQLite)      │             │   Engine        │             │   Manager       │
              └─────────────────┘             └─────────────────┘             └─────────────────┘
```

### Data Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              Data Flow Diagram                              │
└─────────────────────────────────────────────────────────────────────────────┘

┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│  Course  │────▶│  Course  │────▶│  Lesson  │────▶│  User    │────▶│  Result  │
│  Source  │     │  Loader  │     │  State   │     │  Action  │     │  Storage │
│ (JSON)   │     │          │     │ Manager  │     │          │     │          │
└──────────┘     └──────────┘     └──────────┘     └──────────┘     └──────────┘
     │                                                   │
     │                                                   ▼
     │                                          ┌─────────────────┐
     │                                          │   Feedback      │
     │                                          │   Generator     │
     │                                          └─────────────────┘
     │                                                  │
     ▼                                                  ▼
┌──────────┐                                    ┌─────────────────┐
│  Cache   │◀───────────────────────────────────│   Display       │
│  Layer   │                                    │   (Terminal/CLI)│
└──────────┘                                    └─────────────────┘
```

---

## 📦 Installation

### Prerequisites

| Requirement | Minimum | Recommended |
|------------|---------|-------------|
| Python | 3.8+ | 3.11+ |
| RAM | 4 GB | 8 GB |
| Disk Space | 500 MB | 2 GB |
| OS | macOS 10.14+, Ubuntu 18.04+, Windows 10+ | Latest stable |

### Quick Install

```bash
# Clone the repository
git clone https://github.com/moggan1337/AILearner.git
cd AILearner

# Install dependencies
pip install -r requirements.txt

# Verify installation
python -m ailearner verify

# Start learning!
python -m ailearner start
```

### Detailed Installation Steps

#### 1. Clone Repository

```bash
git clone https://github.com/moggan1337/AILearner.git
cd AILearner
```

#### 2. Create Virtual Environment (Recommended)

```bash
# Using venv
python -m venv venv
source venv/bin/activate  # Linux/macOS
# or
.\venv\Scripts\activate   # Windows

# Using conda
conda create -n ailearner python=3.11
conda activate ailearner
```

#### 3. Install Dependencies

```bash
# Install core dependencies
pip install -r requirements.txt

# Install optional ML libraries (for exercises)
pip install scikit-learn tensorflow pytorch

# Install for development
pip install -r requirements-dev.txt
```

#### 4. Environment Configuration

```bash
# Copy example config
cp config/example.env config/.env

# Edit configuration (optional - defaults work for most users)
nano config/.env
```

#### 5. Initialize Database

```bash
# Create user database
python -m ailearner init-db

# Download initial course data
python -m ailearner courses sync
```

### Docker Installation

```bash
# Build Docker image
docker build -t ailearner:latest .

# Run with Docker
docker run -it --rm \
  -v $(pwd)/data:/app/data \
  -v $(pwd)/config:/app/config \
  ailearner:latest
```

### Docker Compose

```yaml
# docker-compose.yml
version: '3.8'
services:
  ailearner:
    build: .
    volumes:
      - ./data:/app/data
      - ./config:/app/config
    environment:
      - AILEARNER_MODE=interactive
      - AILEARNER_THEME=dark
    tty: true
```

---

## 🚀 Usage

### Getting Started

```bash
# Launch interactive mode
python -m ailearner

# Or use the CLI directly
ailearner --help
```

### Course Management

#### List Available Courses

```bash
ailearner courses list
```

Output:
```
┌─────────────────────────────────────────────────────────────────┐
│                      Available Courses                          │
├─────────────────────────────────────────────────────────────────┤
│  ID      │ Name                     │ Topics    │ Difficulty  │
├─────────────────────────────────────────────────────────────────┤
│  ml-101  │ Machine Learning Basics  │ ML         │ Beginner    │
│  ml-201  │ Advanced ML Techniques   │ ML         │ Intermediate│
│  dl-101  │ Deep Learning Intro      │ DL         │ Beginner    │
│  dl-201  │ CNNs & Computer Vision    │ DL, CV     │ Intermediate│
│  nlp-101 │ NLP Fundamentals         │ NLP        │ Beginner    │
│  nlp-201 │ Transformers & LLMs       │ NLP, DL    │ Advanced    │
│  cv-101  │ Computer Vision Basics    │ CV         │ Beginner    │
│  cv-201  │ Advanced Object Detection │ CV, DL     │ Advanced    │
└─────────────────────────────────────────────────────────────────┘
```

#### Start a Course

```bash
# Start with course ID
ailearner start ml-101

# Start with course name
ailearner start "Machine Learning Basics"

# Start with topic filter
ailearner start --topic ml

# Start with difficulty filter
ailearner start --difficulty beginner
```

### Tutorial Mode

```bash
# Enter interactive tutorial
ailearner tutorial ml-101 lesson-1

# View lesson outline
ailearner tutorial ml-101 outline

# Jump to specific section
ailearner tutorial ml-101 lesson-3 section-2
```

**Example Tutorial Session:**

```
┌─────────────────────────────────────────────────────────────────┐
│  Lesson 1: Introduction to Machine Learning                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Welcome to Machine Learning Basics!                            │
│                                                                  │
│  In this lesson, you'll learn:                                  │
│  • What is Machine Learning?                                     │
│  • Types of ML: Supervised, Unsupervised, Reinforcement         │
│  • Real-world applications                                       │
│  • Setting up your ML environment                                │
│                                                                  │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                  │
│  [1] Start Lesson                                                │
│  [2] View Prerequisites                                          │
│  [3] Skip to Quiz                                                │
│  [4] Exit                                                         │
│                                                                  │
│  > Choose an option: 1                                           │
│                                                                  │
│  ──────────────────────────────────────────────────────────────  │
│                                                                  │
│  📖 Section 1.1: What is Machine Learning?                       │
│                                                                  │
│  Machine Learning (ML) is a subset of artificial intelligence   │
│  that enables systems to learn and improve from experience      │
│  without being explicitly programmed.                            │
│                                                                  │
│  Key Components:                                                │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │  📊 Data → Features → Model → Predictions → Evaluation    │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                  │
│  [Space] Next  │  [B] Previous  │  [Q] Quit  │  [H] Help        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Exercise Mode

```bash
# Start exercise session
ailearner exercise ml-101

# Specific exercise
ailearner exercise ml-101 ex-1.3

# View exercise hints
ailearner exercise ml-101 ex-1.3 --show-hints

# Submit solution
ailearner exercise ml-101 ex-1.3 submit solution.py

# View solution after attempt
ailearner exercise ml-101 ex-1.3 --view-solution
```

**Example Exercise:**

```
┌─────────────────────────────────────────────────────────────────┐
│  Exercise 1.3: Linear Regression Implementation                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Task: Implement the predict() function for linear regression   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ # Your Task: Implement the prediction function          │    │
│  │                                                           │    │
│  │ def predict(X, weights, bias):                           │    │
│  │     """                                                 │    │
│  │     Predict using linear regression                      │    │
│  │     X: numpy array of shape (n_samples, n_features)     │    │
│  │     weights: numpy array of shape (n_features,)         │    │
│  │     bias: float                                          │    │
│  │     Returns: numpy array of predictions                 │    │
│  │     """                                                  │    │
│  │     # TODO: Implement this function                      │    │
│  │     pass                                                 │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  Hints (3 available):                                           │
│  [1] Hint 1: Linear regression formula is y = wx + b            │
│  [2] Hint 2: Use numpy.dot() for matrix multiplication          │
│  [3] Hint 3: Add bias after the dot product                    │
│                                                                  │
│  Commands: [submit] [hint] [skip] [solution] [quit]            │
│  > _                                                            │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Quiz Mode

```bash
# Start quiz for a course
ailearner quiz ml-101

# Specific quiz
ailearner quiz ml-101 quiz-2

# Quiz with time limit
ailearner quiz ml-101 --time-limit 30

# Review previous quiz
ailearner quiz ml-101 review quiz-1

# Adaptive quiz (AI adjusts difficulty)
ailearner quiz ml-101 --adaptive
```

**Example Quiz Session:**

```
┌─────────────────────────────────────────────────────────────────┐
│  Quiz 2: Supervised Learning                                     │
├─────────────────────────────────────────────────────────────────┤
│  Question 3 of 10  │  Score: 40/60  │  Time: 12:34              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Which algorithm is most appropriate for predicting house       │
│  prices based on historical data?                               │
│                                                                  │
│  A) K-Means Clustering                                          │
│  B) Linear Regression                                           │
│  C) Principal Component Analysis                                │
│  D) Apriori Algorithm                                           │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ [A] K-Means Clustering                                   │    │
│  │ [B] Linear Regression ← Your Answer                     │    │
│  │ [C] Principal Component Analysis                        │    │
│  │ [D] Apriori Algorithm                                    │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  Difficulty: ★★☆☆☆  │  Topic: Supervised Learning             │
│                                                                  │
│  Commands: [A] [B] [C] [D] [skip] [flag] [quit]               │
│  > _                                                            │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Progress Tracking

```bash
# View overall progress
ailearner progress

# View progress for specific course
ailearner progress ml-101

# View detailed analytics
ailearner progress --analytics

# Export progress report
ailearner progress --export report.pdf

# View achievements
ailearner achievements

# Check streak
ailearner streak
```

**Example Progress View:**

```
┌─────────────────────────────────────────────────────────────────┐
│                     Your Learning Progress                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  ████████████████░░░░░░░░░░░░░░  42% Complete           │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  Courses Enrolled:    4/8                                        │
│  Lessons Completed:   15/36                                      │
│  Exercises Solved:    28/45                                      │
│  Quizzes Passed:       6/12                                       │
│  Total Learning Time:  12h 34m                                   │
│                                                                  │
│  ─────────────────────────────────────────────────────────────  │
│                                                                  │
│  Skill Radar:                                                         │
│                                                                  │
│       ML                                                              │
│      ╱  ╲       Machine Learning     ████████░░  80%             │
│     ╱    ╲      Deep Learning        ██████░░░░  60%             │
│    NLP────CV    NLP                  ████░░░░░░  40%             │
│                  Computer Vision      █████░░░░░  50%             │
│                                                                  │
│  ─────────────────────────────────────────────────────────────  │
│                                                                  │
│  🔥 Current Streak: 7 days                                       │
│  ⭐ Total Points: 1,250                                          │
│  🏆 Achievements: 12/25                                          │
│                                                                  │
│  Recent Activity:                                                  │
│  • Completed "Neural Network Basics" - 2 hours ago              │
│  • Solved 5 exercises in ML-101 - Yesterday                     │
│  • Passed Quiz 1 with 85% - 2 days ago                          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📚 Course Structure

AILearner organizes content hierarchically:

```
courses/
├── {domain}/
│   ├── course.yaml           # Course metadata
│   ├── syllabus.json         # Course structure
│   └── lessons/
│       ├── lesson-001/
│       │   ├── content.md    # Lesson content
│       │   ├── examples/
│       │   │   └── *.py      # Code examples
│       │   └── resources/
│       │       └── *.json    # Additional resources
│       └── lesson-002/
│           └── ...
├── exercises/
│   └── {domain}/
│       ├── exercise-001.yaml
│       └── ...
└── quizzes/
    └── {domain}/
        ├── quiz-001.yaml
        └── ...
```

### Course YAML Format

```yaml
# course.yaml
id: ml-101
name: "Machine Learning Fundamentals"
domain: ml
version: "1.0.0"
difficulty: beginner
duration: "8 hours"
prerequisites: []
description: |
  Master the fundamentals of machine learning from scratch.
  Learn supervised and unsupervised learning techniques.

learning_objectives:
  - Understand core ML concepts and terminology
  - Implement basic ML algorithms from scratch
  - Evaluate model performance using appropriate metrics
  - Apply ML to real-world datasets

outline:
  - lesson: lesson-001
    title: "Introduction to ML"
    duration: "45 min"
  - lesson: lesson-002
    title: "Linear Regression"
    duration: "1.5 hours"
  - lesson: lesson-003
    title: "Classification Algorithms"
    duration: "2 hours"
```

### Lesson Content Format

```markdown
# Lesson 001: Introduction to Machine Learning

## Learning Objectives
- Define machine learning and its applications
- Distinguish between ML, AI, and traditional programming
- Identify types of machine learning

## Content

### What is Machine Learning?
Machine learning is...

### Types of Machine Learning
1. Supervised Learning
2. Unsupervised Learning
3. Reinforcement Learning

## Exercises
- [Exercise 1.1](exercises/ex-1.1.md): Identify ML types
- [Exercise 1.2](exercises/ex-1.2.md): ML workflow

## Quiz
- [Quiz 1](quizzes/quiz-1.md): ML Fundamentals

## Resources
- Additional reading materials
- External links
```

---

## 🔧 Configuration

### Configuration File

AILearner uses `config/settings.json` for customization:

```json
{
  "general": {
    "language": "en",
    "theme": "dark",
    "editor": "vim",
    "verbose": true
  },
  "courses": {
    "data_dir": "./data/courses",
    "cache_enabled": true,
    "cache_ttl": 3600,
    "sync_on_start": true
  },
  "user": {
    "db_path": "./data/user.db",
    "auto_save": true,
    "backup_enabled": true,
    "backup_interval": 86400
  },
  "quiz": {
    "adaptive_difficulty": true,
    "default_time_limit": 1800,
    "passing_score": 70,
    "shuffle_questions": true,
    "show_explanations": true
  },
  "exercises": {
    "auto_test": true,
    "max_hint_usage": 3,
    "timeout": 30,
    "test_framework": "pytest"
  },
  "progress": {
    "track_time": true,
    "sync_to_cloud": false,
    "export_format": "pdf"
  },
  "display": {
    "colors": true,
    "animations": true,
    "columns": 80,
    "pager": true
  },
  "logging": {
    "level": "INFO",
    "file": "./data/ailearner.log",
    "rotation": "daily"
  }
}
```

### Environment Variables

Override settings using environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `AILEARNER_HOME` | Config directory | `~/.ailearner` |
| `AILEARNER_DATA_DIR` | Data storage | `$AILEARNER_HOME/data` |
| `AILEARNER_LOG_LEVEL` | Logging level | `INFO` |
| `AILEARNER_THEME` | UI theme | `dark` |
| `AILEARNER_NO_COLOR` | Disable colors | `false` |

### Command-Line Options

```
ailearner [command] [options]

Commands:
  start              Start a course or lesson
  tutorial           Enter tutorial mode
  exercise           Work on exercises
  quiz               Take a quiz
  progress           View progress and stats
  courses            Manage courses

Global Options:
  --config FILE      Use custom config file
  --no-color         Disable colored output
  --quiet, -q        Minimal output
  --verbose, -v      Detailed output
  --version          Show version
  --help, -h         Show this help

Course Commands:
  ailearner courses list         List all courses
  ailearner courses sync         Sync course data
  ailearner courses install ID    Install specific course

Tutorial Commands:
  ailearner tutorial COURSE show outline
  ailearner tutorial COURSE lesson NUM [section]
  ailearner tutorial COURSE next
  ailearner tutorial COURSE previous

Exercise Commands:
  ailearner exercise COURSE [EX_NUM] --submit FILE
  ailearner exercise COURSE [EX_NUM] --hint
  ailearner exercise COURSE [EX_NUM] --solution

Quiz Commands:
  ailearner quiz COURSE [QUIZ_NUM] --time-limit SEC
  ailearner quiz COURSE review QUIZ_NUM
  ailearner quiz COURSE adaptive

Progress Commands:
  ailearner progress [COURSE]
  ailearner progress --analytics
  ailearner progress --export FORMAT
  ailearner achievements
  ailearner streak
```

---

## 📖 API Reference

### Core Classes

#### `CourseManager`

Manages course loading and lifecycle.

```python
from ailearner.core import CourseManager

# Initialize
manager = CourseManager(data_dir="./data/courses")

# List available courses
courses = manager.list_courses()
for course in courses:
    print(f"{course.id}: {course.name}")

# Load a course
course = manager.load_course("ml-101")

# Get course outline
outline = course.get_outline()
for lesson in outline:
    print(f"  {lesson.id}: {lesson.title}")
```

**Methods:**

| Method | Description | Returns |
|--------|-------------|---------|
| `list_courses()` | Get all available courses | `List[Course]` |
| `load_course(id)` | Load course by ID | `Course` |
| `search_courses(query)` | Search courses | `List[Course]` |
| `sync_courses()` | Sync with remote | `None` |
| `get_course_progress(id)` | Get completion status | `Progress` |

#### `LessonEngine`

Handles lesson presentation and navigation.

```python
from ailearner.core import LessonEngine

# Create engine
engine = LessonEngine(course)

# Start lesson
engine.start("lesson-001")

# Navigate
engine.next()      # Next section
engine.previous()  # Previous section
engine.goto(2)     # Jump to section 2

# Get current state
state = engine.get_state()
print(f"Section: {state.current_section}")
print(f"Progress: {state.progress}%")
```

**Methods:**

| Method | Description | Returns |
|--------|-------------|---------|
| `start(lesson_id)` | Begin lesson | `LessonState` |
| `next()` | Next section | `Section` |
| `previous()` | Previous section | `Section` |
| `goto(section_id)` | Jump to section | `Section` |
| `get_state()` | Current state | `LessonState` |
| `complete()` | Mark complete | `None` |

#### `ExerciseGrader`

Evaluates user submissions.

```python
from ailearner.core import ExerciseGrader

# Initialize grader
grader = ExerciseGrader()

# Load exercise
exercise = grader.load("ml-101", "ex-1.3")

# Submit solution
result = grader.submit(exercise, solution_code)

# Get feedback
print(f"Score: {result.score}")
print(f"Tests Passed: {result.passed}/{result.total}")
for failure in result.failures:
    print(f"  ✗ {failure.test}: {failure.message}")
```

**Methods:**

| Method | Description | Returns |
|--------|-------------|---------|
| `load(course_id, ex_id)` | Load exercise | `Exercise` |
| `submit(exercise, code)` | Grade submission | `GradingResult` |
| `get_hints(exercise)` | Get hints | `List[str]` |
| `get_solution(exercise)` | Get solution | `str` |
| `run_tests(exercise, code)` | Run tests | `TestResult` |

#### `QuizEngine`

Manages quiz administration.

```python
from ailearner.core import QuizEngine

# Create quiz
quiz_engine = QuizEngine()

# Start quiz
quiz = quiz_engine.start("ml-101", quiz_id="quiz-2")

# Answer question
result = quiz_engine.answer(quiz.id, question_id="q3", answer="B")

# Navigation
quiz_engine.flag(quiz.id, question_id="q2")
quiz_engine.skip(quiz.id)
quiz_engine.next(quiz.id)

# Complete quiz
final_result = quiz_engine.complete(quiz.id)

print(f"Score: {final_result.score}%")
print(f"Time: {final_result.time_taken}")
```

**Methods:**

| Method | Description | Returns |
|--------|-------------|---------|
| `start(course_id, quiz_id)` | Start quiz | `Quiz` |
| `answer(quiz_id, q_id, answer)` | Submit answer | `AnswerResult` |
| `skip(quiz_id)` | Skip question | `None` |
| `flag(quiz_id, q_id)` | Flag for review | `None` |
| `complete(quiz_id)` | Finish quiz | `QuizResult` |
| `review(quiz_id)` | Review answers | `QuizReview` |

#### `ProgressTracker`

Tracks and analyzes learning progress.

```python
from ailearner.core import ProgressTracker

# Initialize tracker
tracker = ProgressTracker(db_path="./data/user.db")

# Record activity
tracker.record_lesson_complete("ml-101", "lesson-001")
tracker.record_exercise_score("ml-101", "ex-1.3", 85)
tracker.record_quiz_score("ml-101", "quiz-1", 90)

# Get progress
progress = tracker.get_course_progress("ml-101")
print(f"Completion: {progress.percentage}%")

# Get analytics
analytics = tracker.get_analytics(period="30d")
print(f"Time spent: {analytics.total_time}")
print(f"Topics mastered: {analytics.mastered_topics}")
```

**Methods:**

| Method | Description | Returns |
|--------|-------------|---------|
| `record_lesson_complete(...)` | Log lesson | `None` |
| `record_exercise_score(...)` | Log exercise | `None` |
| `record_quiz_score(...)` | Log quiz | `None` |
| `get_course_progress(course_id)` | Get progress | `CourseProgress` |
| `get_overall_progress()` | Get all progress | `OverallProgress` |
| `get_analytics(period)` | Get stats | `Analytics` |
| `get_streak()` | Get streak | `int` |
| `get_achievements()` | Get badges | `List[Achievement]` |

### Data Classes

```python
@dataclass
class Course:
    id: str
    name: str
    domain: str
    difficulty: str
    version: str
    description: str
    duration: str
    lessons: List[LessonSummary]

@dataclass
class Lesson:
    id: str
    title: str
    content: str
    examples: List[CodeExample]
    exercises: List[str]
    resources: List[Resource]

@dataclass
class Exercise:
    id: str
    title: str
    description: str
    starter_code: str
    solution_code: str
    hints: List[str]
    tests: List[TestCase]

@dataclass
class Question:
    id: str
    text: str
    options: List[str]
    correct_answer: str
    explanation: str
    difficulty: int
    topic: str

@dataclass
class QuizResult:
    quiz_id: str
    score: float
    total_questions: int
    correct_answers: int
    time_taken: int
    answers: List[AnswerRecord]
```

---

## 🔍 Troubleshooting

### Common Issues

#### Installation Problems

**Issue: `pip install` fails with dependency conflict**

```bash
# Solution: Use virtual environment
python -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
```

**Issue: `ModuleNotFoundError: No module named 'ailearner'`**

```bash
# Solution: Install in development mode
pip install -e .
# or
python -m pip install -e ~/moggan1337/AILearner
```

**Issue: Permission denied errors**

```bash
# Solution: Check permissions
ls -la ~/moggan1337/AILearner/
# Fix ownership if needed
sudo chown -R $USER ~/moggan1337/AILearner
```

#### Runtime Issues

**Issue: Database locked or corrupted**

```bash
# Solution: Reset database
rm -f data/user.db
python -m ailearner init-db
```

**Issue: Unicode errors in terminal**

```bash
# Solution: Set locale
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8
```

**Issue: Quiz/exercise not loading**

```bash
# Solution: Clear cache and resync
rm -rf data/cache/*
python -m ailearner courses sync
```

#### Performance Issues

**Issue: Slow startup**

```bash
# Solution: Disable sync on start in config
# Edit config/settings.json
{
  "courses": {
    "sync_on_start": false
  }
}
```

**Issue: High memory usage**

```bash
# Solution: Disable animations and reduce history
export AILEARNER_ANIMATIONS=false
# Edit config/settings.json
{
  "display": {
    "animations": false,
    "history_lines": 100
  }
}
```

### Debug Mode

Enable verbose logging for troubleshooting:

```bash
# Set log level
export AILEARNER_LOG_LEVEL=DEBUG

# Run with debug output
python -m ailearner --verbose start ml-101

# View log file
tail -f data/ailearner.log
```

### Reset Everything

```bash
# Full reset (WARNING: deletes all progress)
rm -rf data/*
python -m ailearner init-db
python -m ailearner courses sync
```

### Getting Help

```bash
# Show diagnostic info
python -m ailearner doctor

# Check version
python -m ailearner --version

# View help
python -m ailearner --help
python -m ailearner [command] --help
```

### Error Messages

| Error Code | Description | Solution |
|------------|-------------|----------|
| `E001` | Course not found | Run `ailearner courses sync` |
| `E002` | Database error | Reset database |
| `E003` | Invalid config | Restore defaults |
| `E004` | Network error | Check internet connection |
| `E005` | File permission | Check file permissions |

---

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- Scikit-learn team for ML foundations
- TensorFlow/PyTorch communities
- Fast.ai for educational inspiration
- All contributors and beta testers

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/moggan1337">moggan1337</a>
</p>

import type { CaseStudy } from "@/types/content";

export const localRagAssistantCaseStudy: CaseStudy = {
  slug: "local-rag-assistant",
  hero: {
    title: "Local RAG Assistant",
    subtitle:
      "Private document intelligence with local LLM inference and REST API access.",
    badges: ["AI", "RAG", "Docker", "2025"],
  },
  overview: {
    title: "Overview",
    paragraphs: [
      "The Local RAG Assistant is a compact, fully local document intelligence system for private question-answering over custom document collections. It combines document ingestion, embedding-based retrieval, and Ollama-powered inference — containerized with Docker and exposed through a REST API.",
      "Built as a supporting project demonstrating end-to-end local AI infrastructure without hosted inference dependencies.",
    ],
  },
  problem: {
    title: "Problem",
    paragraphs: [
      "Many environments require AI systems that operate entirely within local infrastructure — without external data transmission, hosted APIs, or third-party inference dependencies.",
    ],
    bullets: [
      "Need for private AI with no external data transmission",
      "Offline operation in restricted or air-gapped environments",
      "Sensitive document access without third-party API dependency",
      "Reproducible deployments across development and production",
    ],
  },
  solution: {
    title: "Solution",
    paragraphs: [
      "I built an end-to-end RAG pipeline with local inference, vector retrieval, and REST API integration — Dockerized for reproducible deployment using Ollama and local embedding models.",
    ],
    bullets: [
      "Document ingestion and chunking pipeline for retrieval context windows",
      "Local embedding generation and vector store for similarity search",
      "Context assembly with ranked chunk selection for LLM prompts",
      "Ollama-powered local LLM response generation",
      "REST API layer for programmatic RAG access",
      "Docker containerization for reproducible deployment",
    ],
  },
  architecture: {
    title: "RAG Architecture",
    ariaLabel: "RAG architecture flow",
    steps: [
      { id: "documents", label: "Documents" },
      { id: "chunking", label: "Chunking" },
      { id: "embeddings", label: "Embeddings" },
      { id: "vector-store", label: "Vector Store" },
      { id: "retriever", label: "Retriever" },
      { id: "ollama-llm", label: "Ollama LLM" },
      { id: "answer-generation", label: "Answer Generation" },
    ],
  },
  impact: {
    title: "Project Outcomes",
    metrics: [
      {
        id: "local-inference",
        value: "100%",
        label: "Local Inference",
      },
      {
        id: "dockerized",
        value: "Dockerized",
        label: "Deployment",
      },
      {
        id: "rest-api",
        value: "REST API",
        label: "Integration",
      },
      {
        id: "private-search",
        value: "Private",
        label: "Document Search",
      },
    ],
  },
  technologies: {
    title: "Technology Stack",
    items: [
      "Python",
      "Docker",
      "Ollama",
      "RAG",
      "REST API",
      "Vector Search",
      "LLMs",
    ],
  },
  highlights: {
    title: "Engineering Highlights",
    items: [
      "Retrieval-Augmented Generation pipeline with fully local inference",
      "Vector search with embedding-based similarity retrieval",
      "Docker containerization for reproducible deployment",
      "REST API integration for programmatic document intelligence",
    ],
  },
  nextCaseStudy: {
    label: "Back to Projects",
    href: "/projects",
  },
  sectionOrder: "highlights-technologies-impact",
};

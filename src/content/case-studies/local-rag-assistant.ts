import type { CaseStudy } from "@/types/content";

export const localRagAssistantCaseStudy: CaseStudy = {
  slug: "local-rag-assistant",
  hero: {
    title: "Local RAG Assistant",
    subtitle:
      "Private document intelligence powered by local LLMs and retrieval-augmented generation.",
    badges: ["AI", "RAG", "Docker", "Personal Project", "2025"],
  },
  overview: {
    title: "Overview",
    paragraphs: [
      "The Local RAG Assistant is a fully local document intelligence system that enables private, offline question-answering over custom document collections. It combines a document ingestion pipeline, embedding-based retrieval, and Ollama-powered inference — all without relying on hosted AI services.",
      "The system is containerized with Docker for reproducible deployment and exposes a REST API for programmatic access to retrieval-augmented generation workflows.",
    ],
  },
  problem: {
    title: "Problem",
    paragraphs: [
      "Organizations often need AI systems that operate entirely within their own infrastructure. Hosted AI solutions frequently fall short when privacy, offline operation, or deployment reproducibility are non-negotiable requirements.",
    ],
    bullets: [
      "Need for private AI systems with no external data transmission",
      "Offline operation requirements in restricted environments",
      "Sensitive document access without third-party API dependency",
      "No reliance on hosted inference or embedding services",
      "Reproducible deployments across development and production environments",
    ],
  },
  solution: {
    title: "Solution",
    paragraphs: [
      "I designed and built an end-to-end RAG pipeline with local inference, vector retrieval, and a REST API layer — enabling private document intelligence without external AI dependencies.",
    ],
    bullets: [
      "Document ingestion pipeline for multi-format source files",
      "Chunking pipeline optimized for retrieval context windows",
      "Embedding generation using local embedding models",
      "Vector store for similarity-based document retrieval",
      "Context assembly with ranked chunk selection",
      "Ollama-powered LLM response generation",
      "REST API layer for integration and programmatic access",
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
      "Retrieval-Augmented Generation pipeline with local inference",
      "Vector search with embedding-based similarity retrieval",
      "Document chunking and embedding generation pipelines",
      "Prompt construction with retrieved context assembly",
      "Docker containerization for reproducible deployment",
      "Local inference architecture powered by Ollama",
    ],
  },
  nextCaseStudy: {
    label: "Back to Projects",
    href: "/projects",
  },
  sectionOrder: "highlights-technologies-impact",
};

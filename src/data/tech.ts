export interface Tech {
  label: string;
  icon?: string; // file name (without .svg) in /public/svg
  mono?: boolean; // dark single-colour logo: invert so it shows on the dark theme
}

export const TECH: Record<string, Tech> = {
  React: { label: "React", icon: "react" },
  TypeScript: { label: "TypeScript", icon: "typescript" },
  JavaScript: { label: "JavaScript", icon: "javascript" },
  "Node.js": { label: "Node.js", icon: "nodejs" },
  Express: { label: "Express", icon: "express", mono: true },
  NestJS: { label: "NestJS", icon: "nestjs" },
  Go: { label: "Go", icon: "go" },
  Python: { label: "Python", icon: "python" },
  FastAPI: { label: "FastAPI", icon: "fastapi" },
  PostgreSQL: { label: "PostgreSQL", icon: "postgresql" },
  MongoDB: { label: "MongoDB", icon: "mongodb" },
  Redis: { label: "Redis", icon: "redis" },
  Prisma: { label: "Prisma", icon: "prisma", mono: true },
  GraphQL: { label: "GraphQL", icon: "graphql" },
  Hasura: { label: "Hasura", icon: "hasura" },
  "Socket.IO": { label: "Socket.IO", icon: "socketio", mono: true },
  Docker: { label: "Docker", icon: "docker" },
  Git: { label: "Git", icon: "git" },
  Postman: { label: "Postman", icon: "postman" },
  Jest: { label: "Jest", icon: "jest" },
  Vitest: { label: "Vitest", icon: "vitest" },
  PyTorch: { label: "PyTorch", icon: "pytorch" },
  "Tailwind CSS": { label: "Tailwind CSS", icon: "tailwindcss" },
  HTML5: { label: "HTML5", icon: "html5" },
  CSS3: { label: "CSS3", icon: "css3" },
};

export const iconFor = (name: string): Tech | undefined => TECH[name];

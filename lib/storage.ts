import fs from 'fs';
import path from 'path';

const FILE = path.join(process.cwd(), 'data', 'submissions.json');

export interface Submission {
  id: string;
  receivedAt: string;
  company: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  category: string;
  moq: string;
  requirements: string;
  fileName?: string;
}

function readAll(): Submission[] {
  try {
    const raw = fs.readFileSync(FILE, 'utf-8');
    return JSON.parse(raw) as Submission[];
  } catch {
    return [];
  }
}

function writeAll(data: Submission[]): void {
  fs.mkdirSync(path.dirname(FILE), { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2), 'utf-8');
}

export function saveSubmission(fields: Omit<Submission, 'id' | 'receivedAt'>): Submission {
  const all = readAll();
  const entry: Submission = {
    id: `SUB-${Date.now()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`,
    receivedAt: new Date().toISOString(),
    ...fields,
  };
  all.unshift(entry); // newest first
  writeAll(all);
  return entry;
}

export function getAllSubmissions(): Submission[] {
  return readAll();
}

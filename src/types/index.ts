export type ComparisonType = 
  | 'EQUAL' 
  | 'LESS' 
  | 'GREATER' 
  | 'OUT_OF_BOUNDS_LOW' 
  | 'OUT_OF_BOUNDS_HIGH' 
  | 'SINGLE_ELEMENT_MATCH' 
  | 'SINGLE_ELEMENT_MISMATCH'
  | 'DIVISION_BY_ZERO_HANDLED';

export interface SearchStep {
  stepNumber: number;
  low: number;
  high: number;
  pos: number;
  target: number;
  arrLow: number;
  arrHigh: number;
  arrPos: number;
  formulaString: string;
  formulaCalculation: string;
  comparison: ComparisonType;
  explanation: string;
  nextAction: string;
  found: boolean;
  done: boolean;
  comparisonsCount: number;
  activeSubarrayIndices: number[]; // indices of elements still in range [low..high]
}

export interface SearchResult {
  found: boolean;
  index: number;
  iterations: number;
  comparisons: number;
  steps: SearchStep[];
  message: string;
}

export type CodeLanguage = 'cpp' | 'java' | 'python' | 'javascript';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

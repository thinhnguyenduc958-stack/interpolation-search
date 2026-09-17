import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheorySection } from './components/TheorySection';
import { HowItWorks } from './components/HowItWorks';
import { FormulaCard } from './components/FormulaCard';
import { SearchSimulator } from './components/SearchSimulator';
import { ExampleWalkthrough } from './components/ExampleWalkthrough';
import { ComplexitySection } from './components/ComplexitySection';
import { RequirementsSection } from './components/RequirementsSection';
import { ComparisonTable } from './components/ComparisonTable';
import { CodeBlock } from './components/CodeBlock';
import { CommonMistakes } from './components/CommonMistakes';
import { LearningSummary } from './components/LearningSummary';
import { MiniQuiz } from './components/MiniQuiz';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Educational Content */}
      <main className="grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Introduction Theory */}
        <TheorySection />

        {/* 3. How it works (8 steps) */}
        <HowItWorks />

        {/* 4. Mathematical Formula & Variables */}
        <FormulaCard />

        {/* 5. Interactive Simulator (The Core Feature) */}
        <SearchSimulator />

        {/* 6. Step-by-step Example Walkthrough */}
        <ExampleWalkthrough />

        {/* 7. Time & Space Complexity */}
        <ComplexitySection />

        {/* 8. Prerequisites & Requirements */}
        <RequirementsSection />

        {/* 9. Comparison: Interpolation vs Binary Search */}
        <ComparisonTable />

        {/* 10. Multi-language Source Code */}
        <CodeBlock />

        {/* 11. Common Mistakes & Pitfalls */}
        <CommonMistakes />

        {/* 12. Learning Summary Flowchart */}
        <LearningSummary />

        {/* 13. Interactive Mini Quiz */}
        <MiniQuiz />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

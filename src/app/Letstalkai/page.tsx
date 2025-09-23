import React from 'react';
import LetsTalkAIHero from '@/components/lets-talk-ai/LetsTalkAIHero';
import LetsTalkAISecondSection from '@/components/lets-talk-ai/LetsTalkAISecondSection';
import AIConsultation from '@/components/lets-talk-ai/AIConsultation';
import MachineLearning from '@/components/lets-talk-ai/MachineLearning';
import NaturalLanguageProcessing from '@/components/lets-talk-ai/NaturalLanguageProcessing';
import ComputerVision from '@/components/lets-talk-ai/ComputerVision';
import AIStrategy from '@/components/lets-talk-ai/AIStrategy';
import LetsTalkAIFinalSection from '@/components/lets-talk-ai/LetsTalkAIFinalSection';
import AITransformationGuide from '@/components/lets-talk-ai/AITransformationGuide';

const LetsTalkAI: React.FC = () => {
  return (
    <main>
      <LetsTalkAIHero />
      <LetsTalkAISecondSection />
      <section id="ai-consultation">
        <AIConsultation />
      </section>
      <section id="machine-learning">
        <MachineLearning />
      </section>
      <section id="nlp">
        <NaturalLanguageProcessing />
      </section>
      <section id="computer-vision">
        <ComputerVision />
      </section>
      <section id="ai-strategy">
        <AIStrategy />
      </section>
      <section id="ai-transformation-guide">
        <AITransformationGuide />
      </section>
      <LetsTalkAIFinalSection />
    </main>
  );
};

export default LetsTalkAI;

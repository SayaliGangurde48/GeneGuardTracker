// Client-side risk calculation utilities and helpers
export interface RiskFactors {
  familyHistory: number;
  lifestyle: number;
  environmental: number;
  age: number;
}

export interface RiskAssessmentResult {
  condition: string;
  riskScore: number;
  riskLevel: 'low' | 'medium' | 'high';
  factors: RiskFactors;
  reasoning: string;
}

// Risk level thresholds
export const RISK_THRESHOLDS = {
  HIGH: 70,
  MEDIUM: 40,
  LOW: 0,
};

// Health condition weights for family history
export const CONDITION_WEIGHTS = {
  'Diabetes Type 2': {
    heritability: 0.7,
    firstDegree: 40,
    secondDegree: 20,
  },
  'Heart Disease': {
    heritability: 0.5,
    firstDegree: 35,
    secondDegree: 18,
  },
  'Breast Cancer': {
    heritability: 0.25,
    firstDegree: 45,
    secondDegree: 22,
  },
  'Colon Cancer': {
    heritability: 0.35,
    firstDegree: 38,
    secondDegree: 19,
  },
  'Alzheimer\'s Disease': {
    heritability: 0.6,
    firstDegree: 42,
    secondDegree: 21,
  },
};

// First-degree relatives
export const FIRST_DEGREE_RELATIONS = [
  'father',
  'mother',
  'brother',
  'sister',
  'son',
  'daughter',
];

export function getRiskLevel(score: number): 'low' | 'medium' | 'high' {
  if (score >= RISK_THRESHOLDS.HIGH) return 'high';
  if (score >= RISK_THRESHOLDS.MEDIUM) return 'medium';
  return 'low';
}

export function getRiskColor(level: string): string {
  switch (level) {
    case 'high': return 'hsl(0, 84%, 60%)';
    case 'medium': return 'hsl(43, 96%, 56%)';
    case 'low': return 'hsl(142, 76%, 47%)';
    default: return 'hsl(210, 11%, 71%)';
  }
}

export function calculateFamilyHistoryScore(
  condition: string,
  familyMembers: any[]
): number {
  const weights = CONDITION_WEIGHTS[condition as keyof typeof CONDITION_WEIGHTS];
  if (!weights) return 0;

  const affectedMembers = familyMembers.filter(member =>
    member.medicalConditions?.includes(condition)
  );

  if (affectedMembers.length === 0) return 0;

  let score = 0;

  // Calculate based on relationship closeness
  const firstDegreeAffected = affectedMembers.filter(member =>
    FIRST_DEGREE_RELATIONS.includes(member.relation.toLowerCase())
  );

  const secondDegreeAffected = affectedMembers.filter(member =>
    !FIRST_DEGREE_RELATIONS.includes(member.relation.toLowerCase())
  );

  // Apply weights
  score += firstDegreeAffected.length * weights.firstDegree;
  score += secondDegreeAffected.length * weights.secondDegree;

  // Cap the maximum family history contribution
  return Math.min(score, 100);
}

export function calculateLifestyleScore(
  condition: string,
  lifestyle: any
): number {
  if (!lifestyle) return 10; // Default environmental score

  let score = 0;

  // Condition-specific lifestyle factors
  switch (condition) {
    case 'Diabetes Type 2':
      if (lifestyle.exerciseLevel === 'low') score += 20;
      if (lifestyle.smokingStatus === 'current') score += 15;
      if (lifestyle.dietType === 'processed' || lifestyle.dietType === 'high_sugar') score += 25;
      break;

    case 'Heart Disease':
      if (lifestyle.smokingStatus === 'current') score += 30;
      if (lifestyle.smokingStatus === 'former') score += 10;
      if (lifestyle.exerciseLevel === 'low') score += 20;
      if (lifestyle.dietType === 'high_fat') score += 15;
      break;

    case 'Breast Cancer':
      if (lifestyle.smokingStatus === 'current') score += 10;
      if (lifestyle.exerciseLevel === 'low') score += 8;
      break;

    case 'Colon Cancer':
      if (lifestyle.smokingStatus === 'current') score += 15;
      if (lifestyle.exerciseLevel === 'low') score += 12;
      if (lifestyle.dietType === 'low_fiber') score += 18;
      break;

    default:
      // General lifestyle impact
      if (lifestyle.smokingStatus === 'current') score += 15;
      if (lifestyle.exerciseLevel === 'low') score += 10;
      break;
  }

  return Math.min(score, 50); // Cap lifestyle contribution
}

export function calculateAgeScore(condition: string, age: string): number {
  const numericAge = parseInt(age.split('-')[0]);

  switch (condition) {
    case 'Alzheimer\'s Disease':
      if (numericAge >= 65) return 30;
      if (numericAge >= 55) return 15;
      return 0;

    case 'Breast Cancer':
      if (numericAge >= 50) return 20;
      if (numericAge >= 40) return 10;
      return 0;

    case 'Heart Disease':
      if (numericAge >= 55) return 20;
      if (numericAge >= 45) return 10;
      return 0;

    case 'Diabetes Type 2':
      if (numericAge >= 45) return 15;
      if (numericAge >= 35) return 8;
      return 0;

    default:
      if (numericAge >= 60) return 10;
      if (numericAge >= 50) return 5;
      return 0;
  }
}

export function generateRiskReasoning(
  condition: string,
  factors: RiskFactors,
  familyMembers: any[]
): string {
  const reasonParts = [];

  if (factors.familyHistory > 0) {
    const affectedCount = familyMembers.filter(member =>
      member.medicalConditions?.includes(condition)
    ).length;

    reasonParts.push(`family history (${affectedCount} affected relative${affectedCount > 1 ? 's' : ''})`);
  }

  if (factors.lifestyle > 15) {
    reasonParts.push('lifestyle factors');
  }

  if (factors.age > 10) {
    reasonParts.push('age-related factors');
  }

  if (factors.environmental > 0) {
    reasonParts.push('environmental factors');
  }

  const baseText = 'Risk assessment based on: ';
  return baseText + (reasonParts.length > 0 ? reasonParts.join(', ') : 'general population risk');
}

// Utility functions for data transformation
export function transformRiskDataForCharts(riskAssessments: any[]) {
  return riskAssessments.map(assessment => ({
    condition: assessment.condition.replace(' Type 2', '').replace(' Disease', ''),
    riskScore: assessment.riskScore,
    riskLevel: assessment.riskLevel,
    familyHistory: assessment.factors?.familyHistory || 0,
    lifestyle: assessment.factors?.lifestyle || 0,
    environmental: assessment.factors?.environmental || 0,
    age: assessment.factors?.age || 0,
    fill: getRiskColor(assessment.riskLevel),
  }));
}

export function getHighestRiskConditions(riskAssessments: any[], limit = 3) {
  return riskAssessments
    .filter(assessment => assessment.riskLevel === 'high')
    .sort((a, b) => b.riskScore - a.riskScore)
    .slice(0, limit);
}

export function calculateOverallRiskScore(riskAssessments: any[]): number {
  if (riskAssessments.length === 0) return 0;
  const totalScore = riskAssessments.reduce((sum, assessment) => sum + assessment.riskScore, 0);
  return Math.round(totalScore / riskAssessments.length);
}

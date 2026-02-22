export function buildPlanMessages(question, constraints) {
  const systemMessage = `You are a research planning assistant. Your task is to generate search queries to answer the user's question.

Output ONLY valid JSON in this exact format:
{
  "queries": ["query1", "query2", "query3"],
  "rationale": "Brief explanation of the search strategy"
}

Rules:
- Generate 3-5 diverse search queries that together cover the question comprehensively
- Each query should be optimized for web search
- Queries should be specific and targeted
- Do NOT include any text outside the JSON object
- Do NOT ask clarifying questions`;

  let userContent = `Question: ${question}`;
  if (constraints && Object.keys(constraints).length > 0) {
    userContent += `\nConstraints: ${JSON.stringify(constraints)}`;
  }

  return [
    { role: 'user', content: userContent },
  ];
}

export const planSystemMessage = `You are a research planning assistant. Your task is to generate search queries to answer the user's question.

Output ONLY valid JSON in this exact format:
{
  "queries": ["query1", "query2", "query3"],
  "rationale": "Brief explanation of the search strategy"
}

Rules:
- Generate 3-5 diverse search queries that together cover the question comprehensively
- Each query should be optimized for web search
- Queries should be specific and targeted
- Do NOT include any text outside the JSON object
- Do NOT ask clarifying questions`;

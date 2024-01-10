export default async function dialoGPT(data: {
  inputs: {
    past_user_inputs: string[];
    generated_responses: string[];
    text: string;
  };
}) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium",
    {
      headers: {
        Authorization: "Bearer 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",
        // Authorization: `Bearer ${process.env.HUGGINGFACE_TOKEN}`,
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

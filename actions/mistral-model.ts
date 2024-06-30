export async function query(data: object) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3",
    {
      headers: {
        Authorization: "Bearer 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",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

query({ inputs: "Can you please let us know more details about your " }).then(
  (response) => {
    console.log(JSON.stringify(response));
  }
);



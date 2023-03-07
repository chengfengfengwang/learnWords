export interface chatApiParams {
  message: string,
  parentMessageId: string
}
type Role = 'user' | 'assistant' | 'system';

export interface chatApiResponse {
  choices: [
    {
      message: {
            role: Role;
            content: string;
        };
        index: number;
        finish_reason: string | null;
    }
];
}
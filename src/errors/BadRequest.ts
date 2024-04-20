export class BadRequestError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode = 400) {
    super(message);
    this.name = 'Bad Request';
    this.statusCode = statusCode;
  }
}

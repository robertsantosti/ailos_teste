export interface IResponseRequest<T> {
  data: T | null;
  success: boolean;
  message?: string;
}

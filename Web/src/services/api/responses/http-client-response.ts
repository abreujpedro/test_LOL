import { plainToInstance } from "class-transformer";

type ClassType<T> = new (...args: any[]) => T;

export class HttpClientResponse {
  public constructor(
    private readonly statusCode: number,
    private readonly data: unknown
  ) {}

  public getData<TResponse>(DataType: ClassType<TResponse>): TResponse {
    return plainToInstance(DataType, this.data);
  }

  public getArrayData<TResponse>(DataType: ClassType<TResponse>): TResponse[] {
    return plainToInstance(DataType, this.data as unknown[]);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public getRawData<T = any>(): T {
    return this.data as T;
  }

  public hasStatus(status: number): boolean {
    return this.statusCode === status;
  }
}

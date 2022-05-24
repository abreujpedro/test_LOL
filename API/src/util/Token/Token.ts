import { sign, verify } from "jsonwebtoken";

abstract class Token {
  static createToken({ email }: { email: string }) {
    if (process.env.JWT_SECRET) {
      const token = sign(
        {
          user: {
            email,
          },
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      return token;
    }
  }
  static compareToken(token: string) {
    if (process.env.JWT_SECRET) {
      verify(token, process.env.JWT_SECRET, (error, decodedToken) => {
        if (error) {
          throw error;
        }
        return decodedToken;
      }) as any;
    }
  }
}

export default Token;

import bcrypt from "bcrypt";

abstract class Encrypt {
  private static salt = 10;
  static async encryptData(textToEncrypt: string | Buffer) {
    return await bcrypt.hash(textToEncrypt, Encrypt.salt);
  }

  static async compareData(
    textToCompare: string | Buffer,
    textEncrypted: string
  ) {
    return await bcrypt.compare(textToCompare, textEncrypted);
  }
}

export default Encrypt;

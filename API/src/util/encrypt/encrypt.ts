import bcrypt from "bcrypt";

const encrypt = async (textToEncrypt: string | Buffer) => {
  const salt = 10;
  return await bcrypt.hash(textToEncrypt, salt);
};

export default encrypt;
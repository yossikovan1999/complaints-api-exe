import jwt from "jsonwebtoken"

//====================================
//            create token
//====================================
export function signToken(payload) {
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  return token;
}

//====================================
//           verify token
//====================================
export function verifyToken(token) {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return payload;
  } catch (error) {
    return null;
  }
}

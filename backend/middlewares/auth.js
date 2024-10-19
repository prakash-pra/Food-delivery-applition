import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  const { token } = req.headers;
  // console.log(token);

  if (!token) {
    return res.json({ success: false, message: "not authorized login again" });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    req.body.userId = decodedToken.id;

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export default auth;

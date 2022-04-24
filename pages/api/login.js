export default (req, res) => {
  // res.statusCode = 200;
  // res.json({ name: null });
  if (req.method === "POST") {
    res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure");
    res.statusCode = 200;
    res.json({ message: "ok" });
  }
};

//post 메서드로만 동작하며, cookie 설정
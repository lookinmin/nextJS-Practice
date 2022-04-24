export default (req, res) => {
  res.status(200).json({ name: req.cookies.a_name })
}

export default (req, res) => {
  res.status(200).json({ id: req.query.id })
}


//dynamic api routing

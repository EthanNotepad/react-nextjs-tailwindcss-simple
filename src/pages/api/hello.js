// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res
    .status(200)
    .json({ data: "you got me", name: req.query.name + " John Doe" });
}

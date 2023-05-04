export default function handler(req, res) {
  const { username, password } = req.body;
  if (username === "cheng" && password === "admin123") {
    res.status(200).json({
      code: 200,
      data: {
        id_user: 9,
        username: username,
        email: "abc@tt.com",
        user_type: "regular",
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2NDUzMzVlMDZmZGNmIiwiaWF0IjoxNjgzMTc0ODgwLCJleHAiOjE2ODMyNjEyODAsImRhdGEiOnsiaXNzIjoidGltZXRyYWNrZXIiLCJzdWIiOiJ0aW1ldHJhY2tlcl9zdWIiLCJ1c2VyX2lkIjo5LCJ1c2VybmFtZSI6ImNoZW5nIiwiZW1haWwiOiJhYmNAdHQuY29tIiwidHlwIjoicmVndWxhciJ9fQ.SjvJkoDRkDA0O8sjJK31vQOYyuGQdPGv9w0SF_NFxGU",
      },
      msg: "success",
    });
  } else {
    res.status(401).json({
      code: 401,
      data: { username: username, password: password },
      msg: "Incorrect username or password.",
    });
  }
}

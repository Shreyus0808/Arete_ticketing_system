const express = require("express");
const mysql = require("mysql");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const multer = require("multer");
const nodemailer = require("nodemailer");

const port = 8000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

const app = express();
app.use(
  cors({
    credentials: true,
    origin: true, // Allow all origins
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "yourSecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

//-------------------------------------------DATABASE CONNECTION----------------------------------------------------

let db;

function handleDisconnect() {
  db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "resourcify",
  });

  db.connect(function (err) {
    if (err) {
      console.error("Error connecting to database:", err);
      setTimeout(handleDisconnect, 2000);
    }
  });

  db.on("error", function (err) {
    console.error("Database error:", err);
    if (
      err.code === "PROTOCOL_CONNECTION_LOST" ||
      err.code === "ECONNREFUSED"
    ) {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

// const transporter = nodemailer.createTransport({
//   host: "smtp.office365.com",
//   port: 25,
//   secure: "ENCRYPTION" === "tls",
//   auth: {
//     user: "dev@waysaheadglobal.com",
//     pass: "Singapore@2022",
//   },
// });

process.on("SIGINT", function () {
  console.log("Caught interrupt signal, closing database connection.");
  db.end(function (err) {
    process.exit(err ? 1 : 0);
  });
});

app.get("/", (req, res) => {
  const q = "SELECT * from users";
  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/tickets/:uid", (req, res) => {
  const uid = req.params.uid;

  let q =
    "SELECT u1.id AS assigned_to_id, u1.full_name AS assigned_to, p.project_name AS project, t.ticket_status as status, u2.id AS assigned_by_id, u2.full_name AS assigned_by, t.id as ticket_id, t.ticket_description as description, t.priority, eta FROM tickets t LEFT JOIN users u1 ON u1.id=t.user_id LEFT JOIN users u2 ON u2.id=t.assigned_by JOIN projects p ON t.project_id = p.id";

  if (uid !== "all") {
    q += " WHERE u1.id=?";
    db.query(q, [uid], (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.json(data);
    });
  } else {
    db.query(q, (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.json(data);
    });
  }
});

app.get("/projects/:uid", (req, res) => {
  const uid = req.params.uid;

  let q =
    "SELECT u1.id AS project_manager_id, u1.full_name AS project_manager, p.project_name AS project, p.project_status as status, p.start_date, p.end_date, p.id as project_id, p.project_description as description FROM projects p LEFT JOIN users u1 ON u1.id=p.project_manager_id";

  if (uid !== "all") {
    q += " WHERE u.id=?";
    db.query(q, [uid], (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.json(data);
    });
  } else {
    db.query(q, (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.json(data);
    });
  }
});

app.get("/notifications/:uid", (req, res) => {
  const uid = req.params.uid;

  let q = "SELECT * FROM notifications";

  if (uid !== "all") {
    q += " WHERE user_id=?";
    db.query(q, [uid], (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.json(data);
    });
  } else {
    db.query(q, (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.json(data);
    });
  }
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

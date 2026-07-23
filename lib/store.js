import fs from "fs";
import path from "path";
import crypto from "crypto";

const DATA_DIR = path.join(process.cwd(), ".data");
const FILES = {
  users: "users.json",
  bookings: "bookings.json",
  contacts: "contacts.json"
};

function ensureDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function readCollection(name) {
  ensureDir();
  const filePath = path.join(DATA_DIR, FILES[name]);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]", "utf-8");
    return [];
  }
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeCollection(name, data) {
  ensureDir();
  const filePath = path.join(DATA_DIR, FILES[name]);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

function generateId() {
  return crypto.randomBytes(12).toString("hex");
}

// ---- Users ----

export function findUserByEmail(email) {
  const users = readCollection("users");
  return users.find((u) => u.email === email.toLowerCase()) || null;
}

export function findUserById(id) {
  const users = readCollection("users");
  return users.find((u) => u._id === id) || null;
}

export function createUser({ name, email, password, role = "user" }) {
  const users = readCollection("users");
  const user = {
    _id: generateId(),
    name,
    email: email.toLowerCase(),
    password,
    role,
    membership: { plan: "Basic", billingCycle: "monthly", status: "inactive", subscribedAt: null },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  users.push(user);
  writeCollection("users", users);
  return user;
}

export function updateUserById(id, updates) {
  const users = readCollection("users");
  const index = users.findIndex((u) => u._id === id);
  if (index === -1) return null;

  if (updates.membership) {
    users[index].membership = { ...users[index].membership, ...updates.membership };
  }
  users[index].updatedAt = new Date().toISOString();
  writeCollection("users", users);
  return users[index];
}

// ---- Bookings ----

export function findBookingsByEmail(email, limit = 5) {
  const bookings = readCollection("bookings");
  return bookings
    .filter((b) => b.email === email)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, limit);
}

export function createBooking(data) {
  const bookings = readCollection("bookings");
  const booking = {
    _id: generateId(),
    ...data,
    createdAt: new Date().toISOString()
  };
  bookings.push(booking);
  writeCollection("bookings", bookings);
  return booking;
}

// ---- Contacts ----

export function createContactMessage(data) {
  const contacts = readCollection("contacts");
  const message = {
    _id: generateId(),
    ...data,
    createdAt: new Date().toISOString()
  };
  contacts.push(message);
  writeCollection("contacts", contacts);
  return message;
}

import { NextResponse } from "next/server";
import clientPromise, { dbName } from "../../../lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db(dbName);
  const tickets = await db
    .collection("tickets")
    .find()
    .sort({ createdAt: -1 })
    .toArray();

  return NextResponse.json(tickets, { status: 200 });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || !body.title || !body.description) {
    return NextResponse.json(
      { message: "Title and description are required." },
      { status: 400 }
    );
  }

  const client = await clientPromise;
  const db = client.db(dbName);

  const newTicket = {
    title: body.title,
    description: body.description,
    priority: body.priority || "Medium",
    status: "Open",
    createdAt: new Date(),
  };

  const result = await db.collection("tickets").insertOne(newTicket);

  return NextResponse.json(
    { message: "Ticket created", ticket: { ...newTicket, _id: result.insertedId } },
    { status: 201 }
  );
}

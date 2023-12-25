import { NextRequest, NextResponse } from "next/server";

import getUser from "@lib/utils/get-user";
import { prisma } from "@lib/prisma-client";


export async function GET(req: NextRequest) {
  try {
    const user = await getUser();
    const queries = await prisma.query.findMany({
      orderBy: {
        id: "asc",
      },
      where: {
        userId,
      },
    });
    return NextResponse.json({ queries });
  } catch (err) {
    return errorHandler(err);
  }
}

import { NextResponse } from "next/server";
import { UNAUTHORIZED, INTERNAL_SERVER_ERROR } from "@/constants/httpStatuses";
import InvalidCredentials from "@/errors/InvalidCredentials";

const serverErrorHandler = async (err) => {
    console.error(err);

    switch (true) {
        case err instanceof InvalidCredentials:
            return NextResponse.json({
                message: err.message ?? "Invalid username or password."
            }, {
                status: UNAUTHORIZED
            });
        default:
            return NextResponse.json({ message: "Internal Server Error." }, { status: INTERNAL_SERVER_ERROR });
    }
}

export default serverErrorHandler;

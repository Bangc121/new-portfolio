import * as yup from "yup";

import { NextResponse } from "next/server";
import { getAllPosts } from "@/services/posts";
import sendEmail from "@/services/email";

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  const body = await req.json(); // body = ReadableStream

  // 전송받은 데이터 유효성 검사
  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: "유효하지 않은 포맷" }), {
      status: 400,
    });
  }

  // Nodemailer 이메일 전송 로직
  return sendEmail(body)
    .then(
      () =>
        new Response(
          JSON.stringify({
            message: "메일을 성공적으로 보냈음",
            state: "success",
          }),
          {
            status: 200,
          }
        )
    )
    .catch((error) => {
      console.error(error);

      return new Response(
        JSON.stringify({ message: "메일 전송에 실패함", state: "failed" }),
        {
          status: 500,
        }
      );
    });
}

export async function GET(request: Request) {
  const products = await getAllPosts();
  return NextResponse.json({ products });
}

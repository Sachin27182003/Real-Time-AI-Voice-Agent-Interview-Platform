import { getRandomInterviewCover } from "@/lib/utils";

export async function GET() {
    return Response.json({ success: true,data: 'THANK YOU!'},{status: 200});
}

export async function POST(request: Request) {
    const {type , role, level,techstack, amount , userid,coverImage } = await request.json();

    try{
        const { text: questions } = await generateText({
            model: google("gemini-2.0-flash-001"),
            prompt: 'Prepare question for a job interview...'
            'The job role is ${role}'.

        });

        const interview = {
            role,type,level,
            techstack: techstack.split(','),
            questions: JSON.parse(questions),
            userId: userid,
            finalized: true,
            coverImage: getRandomInterviewCover(),
            createdAt: new Date().toISOString()
        }
        await db.collection("interviews").add(interview);

        return Response.json({success: true}, {status: 200})

    }
    catch(error) {
        console.error(error);

        return Response.json({ success: false, error },{status: 500 });
    }
}
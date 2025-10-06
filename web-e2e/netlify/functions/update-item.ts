import type { Handler } from "@netlify/functions";


const handler: Handler = async (event) => {
if (event.httpMethod !== "PATCH") {
return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
}


const SUPA_URL = process.env.SUPABASE_URL!;
const SUPA_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;


const body = JSON.parse(event.body || "{}");
const { id, title, content } = body;


if (!id) return { statusCode: 400, body: JSON.stringify({ error: "id is required" }) };


const payload: Record<string, any> = {};
if (title !== undefined) payload.title = title;
if (content !== undefined) payload.content = content;


try {
const res = await fetch(`${SUPA_URL}/rest/v1/items?id=eq.${id}`, {
method: "PATCH",
headers: {
apikey: SUPA_KEY,
Authorization: `Bearer ${SUPA_KEY}`,
"Content-Type": "application/json",
Prefer: "return=representation",
},
body: JSON.stringify(payload),
});


const data = await res.json();
return { statusCode: res.ok ? 200 : res.status, body: JSON.stringify(data) };
} catch (err: any) {
return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
}
};


export { handler };
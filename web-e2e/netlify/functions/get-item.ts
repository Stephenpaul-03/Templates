import type { Handler } from "@netlify/functions";


const handler: Handler = async () => {
const SUPA_URL = process.env.SUPABASE_URL!;
const SUPA_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;


try {
const res = await fetch(`${SUPA_URL}/rest/v1/items?select=*&order=created_at.desc`, {
headers: {
apikey: SUPA_KEY,
Authorization: `Bearer ${SUPA_KEY}`,
Accept: "application/json",
},
});


const data = await res.json();
return { statusCode: res.ok ? 200 : res.status, body: JSON.stringify(data) };
} catch (err: any) {
return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
}
};


export { handler };
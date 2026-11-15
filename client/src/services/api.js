export async function sendContact(data) {
  const res = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/contact`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.errors?.map((e) => e.message).join(' ') || 'Something went wrong.');
  return json;
}

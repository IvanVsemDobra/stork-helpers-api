export async function submitOnboarding(data: FormData) {
  const res = await fetch('/api/onboarding', {
    method: 'POST',
    body: data,
  })

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.message || 'Помилка запиту')
  }

  return res.json()
}
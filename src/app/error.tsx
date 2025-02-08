'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div>
      <main>
        <h1>Произошла ошибка</h1>
        <p>Мы уже знаем о проблеме, попробуйте обновить страницу</p>
        <button
          onClick={() => reset()}
          type="button"
        >
          Попробовать снова
        </button>
        <pre>
          Детали ошибки
          <br />
          <br />
          Name: {error.name}
          <br />
          Message: {error.message}
          <br />
          Stack: {error.stack}
        </pre>
      </main>
    </div>
  );
}
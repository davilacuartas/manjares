import { ReactNode } from 'react';

export default function NotFound(): ReactNode {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4 text-lg">Página no encontrada</p>
      <a href="/" className="mt-6 text-blue-600 hover:underline">
        Volver al inicio
      </a>
    </div>
  );
}

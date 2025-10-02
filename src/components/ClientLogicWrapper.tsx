// src/components/ClientLogicWrapper.tsx
'use client';

import dynamic from 'next/dynamic';

const ClientLogic = dynamic(() => import('../app/ClientLogic'), { ssr: false });

export default function ClientLogicWrapper() {
  return <ClientLogic />;
}

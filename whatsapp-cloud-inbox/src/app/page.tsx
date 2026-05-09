'use client';

import dynamic from 'next/dynamic';

// Disable SSR entirely — this is a client-only chat inbox.
// `window.location.search` is read at module level in HomeClient, so SSR
// would always produce a mismatch (server has no window). With ssr:false the
// component is only ever rendered in the browser, so there is no hydration
// conflict and no `typeof window` guard is needed.
const HomeClient = dynamic(() => import('./home-client'), {
  ssr: false,
  // Show nothing while the JS bundle loads — avoids a flash of wrong content.
  loading: () => <div className="h-dvh bg-[#efeae2]" />,
});

export default HomeClient;
